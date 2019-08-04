import webpack from 'webpack';
import {IPageConfig} from "./";
export class EntryBuilder{
    constructor(private config:Array<IPageConfig>)
    {
    }
    build():webpack.Entry
    {
        let tmp = {};
        this.config.forEach(crt=>{
            tmp[crt.entry_name] = crt.entry_path;
        })
        return tmp;
    }
}