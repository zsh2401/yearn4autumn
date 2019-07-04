import * as path from 'path';
import * as fs from 'fs';
import * as info from './infox';
const HtmlWebpackPlugin = require("html-webpack-plugin");
const FILENAME_ENTRY = "index.js";
const FILENAME_RENDER = "render.js";
export interface Entry{
    name:string;
    file:string;
}
export class Page{
    private render:any;
    private renderFile:string;
    private entryFile:string;
    private entryName:string;
    public dirPath:string;
    constructor(
        public dirName:string
    )
    {
        this.entryName = this.dirName + "_index";
        this.dirPath = path.resolve(info.pagesDir,this.dirName);
        this.entryFile = path.resolve(this.dirPath,FILENAME_ENTRY);
        this.renderFile = path.resolve(this.dirPath,FILENAME_RENDER);
        this.render = require(this.renderFile);
    }
    getEntry():any
    {
        return {
            name:this.entryName,
            file:this.entryFile
        };
    }
    getPlugin()
    {
        let result = new HtmlWebpackPlugin({
            filename: `${this.dirPath}/index.html`,
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
    console.log(getPages()[0].getPlugin());
} else {
    // console.log('required as a module');
}