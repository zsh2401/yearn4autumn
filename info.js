const path = require('path');
const rootDir =__dirname;
const outputDir= path.resolve(rootDir , "dist");
const srcDir =  path.resolve(rootDir,"src");
const scriptsDir = path.resolve(srcDir , "scripts");
const assestesDir = path.resolve(srcDir , "assestes");
const cssDir = path.resolve(srcDir , "css");
const dataDir = path.resolve(srcDir , "data");
module.exports = {
     rootDir,
     outputDir,
     srcDir,
     scriptsDir,
     assestesDir,
     cssDir,
     dataDir
}
