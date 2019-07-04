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
function getEntries() {
    var result = {};
    pm.getPages().forEach(function (e, index) {
        var entry = e.getEntry();
        result[entry.name] = entry.file;
    });
    return result;
}
exports.getEntries = getEntries;
