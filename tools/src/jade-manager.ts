const HtmlWebpackPlugin = require("html-webpack-plugin");
import * as info from './infox'
import * as data from './data-manager'
const jades = data.getPugs();
export function get(){
    var data = [];
    for(let i = 0;i<jades.length;i++){
        data[data.length] = new HtmlWebpackPlugin({
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
    }
    return data;
}
export function getData(){
    data.readRenderData
    return {title:"You win!"}
}