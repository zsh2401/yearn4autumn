/*
fun-manager.js
用于对功能模块进行管理与配置
*/
const fs = require('fs');
const path = require("path");
const info = require("../info");
const FILENAME_CONFIG = "config.json";
const FUN_LIST_DIR = path.resolve(info.rootDir,"src","fun");
function getFuns(){
    var dirs = getFunDirs();
    var srcConfigs = getFunConfigDatas(dirs);
    var handled =  handleFunConfigDatas(srcConfigs);
    return handled;
}
function handleFunConfigDatas(srcConfigs){
    var data = [];
    for(let i = 0;i<srcConfigs.length;i++){
        data[data.length] = handleFunConfigData(srcConfigs[i]);
    }
    return data;
}
function handleFunConfigData(config){
    let data = {};
    data.versionCode = config.versionCode;
    data.pages = [];
    for(let i = 0;i<config.pages.length;i++){
        data.pages[i] = handlePageData(config,i);
    }
    return data;
}
function handlePageData(config,index){
    let data = {};
    let pageInfo = config.pages[index];
    data.page = path.resolve(config.path,pageInfo.page);
    data.globalChunks = [];
    data.selfChunks = [];
    for(let i =0;i<pageInfo.chunks.length;i++){
        let crt = pageInfo.chunks[i];
        let codeFileWithoutExt = path.resolve(config.path,crt);
        if(fs.existsSync( codeFileWithoutExt + ".ts"))
        {
            data.selfChunks[data.selfChunks.length] = {"chunk_name":config.dirName +  "_" + crt ,"file":path.resolve(config.path,crt + ".js")};
        }
        else if(fs.existsSync( codeFileWithoutExt + ".js")){
            data.selfChunks[data.selfChunks.length] = {"chunk_name":config.dirName +  "_" + crt ,"file":path.resolve(config.path,crt + ".js")};
        }else{
            data.globalChunks[i] = crt;
        }
    }
    return data;
}
function getFunConfigDatas(dirs){
    var data = [];
    for(let i = 0;i<dirs.length;i++){
        data[data.length] = getFunConfigData(dirs[i]);
    }
    return data;
}
function getFunConfigData(dirName){
    let _funpath = path.resolve(FUN_LIST_DIR,dirName);
    let _cfgpath = path.resolve(_funpath,FILENAME_CONFIG)
    let text = fs.readFileSync(_cfgpath,"utf-8");
    let json =  JSON.parse(text);
    json.path = _funpath;
    json.dirName = dirName;
    return json;
}
function getFunDirs(){
    return fs.readdirSync(FUN_LIST_DIR);
}
module.exports = 
{
    getFuns: getFuns
}