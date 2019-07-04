"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var path = __importStar(require("path"));
var fs = __importStar(require("fs"));
var info = __importStar(require("./infox"));
var HtmlWebpackPlugin = require("html-webpack-plugin");
var FILENAME_ENTRY = "index.js";
var FILENAME_RENDER = "render.js";
var Page = /** @class */ (function () {
    function Page(dirName) {
        this.dirName = dirName;
        this.entryName = this.dirName + "_index";
        this.dirPath = path.resolve(info.pagesDir, this.dirName);
        this.entryFile = path.resolve(this.dirPath, FILENAME_ENTRY);
        this.renderFile = path.resolve(this.dirPath, FILENAME_RENDER);
        this.render = require(this.renderFile);
    }
    Page.prototype.getEntry = function () {
        return {
            name: this.entryName,
            file: this.entryFile
        };
    };
    Page.prototype.getPlugin = function () {
        var result = new HtmlWebpackPlugin({
            filename: this.dirPath + "/index.html",
            template: this.renderFile,
            chunks: ['common', this.entryName],
            hash: true,
            xhtml: true,
        });
        return result;
    };
    return Page;
}());
exports.Page = Page;
function getPages() {
    return initPageObjects(scanPageDir());
}
exports.getPages = getPages;
function scanPageDir() {
    var dir = fs.readdirSync(info.pagesDir);
    return dir;
}
function initPageObjects(dirs) {
    var result = new Array();
    dirs.forEach(function (e) {
        if (check(e)) {
            var tmp = new Page(e);
            result[result.length] = tmp;
        }
    });
    return result;
}
function check(dir) {
    var entryFile = path.resolve(info.pagesDir, dir, FILENAME_ENTRY);
    var renderFile = path.resolve(info.pagesDir, dir, FILENAME_RENDER);
    return fs.existsSync(renderFile) && fs.existsSync(entryFile);
}
if (require.main === module) {
    console.log(getPages()[0].getPlugin());
}
else {
    // console.log('required as a module');
}
