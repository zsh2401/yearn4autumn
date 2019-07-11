import webpack from 'webpack';
import * as info from "./infox";
import * as pm from './pages-scanner';
import path from 'path';
export function getEntry():webpack.Entry{
    var result:webpack.Entry = {};
    pm.getPages().forEach((e)=>{
        let entry = e.entry;
        result[entry.name] = entry.file;
    });
    result["site"] = path.resolve(info.commonDir,"site");
    return result;
}
export function getPlugins():webpack.Plugin[]{
    let result = new Array<any>();
    pm.getPages().forEach((e,index)=>{
        result[index] = e.plugin;
    });;
    return result;
}