const HtmlWebpackPlugin = require("html-webpack-plugin");
const info = require('../info');
const jades = [
    {f:"/index.jade",o:"index.html"},
    {f:"/404.jade",o:"404.html"},
];
function get(){
    var data = [];
    for(let i = 0;i<jades.length;i++){
        data[data.length] = new HtmlWebpackPlugin({
            template: info.jadesDir + jades[i].f,
            filename: jades[i].o,
            minify: {
              collapseWhitespace: true,
            },
            hash: true,
            chunks:["site","p_index"],
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