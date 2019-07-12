import * as path from 'path';
import * as fs from 'fs';
import * as build from './index';
import * as glob from 'glob';
import HtmlWebpackPlugin from 'html-webpack-plugin';
const FILENAME_OUTPAGENAME = "index.html";
const FILENAME_PATTERN_ENTRY = "index.*(js|ts)";
const FILENAME_PATTERN_RENDER = "render.*(js|ts)";
const FILENAME_FMANIFEST = "fun.json";

const dirsMap = build.getDirectoriesMap();
const NPAGES_OUT =dirsMap.outputDir;
const RPAGES_OUT=dirsMap.outputDir;
const FPAGES_OUT=path.resolve(dirsMap.outputDir,"f");

export interface Entry
{
    name:string;
    file:string;
}
export abstract class Page{
    public dirPath:string;
    public name:string;
    public entry:Entry;
    public plugin:any;
    constructor(dirName:string,dirPath:string)
    {
        this.name = dirName;
        this.dirPath = dirPath;
        this.entry = this.getEntry();
        this.plugin = this.getPlugin();
    }
    protected getEntry():Entry
    {
        let entryName = this.name + "_entry";
        let entryFile = glob.sync(path.resolve(this.dirPath,FILENAME_PATTERN_ENTRY))[0];
        return {
            name:entryName,
            file:entryFile,
        };
    }
    protected abstract handlePluginOptions(options:HtmlWebpackPlugin.Options){
        
    }
    protected getPlugin():HtmlWebpackPlugin{
        let options =new 
    }
}
export interface FPageManifest{
    name:string;
    desc:string;
}
export class NPage extends Page{
    protected getPlugin():any
    {
        let renderFile = glob.sync(path.resolve(this.dirPath,FILENAME_PATTERN_RENDER))[0];
        let outputHTMLPage = path.resolve(NPAGES_OUT,this.name,FILENAME_OUTPAGENAME);
        let result = new HtmlWebpackPlugin({
            filename: outputHTMLPage,
            template: renderFile,
            chunks: [ 'site', this.entry.name],
            hash: true, // 为静态资源生成hash值
            xhtml: true,
        });
        return result;
    }
}
export class FPage extends Page
{   
    manifest:FPageManifest;
    constructor(dirName:string,dirPath:string){
        super(dirName,dirPath);
        let manifestText = fs.readFileSync(path.resolve(dirPath,FILENAME_FMANIFEST),'utf-8');
        this.manifest = JSON.parse(manifestText);
    }
    getPlugin():HtmlWebpackPlugin
    {
        let renderFile = glob.sync(path.resolve(this.dirPath,FILENAME_PATTERN_RENDER))[0];
        let outputHTMLPage = path.resolve(FPAGES_OUT,this.name,FILENAME_OUTPAGENAME);
        let result = new HtmlWebpackPlugin({
            filename: outputHTMLPage,
            template: renderFile,
            chunks: [ 'site', this.entry.name],
            hash: true, // 为静态资源生成hash值
            xhtml: true,
        });
        return result;
    }
}
export class RPage extends Page
{
    getPlugin():HtmlWebpackPlugin
    {
        let renderFile = glob.sync(path.resolve(this.dirPath,FILENAME_PATTERN_RENDER))[0];
        let fileName = this.name + ".html";
        let outputHTMLPage = path.resolve(RPAGES_OUT,fileName);
        let result = new HtmlWebpackPlugin({
            filename: outputHTMLPage,
            template: renderFile,
            chunks: [ 'site', this.entry.name],
            hash: true, // 为静态资源生成hash值
            xhtml: true,
        });
        return result;
    }
}
/**Pages Scanner */
export default class PagesScanner
{
    /**constructor
     * @param dirsMap the scanner base IDirectoriesMap
     */
    constructor(private dirsMap=build.getDirectoriesMap()){}
    /**get all pages */
    getPages():Array<Page>
    {
        let pages:Array<Page> = [];
        return pages.concat(this.getNPages()).concat(this.getFPages()).concat(this.getRPages());
    }
    /** Get all normal pages */
    getNPages():Array<NPage>{
        var dirs = fs.readdirSync(this.dirsMap.npagesDir);
        let result = new Array<NPage>();
        dirs.forEach(e=>{
            try{
                let tmp = new NPage(e,path.resolve(this.dirsMap.npagesDir,e));
                result[result.length] = tmp;
            }catch(error){console.error(error);}
        });
        return result;
    }
    /**get all fun pages */
    getFPages():Array<FPage>{
        var dirs = fs.readdirSync(this.dirsMap.fpagesDir);
        let result = new Array<FPage>();
        dirs.forEach(e=>{
            try{
                let tmp = new FPage(e,path.resolve(this.dirsMap.fpagesDir,e));
                result[result.length] = tmp;
            }catch(error){console.error(error);}
        });
        return result;
    }
    /** get all root pages */
    getRPages():Array<RPage>{
        var dirs = fs.readdirSync(this.dirsMap.rpagesDir);
        let result = new Array<RPage>();
        dirs.forEach(e=>{
            try{
                let tmp = new RPage(e,path.resolve(this.dirsMap.rpagesDir,e));
                result[result.length] = tmp;
            }catch(error){console.error(error);}
        });
        return result;
    }
}