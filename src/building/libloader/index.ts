import sleep from 'system-sleep';
export default function load(path:string):any{
    let result = null;
    let err = null;
    import(path).then(r=>{
        result = r;
    }).catch(rerr=>{
        console.log(rerr);
        err = rerr;
    })
    console.log("loading " + path);
    while(result == null && err == null){
        sleep(50);
    }
    console.log("loaded");
    if(result)
        return result;
    else
        throw err;
}