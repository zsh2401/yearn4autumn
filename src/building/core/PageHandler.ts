import {IPageConfig} from  '.'
import webpack = require('webpack');
import path from 'path';
export class PageHandler{
    get rawConfig():IPageConfig{
        return this.pch.raw;
    }
    get plugins():Array<webpack.Plugin>{
        return getPlugins(this);
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
        return result;
    }
    private absolutePathOf(filePath:string){
        return path.resolve(this.dirPath,filePath);
    }
    private readonly pch:PageConfigHandler;
    constructor(private readonly dirPath:string){
        this.pch = new PageConfigHandler(dirPath);
        this.pch.load();
    }
}
class PageConfigHandler{
    constructor(private readonly dirPath:string){}
    public load(){}
    get raw():IPageConfig{}
    get absolute():IPageConfig{}
}
function getPlugins(ph:PageHandler):Array<webpack.Plugin>{
    
}
function getHtmlPlugin(ph:PageHandler){}