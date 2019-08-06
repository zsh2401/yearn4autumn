export interface IPageConfig
{
    type:"root" | "normal" | "fun";
    name:string;

    template?:string | "std-react";
    entry?:string;

    extraData?:any;

    pageTitle:string;
    pageDescription?:string;
}
export interface IRootPageConfig extends IPageConfig
{
}
export interface INormalPageConfig extends IPageConfig
{
}
export interface IFunPageConfig extends IPageConfig{
    hide?:boolean;
    name:string;
    auth:string;
}