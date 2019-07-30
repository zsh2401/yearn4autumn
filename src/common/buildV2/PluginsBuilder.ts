import { IDirectoriesMap } from "../directories-map";
import  IManifest from "./IManifest";
import IPage from './IPage'
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin'
import ReactRender from '../react-render'
import { IPerfectPageData } from "./PageDataCompleter";
export default class PluginBuilder{
    constructor(private dirsMap:IDirectoriesMap,private pages:Array<IPerfectPageData>)
    {
    }
    build():Array<webpack.Plugin>
    {
        let tmp = [];
        this.pages.forEach(page=>{
            let options:HtmlWebpackPlugin.Options = {
                filename: page.manifest.output,
                template: page.manifest.renderer,
                chunks:["site",page.manifest.entry_name],
                favicon:page.manifest.icon,
                hash:true,
                xhtml:true,
                title:page.manifest.title,
                meta:{
                    "description":page.manifest.desc
                }
            }
            tmp.push(new HtmlWebpackPlugin(options));
        })
        return tmp;
    }
}