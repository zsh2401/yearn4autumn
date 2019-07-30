import { IDirectoriesMap } from "../directories-map";
import IPage from "./IPage";
import IManifest  from "./IManifest";
import * as index from '.'
import path from 'path'
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
            dirName:index.getLastDir(page.dirPath),
            dirPath:page.dirPath,
            manifest:this.getPerfectManifestOf(page)
        }
    }
    private getPerfectManifestOf(page:IPage):IPerfectManifest{
        return {
            renderer : this.getRendererPath(page),
            entry_name: page.manifest.entry_name ||  "___entry_of_" + index.getLastDir(page.dirPath),
            entry_path: this.getEntryPath(page),
            output:page.manifest.output,

            title:page.manifest.title || "未标题",
            desc:page.manifest.desc || "慕秋,什么都有",
            icon:this.getIconPath(page)
        };
    }
    private getRendererPath(page:IPage):string{
        if(page.manifest.renderer){
            return path.resolve(page.dirPath,page.manifest.renderer);
        }else{
            return path.resolve(this.dirsMap.viewDir,"template","std-react.html");
        }
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
            return path.resolve(this.dirsMap.assestsDir,"favicon.ico");
        }
    }
}
export interface IPerfectPageData{
    dirPath:string;
    dirName:string;
    manifest:IPerfectManifest;
}
export interface IPerfectManifest{
    renderer:string;
    
    entry_name:string;
    entry_path:string;
    output:string;

    title:string,
    desc:string,
    icon:string;
}