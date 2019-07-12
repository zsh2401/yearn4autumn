import webpack from 'webpack';
import PageScanner  from './PageScanner';
import * as dm from "./DirectoriesMap";
let pm= new PageScanner();
export function getEntry():webpack.Entry{
    var result:webpack.Entry = {};
    pm.getPages().forEach((e)=>{
        let entry = e.entry;
        result[entry.name] = entry.file;
    });
    return result;
}
export function getPlugins():webpack.Plugin[]{
    let result = new Array<any>();
    pm.getPages().forEach((e,index)=>{
        result[index] = e.plugin;
    });;
    return result;
}
export function getDirectoriesMap(_projRootPath:string=null):dm.IDirectoriesMap
{
    return new dm.DirectoriesMap(_projRootPath);
}
export function getProjRootPath():string{
    return eval("__projRootDir");
}