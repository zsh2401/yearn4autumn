"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var glob = __importStar(require("glob"));
var HtmlWebpackPlugin = require("html-webpack-plugin");
var FILENAME_OUTPAGENAME = "index.html";
var FILENAME_PATTERN_ENTRY = "index.*(js|ts)";
var FILENAME_PATTERN_RENDER = "render.*(js|ts)";
var FILENAME_FMANIFEST = "fun.json";
var Page = /** @class */ (function () {
    function Page(dirName, dirPath) {
        this.name = dirName;
        this.dirPath = dirPath;
        this.entry = this.getEntry();
        this.plugin = this.getPlugin();
    }
    Page.prototype.getEntry = function () {
        var entryName = this.name + "_entry";
        var entryFile = glob.sync(path.resolve(this.dirPath, FILENAME_PATTERN_ENTRY))[0];
        return {
            name: entryName,
            file: entryFile,
        };
    };
    Page.prototype.getPlugin = function () {
        var renderFile = glob.sync(path.resolve(this.dirPath, FILENAME_PATTERN_RENDER))[0];
        var outputHTMLPage = path.resolve(info.outputDir, this.name, FILENAME_OUTPAGENAME);
        var result = new HtmlWebpackPlugin({
            filename: outputHTMLPage,
            template: renderFile,
            chunks: ['site', this.entry.name],
            hash: true,
            xhtml: true,
        });
        return result;
    };
    return Page;
}());
exports.Page = Page;
var FPage = /** @class */ (function (_super) {
    __extends(FPage, _super);
    function FPage(dirName, dirPath) {
        var _this = _super.call(this, dirName, dirPath) || this;
        var manifestText = fs.readFileSync(path.resolve(dirPath, FILENAME_FMANIFEST), 'utf-8');
        _this.mainfest = JSON.parse(manifestText);
        return _this;
    }
    FPage.prototype.getPlugin = function () {
        var renderFile = glob.sync(path.resolve(this.dirPath, FILENAME_PATTERN_RENDER))[0];
        var outputHTMLPage = path.resolve(info.outputDir, "f", this.name, FILENAME_OUTPAGENAME);
        var result = new HtmlWebpackPlugin({
            filename: outputHTMLPage,
            template: renderFile,
            chunks: ['site', this.entry.name],
            hash: true,
            xhtml: true,
        });
        return result;
    };
    return FPage;
}(Page));
exports.FPage = FPage;
var RPage = /** @class */ (function (_super) {
    __extends(RPage, _super);
    function RPage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RPage.prototype.getPlugin = function () {
        var renderFile = glob.sync(path.resolve(this.dirPath, FILENAME_PATTERN_RENDER))[0];
        var fileName = this.name + ".html";
        var outputHTMLPage = path.resolve(info.outputDir, fileName);
        var result = new HtmlWebpackPlugin({
            filename: outputHTMLPage,
            template: renderFile,
            chunks: ['site', this.entry.name],
            hash: true,
            xhtml: true,
        });
        return result;
    };
    return RPage;
}(Page));
exports.RPage = RPage;
function getPages() {
    return getNPages().concat(getFPages()).concat(getRPages());
}
exports.getPages = getPages;
function getNPages() {
    var pdir = path.resolve(info.pagesDir, "normal");
    var dirs = fs.readdirSync(pdir);
    var result = new Array();
    dirs.forEach(function (e) {
        try {
            var tmp = new Page(e, path.resolve(pdir, e));
            result[result.length] = tmp;
        }
        catch (error) {
            console.error(error);
        }
    });
    return result;
}
exports.getNPages = getNPages;
function getFPages() {
    var pdir = path.resolve(info.pagesDir, "fun");
    var dirs = fs.readdirSync(pdir);
    var result = new Array();
    dirs.forEach(function (e) {
        try {
            var tmp = new FPage(e, path.resolve(pdir, e));
            result[result.length] = tmp;
        }
        catch (error) {
            console.error(error);
        }
    });
    return result;
}
exports.getFPages = getFPages;
function getRPages() {
    var pdir = path.resolve(info.pagesDir, "root");
    var dirs = fs.readdirSync(pdir);
    var result = new Array();
    dirs.forEach(function (e) {
        try {
            var tmp = new RPage(e, path.resolve(pdir, e));
            result[result.length] = tmp;
        }
        catch (error) {
            console.error(error);
        }
    });
    return result;
}
exports.getRPages = getRPages;
if (require.main === module) {
    console.log(getPages());
}
else {
    // console.log('required as a module');
}
