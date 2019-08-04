export interface IPageConfig
{
    template?:string;
    
    entry_name?:string;
    entry_path:string;
    output:string;

    title?:string,
    desc?:string,

    ext_data?:any;
    
    id?:string;
    hide?:boolean;
    name?:string;
}