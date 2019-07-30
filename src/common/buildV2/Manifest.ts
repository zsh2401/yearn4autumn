import fs from 'fs'
export interface IManifest
{
    template:string | "std-react" | "std-app";
    entry_name:string;
    entry:string;
    output:string;

    title:string,
    desc:string,
    icon?:string;
    data_provider?:string;
}
export interface IFunManifest extends IManifest
{
    ext_hide?:boolean;
    ext_name:string;
}