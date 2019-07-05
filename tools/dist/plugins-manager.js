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
function getPlugins() {
    var result = new Array();
    pm.getPages().forEach(function (e, index) {
        result[index] = e.plugin;
    });
    ;
    return result;
}
exports.getPlugins = getPlugins;
if (require.main === module) {
    console.log(getPlugins()[1]);
}
else {
    // console.log('required as a module');
}
