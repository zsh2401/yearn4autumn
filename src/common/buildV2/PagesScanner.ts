import { IDirectoriesMap } from "../directories-map";
import IPage from './IPage'
import fs from 'fs';
import path from 'path';
import { tmpdir } from "os";
import libloader from '../libloader'
export default class PagesScanner{
    constructor(private dirsMap:IDirectoriesMap){}
    scan():Array<IPage>
    {
        return []
        .concat(this.scanAllIn(this.dirsMap.fpagesDir))
        .concat(this.scanAllIn(this.dirsMap.npagesDir))
        .concat(this.scanAllIn(this.dirsMap.rpagesDir));
    }
    scanAllIn(scanDir:string):Array<IPage>
    {
        let result = [];
        fs.readdirSync(scanDir)
        .filter(e=>fs.statSync(path.resolve(scanDir,e)).isDirectory())
        .filter(dir=>{
           return fs.existsSync(path.resolve(scanDir,dir,"manifest.ts"));
        })
        .forEach(dir=>{
            let tmp:IPage = {
                dirPath : path.resolve(scanDir,dir),
                manifest : libloader(path.resolve(scanDir,dir,"manifest.ts")).default
            }
            result.push(tmp);
        });
        return result;
    }
}