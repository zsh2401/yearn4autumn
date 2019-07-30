import fs from 'fs'
export default interface IManifest
{
    renderer?:string;
    
    entry_name?:string;
    entry_path:string;
    output:string;

    title?:string,
    desc?:string,
    icon?:string;
}
export interface IFunManifest extends IManifest
{
    f_hide?:boolean;
    f_name:string;
}