import fs from 'fs'
export interface IManifest
{
    template:string | "std-react" | "std-pug";
    entry_name:string;
    entry:string;
    output:string;

    title:string,
    desc:string,
    icon?:string;
}