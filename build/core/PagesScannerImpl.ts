import { IDirectoriesMap } from "../directories-map";
import * as bc from '.'
import fs from 'fs';
import path from 'path';
import libloader from '../libloader'
export class PagesScannerImpl implements bc.IPagesScanner{
    constructor(private dirsMap:IDirectoriesMap=bc.GLOBAL_DIRS_MAP){}
    scan():Array<string>
    {
        return new Array<string>()
        .concat(this.scanAllIn(this.dirsMap.fpagesDir))
        .concat(this.scanAllIn(this.dirsMap.npagesDir))
        .concat(this.scanAllIn(this.dirsMap.rpagesDir));
    }
    scanAllIn(scanDir:string):Array<string>
    {
        console.log("scanning " + scanDir);
        let result:Array<string> = [];
        fs.readdirSync(scanDir)
        .filter(e=>fs.statSync(path.resolve(scanDir,e)).isDirectory())
        .filter(dir=>{
           return fs.existsSync(path.resolve(scanDir,dir,"page.config.ts"));
        })
        .forEach(dir=>{
            result.push(path.resolve(scanDir,dir));
        });
        return result;
    }
}