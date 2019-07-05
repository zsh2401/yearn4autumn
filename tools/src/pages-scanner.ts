import * as path from 'path';
import * as fs from 'fs';
import * as info from './infox';
const HtmlWebpackPlugin = require("html-webpack-plugin");
const FILENAME_ENTRY = "index.js";
const FILENAME_RENDER = "render.js";
const FILENAME_OUTPAGENAME = "index.html";
export interface Entry{
    name:string;
    file:string;
}
export class Page{
    private renderFile:string;
    private entryFile:string;
    private entryName:string;
    public dirPath:string;
    public pageName:string;
    public dirName:string;
    public mainEntry:Entry;
    public mainPlugin:any;
    constructor(dirName:string)
    {
        this.pageName = dirName;
        this.dirName = dirName;
        this.entryName = this.dirName + "_index";
        this.dirPath = path.resolve(info.pagesDir,this.dirName);
        this.entryFile = path.resolve(this.dirPath,FILENAME_ENTRY);
        this.renderFile = path.resolve(this.dirPath,FILENAME_RENDER);
        this.mainEntry = this.getEntry();
        this.mainPlugin = this.getPlugin();
    }
    private getEntry():Entry
    {
        return {
            name:this.entryName,
            file:this.entryFile
        };
    }
    private getPlugin()
    {
        let result = new HtmlWebpackPlugin({
            filename: path.resolve(info.outputDir,this.dirName,FILENAME_OUTPAGENAME),
            template: this.renderFile,
            chunks: [ 'common', this.entryName],
            hash: true, // 为静态资源生成hash值
            xhtml: true,
        });
        return result;
    }
}
export function getPages():Array<Page>{
    return initPageObjects(scanPageDir());
}
function scanPageDir():Array<string>{
    var dir = fs.readdirSync(info.pagesDir);
    return dir;
}
function initPageObjects(dirs:Array<string>):Array<Page>
{
    let result = new Array<Page>();
    dirs.forEach(e=>{
        if(check(e)){
            let tmp = new Page(e);
            result[result.length] = tmp;
        }
    });
    return result;
}
function check(dir:string):boolean{
    let entryFile = path.resolve(info.pagesDir,dir,FILENAME_ENTRY);
    let renderFile = path.resolve(info.pagesDir,dir,FILENAME_RENDER);
    return fs.existsSync(renderFile) && fs.existsSync(entryFile);
}
if (require.main === module)
{
    console.log(getPages()[0].mainPlugin);
} else {
    // console.log('required as a module');
}