import * as path from 'path';
let _rootDir;
if(false){
    _rootDir=  path.resolve(__dirname,"..","..");
}else{
    _rootDir = "D://Sources/fond_of_autumn";
}
export const rootDir = _rootDir;
export const outputDir= path.resolve(rootDir,"dist");
export const srcDir = path.resolve(rootDir , "src");
export const commonDir = path.resolve(srcDir , "common");
export const pagesDir = path.resolve(srcDir , "pages");
export const entriesDir = path.resolve(srcDir , "entries");
export const jadesDir = path.resolve(srcDir , "templates");
export const assestesDir = path.resolve(srcDir , "assests");
export const cssDir = path.resolve(srcDir , "css");
export const dataDir = path.resolve(srcDir , "data");
