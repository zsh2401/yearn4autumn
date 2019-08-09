export interface FPageManifest{
    name:string;
    hide?:boolean;
    iconSrc?:string;
    description?:string;
    title:string;
    auth?:string;
    version?:string;
    path:string;
}
export function register(manifest:FPageManifest){
    if(!((<any>window).fpages)){
        (<any>window).fpages = [];
    }
    (<any>window).fpages.push(manifest);
}
export function getAll():Array<FPageManifest>{
    return (<any>window).fpages;
}