import DirectoriesMap, { IDirectoriesMap } from "../directories-map";
import path from 'path';
import { IBuildCore } from "./IBuildCore";
import BuildCoreImpl from './BuildCoreImpl';
export * from './IBuildCore'
export * from './IPage'
export * from './IPageConfig'
export * from './PagesScannerImpl'
export * from './IPagesScanner'
export * from './Constant'
export * from './IBuildCore'
export * from './PageHandler'
export * from './ICopyRecord'
export var GLOBAL_DIRS_MAP:IDirectoriesMap;
export function loadDirsMap(dirsMap:IDirectoriesMap){
    this.GLOBAL_DIRS_MAP = dirsMap;
}
export function createBuildCore():IBuildCore{
    return new BuildCoreImpl();
}
export function getDir(fullPath:string):string{  //当前目录路径（字符串）
    let index = fullPath.split(path.sep).join('/').lastIndexOf("\/");  //兼容两个平台 并获取最后位置index
    return fullPath.substring(0,index); //截取获得结果
}
export function getLastDir(fullPath:string):string{  //当前目录路径（字符串）
    let index = fullPath.split(path.sep).join('/').lastIndexOf("\/");  //兼容两个平台 并获取最后位置index
    return fullPath.substring(index + 1, fullPath.length); //截取获得结果
}