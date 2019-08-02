export default interface IPageConfig
{
    template?:string;
    
    entry_name?:string;
    entry_path:string;
    output:string;

    title?:string,
    desc?:string,
    icon?:string;

    ext_data?:any;

    f_id?:string;
    f_hide?:boolean;
    f_name?:string;
}