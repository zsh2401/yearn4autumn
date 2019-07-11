import * as pm from './pages-scanner';
import * as info from "./infox";
import * as path from 'path';
import webpack from 'webpack';
export function getEntries():webpack.Entry{
    var result:webpack.Entry = {};
    pm.getPages().forEach((e)=>{
        let entry = e.entry;
        result[entry.name] = entry.file;
    });
    result["site"] = path.resolve(info.commonDir,"site");
    return result;
}

if (require.main === module)
{
    console.log(getEntries());
} else {
    // console.log('required as a module');
}