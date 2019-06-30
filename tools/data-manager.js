const DATA_DIR = __dirname +  "/data";
const fs = require('fs');
function readRenderData(){
    var data = {};
    data.site = tryReadData("site");
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