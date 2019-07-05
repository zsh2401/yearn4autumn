import * as pm from './pages-scanner';
export function getEntries():any{
    var result:any = {};
    pm.getPages().forEach((e)=>{
        let entry = e.mainEntry;
        result[entry.name] = entry.file;
    });
    return result;
}