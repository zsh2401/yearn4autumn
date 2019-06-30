const DATA_DIR = __dirname +  "/data";
const fs = require('fs');
function readRenderData(){
    var data = {};
    data.site = tryReadData("site");
    data.site.menu = tryReadData("menu");
    return data;
}
function tryReadData(id){
    var text = fs.readFileSync(DATA_DIR + "/" + id + ".json",'utf-8');
    return JSON.parse(text);
}
module.exports = 
{
    readRenderData : readRenderData
}