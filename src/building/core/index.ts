import webpack = require("webpack");
import { IDirectoriesMap } from "../directories-map";
import {PagesScanner} from  "./PagesScanner";
import {EntryBuilder} from "./EntryBuilder";
import {PluginBuilder} from "./PluginsBuilder";
import AbsolutePageConfig from './AbsolutePageConfig'
import path from 'path';
import {IPageConfig} from "./IPageConfig";
import { IFunPage } from "./IFunPage";
export * from './EntryBuilder';
export * from './IPage'
export * from './IPageConfig'
export * from './PagesScanner'
export * from './AbsolutePageConfig'
export * from './PluginsBuilder'
export * from './Constant'
export * from './IFunPage'
export default class BuildHelper{
    private pagesScanner:PagesScanner;
    private cache:Array<IPageConfig>;
    constructor(private dirsMap:IDirectoriesMap){
        this.pagesScanner = new PagesScanner(dirsMap);
    }
    load()
    {
        this.cache = [];
        this.pagesScanner.scan().forEach(e=>{
            this.cache.push(new AbsolutePageConfig(e.dirPath,e.config,this.dirsMap))
        });
    }   
    get Entry():webpack.Entry
    {
        return new EntryBuilder(this.cache).build();
    }
    get PagePlugins():Array<webpack.Plugin>
    {
        return new PluginBuilder(this.cache).build();
    }
    get SimpifiedData():Array<IFunPage>{
        let result:Array<IFunPage> = [];
        this.cache.forEach(pageConfig=>{
            result.push({
                id:pageConfig.id,
                name:pageConfig.name,
                desc:pageConfig.desc,
                icon:"/images/page_icons/" + pageConfig.id +"ico",
                path:getDir(pageConfig.output)
            });
        })
        return result;
    }
    get Cache(){
        return this.cache;
    }
}
export function getDir(fullPath:string):string{  //当前目录路径（字符串）
    let index = fullPath.split(path.sep).join('/').lastIndexOf("\/");  //兼容两个平台 并获取最后位置index
    return fullPath.substring(0,index); //截取获得结果
}
export function getLastDir(fullPath:string):string{  //当前目录路径（字符串）
    let index = fullPath.split(path.sep).join('/').lastIndexOf("\/");  //兼容两个平台 并获取最后位置index
    return fullPath.substring(index + 1, fullPath.length); //截取获得结果
}