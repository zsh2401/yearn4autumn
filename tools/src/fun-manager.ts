/*
fun-manager.js
用于对功能模块进行管理与配置
*/
import * as fs from 'fs';
import * as path from 'path';
import * as info from './infox';
const FILENAME_CONFIG = "config.json";
const CONFIG_ENCODING = 'utf-8';
const DEFAULT_CHUNKS = ["site"];
const FUN_LIST_DIR = path.resolve(info.rootDir,"src","fun");
export class Page{
    constructor(public page:string,
        public chunks:Array<string>,
        public entries:Array<Entry>){
            this.chunks = new Array<string>();
            this.entries = new Array<Entry>();
        }
}
export class Entry{
    constructor(public name:string,
        public path:string){}
}
export class FunConfig{
    public pages:Array<Page>;
    constructor(public name:string,
        public versionCode:number,
        public level:number,
        public desc:string)
    {
        this.pages =  new Array<Page>();
    }
}
class RawFunSetting{
    constructor(public path:string,
        public dirName:string,
        public config:RawFunConfig){
    }
}
interface RawFunConfig{
    name:string;
    versionCode:number;
    level:number;
    desc:string;
    pages:Array<RawPage>;
}
interface RawPage{
    page:string;
    includeJS:Array<string>;
}
//获取所有的fun数据
export function getFuns():Array<FunConfig>{
    let raws = getRawConfigs();
    let data = [];
    for(let i = 0;i<raws.length;i++){
        data[data.length] = handleRawConfigData(raws[i]);
    }
    return data;
}

//获取原始的fun数据
function getRawConfigs():Array<RawFunSetting>{
    let data = new Array<RawFunSetting>();
    let dirs:Array<string> = fs.readdirSync(FUN_LIST_DIR);
    for(let i = 0;i<dirs.length;i++){
        let crtDir = dirs[i];
        let dirPath = path.resolve(FUN_LIST_DIR,crtDir);
        let rawConfig:RawFunConfig = JSON.parse(fs.readFileSync(path.resolve(dirPath,FILENAME_CONFIG),CONFIG_ENCODING));
        data[data.length] = new RawFunSetting(crtDir,dirPath,rawConfig);
    }
    return data;
}
//进行路径以及其他数据的转换,以供webpack处理
function handleRawConfigData(rawData:RawFunSetting):FunConfig{
    let rawConfig = rawData.config;
    let result = new FunConfig(rawConfig.name,
        rawConfig.versionCode,rawConfig.level,rawConfig.desc);
    for(let i = 0;i<rawData.config.pages.length;i++){
        let rawPage = rawData.config.pages[i];
        let chunks = DEFAULT_CHUNKS;
        let entries = new Array<Entry>();
        for(let i = 0;i<rawPage.includeJS.length;i++){
            let crt = rawPage.includeJS[i];
            let chunkName = rawData.dirName + "_" +  crt.substring(0,crt.length - 3);
            let filePath = path.resolve(rawData.path,crt);
            entries[entries.length] = new Entry(chunkName,filePath);
            chunks[chunks.length] = chunkName;
        }
        result.pages[result.pages.length] = new Page(rawPage.page,chunks,entries); 
    }
    return result;
}
if (require.main === module) {
    console.log(getFuns());
} else {
    // console.log('required as a module');
}