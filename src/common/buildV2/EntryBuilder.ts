import { IDirectoriesMap } from "../directories-map";
import IPage from './IPage'
import webpack from 'webpack';
import { IPerfectPageData } from "./PageDataCompleter";
export default class EntryBuilder{
    constructor(private dirsMap:IDirectoriesMap,private pages:Array<IPerfectPageData>)
    {
    }
    build():webpack.Entry
    {
        let tmp = {};
        this.pages.forEach(page=>{
            tmp[page.manifest.entry_name] = page.manifest.entry_path;
        })
        return tmp;
    }
}