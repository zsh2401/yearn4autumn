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
exports.rootDir = path.resolve(__dirname, "..", "..");
exports.outputDir = path.resolve(exports.rootDir + "dist");
exports.srcDir = path.resolve(exports.rootDir, "src");
exports.scriptsDir = path.resolve(exports.rootDir, "src/scripts");
exports.entriesDir = path.resolve(exports.rootDir, "src/entries");
exports.jadesDir = path.resolve(exports.rootDir, "src/templates");
exports.assestesDir = path.resolve(exports.rootDir, "src/assests");
exports.cssDir = path.resolve(exports.rootDir, "src/css");
exports.dataDir = path.resolve(exports.rootDir, "src/data");
