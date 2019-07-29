import webpack = require("webpack");
import { IDirectoriesMap } from "../build/directories-map";
import { ManifestScanner } from "./ManifestScanner";
import { ManifestReader } from "./ManifestReader";
import { IManifest } from "./Manifest";
import HtmlWebpackPlugin from 'html-webpack-plugin'
import * as consts from './Constant';
export class BuildHelper{
    private scanner:ManifestScanner;
    private reader:ManifestReader;
    private cache:Array<IManifest>;
    constructor(private dirsMap:IDirectoriesMap){
        this.scanner = new ManifestScanner(dirsMap);
        this.reader = new ManifestReader(dirsMap);
    }
    load()
    {
        let pageDirs = this.scanner.scan();
        console.log(pageDirs);
        this.cache = new Array<IManifest>();
        for(let i in pageDirs){
            try{
                this.cache.push(this.reader.read(pageDirs[i]));
            }catch(err){
                console.log(err);
            }
        }
    }   
    get Entry():webpack.Entry
    {
        let tmp = {};
        this.cache.forEach(manifest=>{
            tmp[manifest.entry_name] = manifest.entry;
        })
        return tmp;
    }
    get PagePlugins():Array<webpack.Plugin>{
        let tmp = new Array<webpack.Plugin>();
        this.cache.forEach(manifest=>{
            let _template = manifest.template;
            if(_template.endsWith(".pug")){
                _template = "!!pug-loader!" + _template;
            };
            let config:HtmlWebpackPlugin.Options={
                filename:manifest.output,
                template:_template,
                title:manifest.title,
                favicon:manifest.icon,
                meta:
                {
                    "description":manifest.desc
                },
                notice:consts.notice,
                xhtml:true,
                hash:true,
                chunks:["site","vcomments",manifest.entry_name]
            };
            tmp.push(new HtmlWebpackPlugin(config));
        })
        return tmp;
    }
}