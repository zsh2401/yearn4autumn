import { IDirectoriesMap } from "../directories-map";
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin'
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
                template:page.manifest.template,
                chunks:["site",page.manifest.entry_name],
                favicon:page.manifest.icon,
                hash:true,
                xhtml:true,
                title:page.manifest.title,
                ext_data:page.manifest.ext_data,
                meta:{
                    "description":page.manifest.desc
                }
            }
            tmp.push(new HtmlWebpackPlugin(options));
        })
        return tmp;
    }
}