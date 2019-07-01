
import * as info from './infox';
import * as fs from 'fs';
import * as path from 'path';
const DATA_DIR =  path.resolve(info.rootDir,"tools","data");
export function getPugs(){
    return tryReadData("pugs");
}
export function readRenderData():any{
    var data:any = {};
    data.site = tryReadData("site");
    data.site.menu = tryReadData("menu");
    return data;
}
function tryReadData(id:string):any{
    var text = fs.readFileSync(DATA_DIR + "/" + id + ".json",'utf-8');
    return JSON.parse(text);
}