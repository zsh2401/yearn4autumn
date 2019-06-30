const HtmlWebpackPlugin = require("html-webpack-plugin");
const info = require('../info');
const data = require("./data-manager");
const jades = data.getPugs();
function get(){
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
function getData(){
    return {title:"You win!"}
}
module.exports = {
    plugins:get(),
    data:getData(),
};