import * as path from 'path';
import * as fs from 'fs';
import {Page,FPage,NPage,RPage} from './Pages';
import { DirectoriesMap, IDirectoriesMap } from './DirectoriesMap';

/**Pages Scanner */
export default class PagesScanner
{
    /**constructor
     * @param dirsMap the scanner base IDirectoriesMap
     */
    constructor(private dirsMap:IDirectoriesMap=new DirectoriesMap()){}
    /**get all pages */
    getPages():Array<Page>
    {
        let pages:Array<Page> = [];
        return pages.concat(this.getNPages()).concat(this.getFPages()).concat(this.getRPages());
    }
    /** Get all normal pages */
    getNPages():Array<NPage>{
        var dirs = fs.readdirSync(this.dirsMap.npagesDir);
        let result = new Array<NPage>();
        dirs.forEach(e=>{
            try{
                let tmp = new NPage(e,path.resolve(this.dirsMap.npagesDir,e),this.dirsMap);
                result[result.length] = tmp;
            }catch(error){console.error(error);}
        });
        return result;
    }
    /**get all fun pages */
    getFPages():Array<FPage>{
        var dirs = fs.readdirSync(this.dirsMap.fpagesDir);
        let result = new Array<FPage>();
        dirs.forEach(e=>{
            try{
                let tmp = new FPage(e,path.resolve(this.dirsMap.fpagesDir,e),this.dirsMap);
                result[result.length] = tmp;
            }catch(error){console.error(error);}
        });
        return result;
    }
    /** get all root pages */
    getRPages():Array<RPage>{
        var dirs = fs.readdirSync(this.dirsMap.rpagesDir);
        let result = new Array<RPage>();
        dirs.forEach(e=>{
            try{
                let tmp = new RPage(e,path.resolve(this.dirsMap.rpagesDir,e),this.dirsMap);
                result[result.length] = tmp;
            }catch(error){console.error(error);}
        });
        return result;
    }
}