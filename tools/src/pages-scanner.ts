import * as path from 'path';
import * as fs from 'fs';
import * as info from './infox';
import * as glob from 'glob';
const HtmlWebpackPlugin = require("html-webpack-plugin");
const FILENAME_RENDER = "render.js";
const FILENAME_OUTPAGENAME = "index.html";
const FILENAME_PATTERN_ENTRY = "index.*";
export interface Entry{
    name:string;
    file:string;
}
export class Page{
    public dirPath:string;
    public name:string;
    public entry:Entry;
    public plugin:any;
    constructor(dirName:string,dirPath:string)
    {
        this.name = dirName;
        this.dirPath = dirPath;
        this.entry = this.getEntry();
        this.plugin = this.getPlugin();
    }
    protected getEntry():Entry
    {
        let entryName = this.name + "_entry";
        let entryFile = glob.sync(path.resolve(this.dirPath,FILENAME_PATTERN_ENTRY))[0];
        return {
            name:entryName,
            file:entryFile,
        };
    }
    protected getPlugin():any
    {
        let renderFile = path.resolve(this.dirPath,FILENAME_RENDER);
        let outputHTMLPage = path.resolve(info.outputDir,this.name,FILENAME_OUTPAGENAME);
        let result = new HtmlWebpackPlugin({
            filename: outputHTMLPage,
            template: renderFile,
            chunks: [ 'site', this.entry.name],
            hash: true, // 为静态资源生成hash值
            xhtml: true,
        });
        return result;
    }
}
export class FPage extends Page
{
    getPlugin():any
    {
        let renderFile = path.resolve(this.dirPath,FILENAME_RENDER);
        let outputHTMLPage = path.resolve(info.outputDir,"f",this.name,FILENAME_OUTPAGENAME);
        let result = new HtmlWebpackPlugin({
            filename: outputHTMLPage,
            template: renderFile,
            chunks: [ 'site', this.entry.name],
            hash: true, // 为静态资源生成hash值
            xhtml: true,
        });
        return result;
    }
}
export function getPages():Array<Page>
{
    return getNPages().concat(getFPages());
}
function getNPages():Array<Page>{
    let pdir = path.resolve(info.pagesDir,"normal");
    var dirs = fs.readdirSync(pdir);
    let result = new Array<Page>();
    dirs.forEach(e=>{
        try{
            let tmp = new Page(e,path.resolve(pdir,e));
            result[result.length] = tmp;
        }catch(error){console.error(error);}
    });
    return result;
}
function getFPages():Array<FPage>{
    let pdir = path.resolve(info.pagesDir,"fun");
    var dirs = fs.readdirSync(pdir);
    let result = new Array<FPage>();
    dirs.forEach(e=>{
        try{
            let tmp = new FPage(e,path.resolve(pdir,e));
            result[result.length] = tmp;
        }catch(error){console.error(error);}
    });
    return result;
}
if (require.main === module)
{
    console.log(getPages()[1].plugin);
} else 
{
    // console.log('required as a module');
}