"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var HtmlWebpackPlugin = require("html-webpack-plugin");
var info = __importStar(require("./infox"));
var data = __importStar(require("./data-manager"));
var jades = data.getPugs();
function get() {
    var data = [];
    for (var i = 0; i < jades.length; i++) {
        data[data.length] = new HtmlWebpackPlugin({
            template: info.jadesDir + jades[i].f + ".pug",
            filename: jades[i].o,
            minify: {
                collapseWhitespace: true,
            },
            hash: true,
            chunks: jades.chunks,
        });
    }
    return data;
}
exports.get = get;
function getData() {
    data.readRenderData;
    return { title: "You win!" };
}
exports.getData = getData;
