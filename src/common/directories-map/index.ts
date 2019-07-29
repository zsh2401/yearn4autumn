import * as path from 'path';
const DEFAULT_PROJ_ROOT_DIR = path.resolve(__dirname,"..","..","..");
export interface IDirectoriesMap
{
    rootDir:string;
    outputDir:string;
    srcDir:string;
    commonDir:string;
    pagesDir:string;
    assestsDir:string;
    fpagesDir:string;
    rpagesDir:string;
    npagesDir:string;
}
export default class DirectoriesMap implements IDirectoriesMap{
    public get rootDir():string{
        return this.projRootDir;
    }
    public get outputDir():string{
        return  path.resolve(this.rootDir,"dist");
    }
    public get srcDir():string{
        return  path.resolve(this.rootDir,"src");
    }
    public get commonDir():string{
        return  path.resolve(this.srcDir,"common");
    }
    public get pagesDir():string{
        return  path.resolve(this.srcDir,"pages");
    }
    public get assestsDir():string{
        return  path.resolve(this.srcDir,"assests");
    }
    public get fpagesDir():string{
        return  path.resolve(this.pagesDir,"fun");
    }
    public get rpagesDir():string{
        return  path.resolve(this.pagesDir,"root");
    }
    public get npagesDir():string{
        return  path.resolve(this.pagesDir,"normal");
    }
    constructor(private projRootDir:string=DEFAULT_PROJ_ROOT_DIR){}
}
