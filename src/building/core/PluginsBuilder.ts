import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin'
import {IPageConfig} from "./";
import fs from 'fs'
import path from 'path'
import { IPage } from './IPage';
import DirectoriesMap from '../directories-map';
export class PluginBuilder{
    constructor(private configs:Array<IPageConfig>)
    {
    }
    build():Array<webpack.Plugin>
    {
        let tmp = [];
        this.configs.forEach(config=>{
            let options:HtmlWebpackPlugin.Options = {
                filename: config.output,
                template:config.template,
                chunks:["site",config.entry_name],
                favicon:getIcon(config),
                hash:true,
                xhtml:true,
                title:config.title,
                ext_data:config.ext_data,
                compileDate:new Date(),
                meta:{
                    "description":config.desc
                }
            }
            tmp.push(new HtmlWebpackPlugin(options));
        })
        return tmp;
    }
    
}
const DEFAULT_ICON_PATH = path.resolve(new DirectoriesMap().assestsDir,"root","favicon.ico");
function getIcon(config:IPageConfig):string{
    let iconPath = path.resolve(getDir(config.entry_path),"icon.ico");
    if(fs.existsSync(iconPath))
    {
        return iconPath;
    }else{
        return DEFAULT_ICON_PATH;
    }
}
function getDir(fullPath:string):string{  //当前目录路径（字符串）
    let index = fullPath.split(path.sep).join('/').lastIndexOf("\/");  //兼容两个平台 并获取最后位置index
    return fullPath.substring(0,index); //截取获得结果
}