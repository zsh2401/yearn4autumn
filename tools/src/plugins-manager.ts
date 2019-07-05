import * as pm from './pages-scanner';
export function getPlugins():Array<any>{
    let result = new Array<any>();
    pm.getPages().forEach((e,index)=>{
        result[index] = e.mainPlugin;
    });;
    return result;
}
if (require.main === module)
{
    console.log(getPlugins()[0]);
} else {
    // console.log('required as a module');
}