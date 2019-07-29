import { IDirectoriesMap } from "../build/directories-map";
import path from 'path'
import glob from 'glob';
import fs from 'fs';
export class ManifestScanner{
    constructor(private dirsMap:IDirectoriesMap){}
    scan():string[]{
        return []
        .concat(this.scanDir(this.dirsMap.rpagesDir))
        .concat(this.scanDir(this.dirsMap.npagesDir))
        .concat(this.scanDir(this.dirsMap.fpagesDir));
    }
    scanDir(dirPath):string[]{
        let result = [];
        fs.readdirSync(dirPath)
        .filter(e=>{
            return fs.statSync(path.resolve(dirPath,e)).isDirectory();
        })
        .filter(dir=>{
            let manifestPath = path.resolve(dirPath,dir,"manifest.json");
            return fs.existsSync(manifestPath);
        })
        .forEach(dir=>{
            result.push(path.resolve(dirPath,dir));
        });
        return result;
    }
}