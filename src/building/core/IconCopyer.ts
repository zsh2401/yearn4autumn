import { IDirectoriesMap } from "../directories-map";
export interface IconCopyRecord{
    from:string;
    to:string;
}
export class IconCopyer{
    constructor(private readonly dirsMap:IDirectoriesMap,private readonly dirs:Array<string>){

    }
    getResult(){
        let result:Array = [];
    }
}