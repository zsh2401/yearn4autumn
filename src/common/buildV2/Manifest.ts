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
}