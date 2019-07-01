const fun = require("./fun-manager");
const jadeManager = require('./jade-manager');
const data = require('./data-manager');
const info = require("../info");
var funs = fun.getFuns();
/*综合地获取所有入口点 */
function getEntries(){
    let entries = {};
    entries["p_index"] = info.entriesDir + "/index.ts";
    entries["site"] = info.scriptsDir + "/site.ts";
    for(let i = 0;i<funs.length;i++){
        let crtFun = funs[i];
        for(let j =0;j<crtFun.pages.length;j++){
            let crtPage = crtFun.pages[j];
            for(let k = 0;k<crtPage.selfChunks.length;k++){
                let crtChunk = crtPage.selfChunks[k];
                entries[crtChunk.chunk_name] = crtChunk.file;
            }
        }
    }
    return entries;
}
function getPlugins(){
    let plugins = [];
    plugins = plugins.concat(jadeManager.plugins);
    for(let i = 0;i<funs.length;i++){
        let crtFun = funs[i];
        for(let j =0;j<crtFun.pages.length;j++){
            let crtPage = crtFun.pages[j];
            let chunks = [];
            for(let k = 0;k<crtPage.selfChunks.length;k++){
                let crtChunk = crtPage.selfChunks[k];
                entries[crtChunk.chunk_name] = crtChunk.file;
            }
            let plugin = new HtmlWebpackPlugin({
                template: info.jadesDir + jades[i].f + ".pug",
                filename: jades[i].o,
                minify: {
                  collapseWhitespace: true,
                },
                hash: true,
                chunks:jades.chunks,
                // // 这行是新增的。
                // excludeChunks: ['contact']
            });
            plugins[plugin.length] = plugin;
        }
    }
    return plugins;
}
function getPugData(){}

console.log(getEntries());