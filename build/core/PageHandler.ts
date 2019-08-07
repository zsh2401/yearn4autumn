import {IPageConfig} from  '.'
import webpack = require('webpack');
import path from 'path';
import fs from 'fs';
import * as bc from './'
import HtmlWebpackPlugin from 'html-webpack-plugin'
export class PageHandler{
    get rawConfig():IPageConfig{
        return this.pch.raw;
    }
    get plugins():Array<webpack.Plugin>{
        let outputPath:string = "";
        let templatePath:string = "";
        switch(this.rawConfig.type){
            case "normal":
                outputPath = this.rawConfig.name + "/index.html";
                break;
            case "root":
                outputPath = this.rawConfig.name + ".html";
                break;
            case "fun":
            default:
                outputPath = "fun/" + this.rawConfig.name + "/index.html";
                break;
        }
        switch(this.rawConfig.template){
            case undefined:
            case null:
            case "std-app":
                templatePath = path.resolve(bc.GLOBAL_DIRS_MAP.viewDir,"page-template","StdAppPage.tsx");
                break;
            default:
                templatePath = this.absolutePathOf(this.rawConfig.template);
                break;
        }
        return [new HtmlWebpackPlugin
            ({
                title:this.rawConfig.pageTitle,
                meta:{
                    "description":this.rawConfig.pageDescription
                },
                extraData:this.rawConfig.extraData || {},
                filename:outputPath,
                template:templatePath,
                xhtml:true,
                hash:true,
                inject:true,
                chunks:["site",this.mainEntryName]
            })];
    }
    get mainEntryName():string{
        return "__ENTRY_OF_" + this.rawConfig.name;
    }
    get mainEntryPath():string{
        return this.absolutePathOf(this.rawConfig.entry || "index.ts");
    }
    get entry():webpack.Entry{
        let result = {};
        result[this.mainEntryName] = this.mainEntryPath
        console.log(result);
        return result;
    }
    get copies():Array<bc.ICopyRecord>{
        return new Array<bc.ICopyRecord>();
    }
    absolutePathOf(filePath:string){
        return path.resolve(this.dirPath,filePath);
    }
    private readonly pch:PageConfigHandler;
    constructor(private readonly dirPath:string){
        this.pch = new PageConfigHandler(dirPath);
    }
}
import libloader from '../libloader'
class PageConfigHandler{
    private readonly _raw:IPageConfig;
    constructor(private readonly dirPath:string){
        this._raw = libloader(path.resolve(dirPath,bc.FILENAME_CONFIG)).default  as IPageConfig;
    }
    get raw():IPageConfig{
        return this._raw;
    }
}