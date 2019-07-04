import * as pm from './pages-scanner';
export function getEntries():any{
    var result:any = {};
    pm.getPages().forEach((e,index)=>{
        let entry = e.getEntry();
        result[entry.name] = entry.file;
    });
    return result;
}