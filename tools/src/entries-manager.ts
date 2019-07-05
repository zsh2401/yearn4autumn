import * as pm from './pages-scanner';
import * as info from "./infox";
import * as path from 'path';
export function getEntries():any{
    var result:any = {};
    pm.getPages().forEach((e)=>{
        let entry = e.entry;
        result[entry.name] = entry.file;
    });
    result["site"] = path.resolve(info.scriptsDir,"site.ts");
    return result;
}

if (require.main === module)
{
    console.log(getEntries());
} else {
    // console.log('required as a module');
}