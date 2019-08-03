import { IDirectoriesMap } from "../directories-map";
import IPage from "./IPage";
import IManifest  from "./IPageConfig";
import Build,{getLastDir} from '.'
import path from 'path'
import fs from 'fs';
export default class PageDataCompleter{
    constructor(private dirsMap:IDirectoriesMap,private pages:Array<IPage>){}
    getResult():Array<IPerfectPageData>{
        let tmp = [];
        this.pages.forEach(page=>{
            tmp.push(this.covertToPerfectPage(page));
        })
        return tmp;
    }
    private covertToPerfectPage(page:IPage):IPerfectPageData{
        return {
            dirName:getLastDir(page.dirPath),
            dirPath:page.dirPath,
            manifest:this.getPerfectManifestOf(page)
        }
    }
    private getPerfectManifestOf(page:IPage):IPerfectPageConfig{
        return {
            template : this.getTamplatePath(page),
            entry_name: page.manifest.entry_name ||  "___entry_of_" + getLastDir(page.dirPath),
            entry_path: this.getEntryPath(page),
            output:page.manifest.output,

            ext_data:page.manifest.ext_data || {"t":"there is nothing"},
            title:page.manifest.title || "未标题",
            desc:page.manifest.desc || "慕秋,什么都有",
            icon:this.getIconPath(page),
            fun:page.manifest.f_id == null?null:this.getFunConfigOf(page), 
        };
    }
    private getFunConfigOf(page:IPage):IFunPageConfig{
        return {
            id: page.manifest.f_id,
            hide: page.manifest.f_hide || false,
            name: page.manifest.f_name || "未命名"
        }
    }
    private getTamplatePath(page:IPage):string{
        let result = null;
        if(page.manifest.template){
            result = path.resolve(page.dirPath,page.manifest.template);
        }else{
            result = path.resolve(this.dirsMap.viewDir,"page-template","StdAppPage.tsx");
        }
        if(path.extname(result) == ".pug"){
            result = "!!pug-loader!" + result;
        }
        return result;
    }
    private getEntryPath(page:IPage):string
    {
        if(page.manifest.entry_path){
            return path.resolve(page.dirPath,page.manifest.entry_path);
        }else{
            return path.resolve(page.dirPath,'index.ts');
        }
    }
    private getIconPath(page:IPage):string{
        if(page.manifest.icon){
            return path.resolve(page.dirPath,page.manifest.icon);
        }else{
            return path.resolve(this.dirsMap.assestsDir,"root","favicon.ico");
        }
    }
}
export interface IPerfectPageData{
    dirPath:string;
    dirName:string;
    manifest:IPerfectPageConfig;
}
export interface IPerfectPageConfig{
    template:string;
    
    entry_name:string;
    entry_path:string;
    output:string;

    ext_data:any;
    title:string,
    desc:string,
    icon:string;

    fun?:IFunPageConfig;
}
export interface IFunPageConfig{
    hide:boolean;
    id:string;
    name:string;
}