import * as path from 'path';
import * as fs from 'fs';
import * as info from './infox';
import * as glob from 'glob';

const HtmlWebpackPlugin = require("html-webpack-plugin");
const FILENAME_OUTPAGENAME = "index.html";
const FILENAME_PATTERN_ENTRY = "index.*(js|ts)";
const FILENAME_PATTERN_RENDER = "render.*(js|ts)";
const FILENAME_FMANIFEST = "fun.json";

const NPAGES_DIR = path.resolve(info.pagesDir,"normal");
const RPAGES_DIR = path.resolve(info.pagesDir,"root");
const FPAGES_DIR = path.resolve(info.pagesDir,"fun");

export interface Entry{
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
    protected abstract getPlugin():any;
}
export interface FPageManifest{
    name:string;
    desc:string;
}
export class NPage extends Page{
    protected getPlugin():any
    {
        let renderFile = glob.sync(path.resolve(this.dirPath,FILENAME_PATTERN_RENDER))[0];
        let outputHTMLPage = path.resolve(info.outputDir,this.name,FILENAME_OUTPAGENAME);
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
    mainfest:FPageManifest;
    constructor(dirName:string,dirPath:string){
        super(dirName,dirPath);
        let manifestText = fs.readFileSync(path.resolve(dirPath,FILENAME_FMANIFEST),'utf-8');
        this.mainfest = JSON.parse(manifestText);
    }
    getPlugin():any
    {
        let renderFile = glob.sync(path.resolve(this.dirPath,FILENAME_PATTERN_RENDER))[0];
        let outputHTMLPage = path.resolve(info.outputDir,"f",this.name,FILENAME_OUTPAGENAME);
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
    getPlugin():any
    {
        let renderFile = glob.sync(path.resolve(this.dirPath,FILENAME_PATTERN_RENDER))[0];
        let fileName = this.name + ".html";
        let outputHTMLPage = path.resolve(info.outputDir,fileName);
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


export function getPages():Array<Page>
{
    let pages:Array<Page> = [];
    return pages.concat(getNPages()).concat(getFPages()).concat(getRPages());
}
export function getNPages(_path:string=NPAGES_DIR):Array<NPage>{
    var dirs = fs.readdirSync(_path);
    let result = new Array<NPage>();
    dirs.forEach(e=>{
        try{
            let tmp = new NPage(e,path.resolve(_path,e));
            result[result.length] = tmp;
        }catch(error){console.error(error);}
    });
    return result;
}
export function getFPages(_path:string=FPAGES_DIR):Array<FPage>{
    var dirs = fs.readdirSync(_path);
    let result = new Array<FPage>();
    dirs.forEach(e=>{
        try{
            let tmp = new FPage(e,path.resolve(FPAGES_DIR,e));
            result[result.length] = tmp;
        }catch(error){console.error(error);}
    });
    return result;
}
export function getRPages(_path:string=RPAGES_DIR):Array<RPage>{
    var dirs = fs.readdirSync(_path);
    let result = new Array<RPage>();
    dirs.forEach(e=>{
        try{
            let tmp = new RPage(e,path.resolve(_path,e));
            result[result.length] = tmp;
        }catch(error){console.error(error);}
    });
    return result;
}
if (require.main === module)
{
    console.log(getPages());
} else 
{
    // console.log('required as a module');
}