import webpack = require("webpack");
import { IDirectoriesMap } from "../directories-map";
import PagesScanner from  "./PagesScanner";
import EntryBuilder from "./EntryBuilder";
import PluginBuilder from "./PluginsBuilder";
import path from 'path';
import PageDataCompleter, { IPerfectPageData } from "./PageDataCompleter";
export default BuildV2;
module BuildV2
{
    export class BuildHelper{
        private pagesScanner:PagesScanner;
        private cache:Array<IPerfectPageData>;
        constructor(private dirsMap:IDirectoriesMap){
            this.pagesScanner = new PagesScanner(dirsMap);
        }
        load()
        {
            this.cache = new PageDataCompleter(this.dirsMap,this.pagesScanner.scan()).getResult();
            console.log(this.cache);
        }   
        get Entry():webpack.Entry
        {
            return new EntryBuilder(this.dirsMap,this.cache).build();
        }
        get PagePlugins():Array<webpack.Plugin>
        {
            return new PluginBuilder(this.dirsMap,this.cache).build();
        }
        get Cache(){
            return this.cache;
        }
    }
    export function getLastDir(fullPath:string):string{  //当前目录路径（字符串）
        let index = fullPath.split(path.sep).join('/').lastIndexOf("\/");  //兼容两个平台 并获取最后位置index
        return fullPath.substring(index + 1, fullPath.length); //截取获得结果
    }
}
