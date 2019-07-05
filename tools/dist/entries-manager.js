"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var pm = __importStar(require("./pages-scanner"));
var info = __importStar(require("./infox"));
var path = __importStar(require("path"));
function getEntries() {
    var result = {};
    pm.getPages().forEach(function (e) {
        var entry = e.entry;
        result[entry.name] = entry.file;
    });
    result["site"] = path.resolve(info.scriptsDir, "site.ts");
    return result;
}
exports.getEntries = getEntries;
if (require.main === module) {
    console.log(getEntries());
}
else {
    // console.log('required as a module');
}
