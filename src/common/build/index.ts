import webpack from 'webpack';
import PageScanner  from './pages-scanner';
import * as dm from "./directories-map";
export function getEntry(pm=new PageScanner()):webpack.Entry{
    var result:webpack.Entry = {};
    pm.getPages().forEach((e)=>{
        let entry = e.entry;
        result[entry.name] = entry.file;
    });
    return result;
}
export function getPlugins(pm=new PageScanner()):webpack.Plugin[]{
    let result = new Array<any>();
    pm.getPages().forEach((e,index)=>{
        result[index] = e.plugin;
    });;
    return result;
}
export function getProjRootPath():string{
    return eval("__projRootDir");
}