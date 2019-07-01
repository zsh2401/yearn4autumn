import * as HtmlWebpackPlugin from "html-webpack-plugin";
import * as data from './data-manager'
import * as jadeManager from './jade-manager';
import * as funManager from './fun-manager';
import * as info from './infox'
import * as path from 'path'
let funs:Array<funManager.FunConfig>;
let plugins:Array<HtmlWebpackPlugin>;
let entries:any = {};
export class Entry{
    constructor(public name:string,public value:string){}
}
export function init():void{
    plugins = jadeManager.get();
    funs = funManager.getFuns();
    entries["site"] = path.resolve(info.scriptsDir,"site.ts");
    entries["p_index"] = path.resolve(info.entriesDir,"index.ts");
    for(let i = 0;i<funs.length;i++){
        handleFun(funs[i]);
    }
}
export function getPlugins():Array<HtmlWebpackPlugin>{
    return plugins;
}
export function getEntries():any{
    return entries;
}
export function getPugData():any{
    return data.readRenderData();
}
function handleFun(fun:funManager.FunConfig)
{
    for(let i =0;i<fun.pages.length;i++){
        let crtPage = fun.pages[i];
        crtPage.entries
    }
}



if (require.main === module) {
    console.log(getPlugins());
} else {
    // console.log('required as a module');
}