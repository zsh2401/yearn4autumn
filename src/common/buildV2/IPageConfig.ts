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
}
export interface IFunPageConfig extends IPageConfig
{
    f_hide?:boolean;
    f_name:string;
}