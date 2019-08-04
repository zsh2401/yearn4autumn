import {IPage} from '../../building/buildV2';
declare const __ALL_PAGE_DATA:Array<IPage>;
declare const __EXT_DATA:any;
declare const __COMPILED_DATE:string;
export function getExtData()
{
        return __EXT_DATA;
}
export function getCompileDate()
{
        return __COMPILED_DATE;
}
export function getALLPages():Array<IPage>{
        return __ALL_PAGE_DATA;
}
export function getGlobalNotice(){
        return require('./notice.json');
}
export function getFavs(){

}
