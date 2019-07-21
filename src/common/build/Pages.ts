import * as path from 'path';
import * as fs from 'fs';
import * as glob from 'glob';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { IDirectoriesMap, DirectoriesMap } from './directories-map';

const FILENAME_OUTPAGENAME = "index.html";
const FILENAME_PATTERN_ENTRY = "index.*(js|jsx|tsx|ts)";
const FILENAME_PATTERN_RENDER = "render.*(js|ts)";

export interface Entry
{
    name:string;
    file:string;
}
export abstract class Page{
    private _dirPath:string;
    private _name:string;
    private _entry:Entry;
    private _plugin:HtmlWebpackPlugin;
    private _dirsMap:IDirectoriesMap;
    public get dirPath(){return this._dirPath;};
    public set dirPath(v){this._dirPath = v;}
    public get name(){return this._name;};
    public set name(v){this._name = v;}
    public get entry(){return this._entry;};
    public set entry(v){this._entry = v;}
    public get plugin(){return this._plugin;};
    public set plugin(v){this._plugin = v;}
    public get dirsMap(){return this._dirsMap;};
    public set dirsMap(v){this._dirsMap = v;}

    constructor(dirName:string,dirPath:string,dirsMap:IDirectoriesMap=new DirectoriesMap())
    {
        this.name = dirName;
        this.dirPath = dirPath;
        this.dirsMap = dirsMap;
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
    protected getRenderFile():string
    {
        return glob.sync(path.resolve(this.dirPath,FILENAME_PATTERN_RENDER))[0];
    }
    protected getOutputFile():string
    {
        return path.resolve(this.dirsMap.outputDir,this.name,FILENAME_OUTPAGENAME);
    }
    protected getChunks():Array<string>
    {
        return [ 'site', this.entry.name];
    }
    protected getIcon():string
    {
        return  path.resolve(this.dirsMap.assestsDir,"favicon.ico");
    }
    protected getPluginOptions(): HtmlWebpackPlugin.Options
    {
        return {
            filename:this.getOutputFile(),
            template:this.getRenderFile(),
            chunks: this.getChunks(),
            favicon:this.getIcon(),
            hash: true, // 为静态资源生成hash值
            xhtml: true,
        };
    }
    protected getPlugin():HtmlWebpackPlugin
    {
        return new HtmlWebpackPlugin(this.getPluginOptions());
    }
}

export interface FPageManifest{
    name:string;
    desc:string;
    hide:boolean;
}

export class NPage extends Page{}

export class FPage extends Page
{   
    private static readonly FILENAME_FMANIFEST = "fun.json"
    manifest:FPageManifest;
    constructor(dirName:string,dirPath:string,dirsMap:IDirectoriesMap=null){
        super(dirName,dirPath,dirsMap);
        let manifestText = fs.readFileSync(path.resolve(dirPath,FPage.FILENAME_FMANIFEST),'utf-8');
        this.manifest = JSON.parse(manifestText);
    }
    protected getOutputFile(){
        return path.resolve(this.dirsMap.outputDir,'f',this.name,FILENAME_OUTPAGENAME);
    }
}

export class RPage extends Page
{
    protected getOutputFile(){
        let fileName = this.name + ".html";
        return path.resolve(this.dirsMap.outputDir,fileName);
    }
}