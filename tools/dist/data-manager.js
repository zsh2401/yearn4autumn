"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var info = __importStar(require("./infox"));
var fs = __importStar(require("fs"));
var path = __importStar(require("path"));
var DATA_DIR = path.resolve(info.rootDir, "tools", "data");
function getPugs() {
    return tryReadData("pugs");
}
exports.getPugs = getPugs;
function readRenderData() {
    var data = {};
    data.site = tryReadData("site");
    data.site.menu = tryReadData("menu");
    return data;
}
exports.readRenderData = readRenderData;
function tryReadData(id) {
    var text = fs.readFileSync(DATA_DIR + "/" + id + ".json", 'utf-8');
    return JSON.parse(text);
}
