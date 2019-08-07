export interface IPagesScanner{
    scan():Array<string>;
    scanAllIn(directoryPath:string):Array<string>;
}