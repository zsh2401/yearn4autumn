import {IPageConfig} from './'
import path from 'path'
import { IDirectoriesMap } from '../directories-map';
export default class AbsolutePageConfig implements IPageConfig{
    get template(){
        let result = null;
        if(this.rawConfig.template){
            result = path.resolve(this.dirPath,this.rawConfig.template);
        }else{
            result = path.resolve(this.dirsMap.viewDir,"page-template","StdAppPage.tsx");
        }
        if(path.extname(result) == ".pug"){
            result = "!!pug-loader!" + result;
        }
        return result;
    }
    
    get entry_name():string{
        return "___THE_ENTRY_OF_" + this.dirName; 
    }
    get entry_path():string{
        if(this.rawConfig.entry_path){
            return path.resolve(this.dirPath,this.rawConfig.entry_path);
        }else{
            return path.resolve(this.dirPath,'index.ts');
        }
    }
    get output():string{
        if(this.rawConfig.output){
            return this.rawConfig.output;
        } else{
            return path.resolve(this.dirName,"index.html");
        }
    }

    get title():string{
        if(this.rawConfig.title){
            return this.rawConfig.title;
        }else{
            return "未命名页面";
        }
    }
    get desc():string{
        if(this.rawConfig.desc){
            return this.rawConfig.desc;
        }else{
            return "慕秋-你的全能工具箱";
        }
    }

    get ext_data():any{
        if(this.rawConfig.ext_data){
            return this.rawConfig.ext_data;
        }else{
            return {__nodata__:true}
        }
    }

    get hide():boolean{
        if(this.rawConfig.hide){
            return this.rawConfig.hide;
        }else{
            return false;
        }
    }
    get name():string{
        if(this.rawConfig.name){
            return this.rawConfig.name;
        }else{
            return "无名应用";
        }
    }
    readonly dirName:string;
    constructor(
        public readonly dirPath:string,
        public readonly rawConfig:IPageConfig,
        private readonly dirsMap:IDirectoriesMap)
    {
        this.dirName = getLastDir(dirPath);
    }
}
function getLastDir(fullPath:string):string{  //当前目录路径（字符串）
    let index = fullPath.split(path.sep).join('/').lastIndexOf("\/");  //兼容两个平台 并获取最后位置index
    return fullPath.substring(index + 1, fullPath.length); //截取获得结果
}