declare const __ALL_FUN_PAGE_DATA;
declare const __EXT_DATA:any;
declare const __COMPILED_DATE:string;
export function getExtData():any
{
        return __EXT_DATA;
}
export function getCompileDate():string
{
        return __COMPILED_DATE;
}
export function getAllFunPages():any{
        return __ALL_FUN_PAGE_DATA;
}
export function getGlobalNotice():any{
        return require('./notice.json');
}
export function getFavs(){
        let storage = window.localStorage;
}
