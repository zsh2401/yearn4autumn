"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var data = __importStar(require("./data-manager"));
var jadeManager = __importStar(require("./jade-manager"));
var funManager = __importStar(require("./fun-manager"));
var info = __importStar(require("./infox"));
var path = __importStar(require("path"));
var funs;
var plugins;
var entries = {};
var Entry = /** @class */ (function () {
    function Entry(name, value) {
        this.name = name;
        this.value = value;
    }
    return Entry;
}());
exports.Entry = Entry;
function init() {
    plugins = jadeManager.get();
    funs = funManager.getFuns();
    entries["site"] = path.resolve(info.scriptsDir, "site.ts");
    entries["p_index"] = path.resolve(info.entriesDir, "index.ts");
    for (var i = 0; i < funs.length; i++) {
        handleFun(funs[i]);
    }
}
exports.init = init;
function getPlugins() {
    return plugins;
}
exports.getPlugins = getPlugins;
function getEntries() {
    return entries;
}
exports.getEntries = getEntries;
function getPugData() {
    return data.readRenderData();
}
exports.getPugData = getPugData;
function handleFun(fun) {
}
if (require.main === module) {
    console.log(getPlugins());
}
else {
    // console.log('required as a module');
}
