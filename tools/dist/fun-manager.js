"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
fun-manager.js
用于对功能模块进行管理与配置
*/
var fs = __importStar(require("fs"));
var path = __importStar(require("path"));
var info = __importStar(require("./infox"));
var FILENAME_CONFIG = "config.json";
var CONFIG_ENCODING = 'utf-8';
var DEFAULT_CHUNKS = ["site"];
var FUN_LIST_DIR = path.resolve(info.rootDir, "src", "fun");
var Page = /** @class */ (function () {
    function Page(page, chunks, entries) {
        this.page = page;
        this.chunks = chunks;
        this.entries = entries;
        this.chunks = new Array();
        this.entries = new Array();
    }
    return Page;
}());
exports.Page = Page;
var Entry = /** @class */ (function () {
    function Entry(name, path) {
        this.name = name;
        this.path = path;
    }
    return Entry;
}());
exports.Entry = Entry;
var FunConfig = /** @class */ (function () {
    function FunConfig(name, versionCode, level, desc) {
        this.name = name;
        this.versionCode = versionCode;
        this.level = level;
        this.desc = desc;
        this.pages = new Array();
    }
    return FunConfig;
}());
exports.FunConfig = FunConfig;
var RawFunSetting = /** @class */ (function () {
    function RawFunSetting(path, dirName, config) {
        this.path = path;
        this.dirName = dirName;
        this.config = config;
    }
    return RawFunSetting;
}());
//获取所有的fun数据
function getFuns() {
    var raws = getRawConfigs();
    var data = [];
    for (var i = 0; i < raws.length; i++) {
        data[data.length] = handleRawConfigData(raws[i]);
    }
    return data;
}
exports.getFuns = getFuns;
//获取原始的fun数据
function getRawConfigs() {
    var data = new Array();
    var dirs = fs.readdirSync(FUN_LIST_DIR);
    for (var i = 0; i < dirs.length; i++) {
        var crtDir = dirs[i];
        var dirPath = path.resolve(FUN_LIST_DIR, crtDir);
        var rawConfig = JSON.parse(fs.readFileSync(path.resolve(dirPath, FILENAME_CONFIG), CONFIG_ENCODING));
        data[data.length] = new RawFunSetting(crtDir, dirPath, rawConfig);
    }
    return data;
}
//进行路径以及其他数据的转换,以供webpack处理
function handleRawConfigData(rawData) {
    var rawConfig = rawData.config;
    var result = new FunConfig(rawConfig.name, rawConfig.versionCode, rawConfig.level, rawConfig.desc);
    for (var i = 0; i < rawData.config.pages.length; i++) {
        var rawPage = rawData.config.pages[i];
        var chunks = DEFAULT_CHUNKS;
        var entries = new Array();
        for (var i_1 = 0; i_1 < rawPage.includeJS.length; i_1++) {
            var crt = rawPage.includeJS[i_1];
            var chunkName = rawData.dirName + "_" + crt.substring(0, crt.length - 3);
            var filePath = path.resolve(rawData.path, crt);
            entries[entries.length] = new Entry(chunkName, filePath);
            chunks[chunks.length] = chunkName;
        }
        result.pages[result.pages.length] = new Page(rawPage.page, chunks, entries);
    }
    return result;
}
if (require.main === module) {
    console.log(getFuns());
}
else {
    // console.log('required as a module');
}
