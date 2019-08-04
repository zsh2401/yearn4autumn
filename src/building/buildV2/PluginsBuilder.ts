import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin'
import {IPageConfig} from "./";
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
                favicon:config.icon,
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