import { IManifest } from "./Manifest";
import path, { dirname } from 'path';
import { IDirectoriesMap } from "../build/directories-map";
import fs from "fs";
export class ManifestReader{
    constructor(private dirsMap:IDirectoriesMap){}
    read(pageDir:string):IManifest{
        let dirName = getLastDir(pageDir);
        let raw = this.readRawManifest(pageDir);
        let completed = this.complete(dirName,pageDir,raw);
        let result = this.convertToAbsoluteManifest(dirName,pageDir,completed);
        return result;
    }
    private readRawManifest(_path:string):IManifest{
        let jsonText =  fs.readFileSync(path.resolve(_path,"manifest.json"),"utf-8");
        return JSON.parse(jsonText) as IManifest;
    }
    private complete(dirName:string,dirPath:string,raw:IManifest):IManifest{
        let dft:IManifest = {
            output:path.resolve("f",dirName),
            entry:"index.ts",
            entry_name:"____entry_" + dirName,

            template:"render.ts",
            title:"未命名",
            icon:path.resolve(this.dirsMap.assestsDir,"favicon.ico"),
            desc:"慕秋-多功能响应式网站",
        }
        for(let key in raw)
        {
            if(raw[key] != null)
                dft[key] = raw[key];
        }
        return dft;
    }
    private convertToAbsoluteManifest(dirName:string,dirPath:string,manifest:IManifest):IManifest{
        manifest.entry = path.resolve(dirPath,manifest.entry);
        if(!fs.existsSync(manifest.icon)){
            manifest.icon = path.resolve(dirPath,manifest.icon);
        }
        if(manifest.template === "std-react")
            manifest.template = path.resolve(this.dirsMap.srcDir,"view","template","std-react.pug")
        else if(manifest.template === "std-pug")
            manifest.template = path.resolve(this.dirsMap.commonDir,"hpug","body.pug")
        else
            manifest.template = path.resolve(dirPath,manifest.template);
        console.log(manifest);
        return manifest;
    }
}
function getLastDir(fullPath:string):string{  //当前目录路径（字符串）
    let index = fullPath.split(path.sep).join('/').lastIndexOf("\/");  //兼容两个平台 并获取最后位置index
    return fullPath.substring(index + 1, fullPath.length); //截取获得结果
}