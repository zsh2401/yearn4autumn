import {execSync} from 'child_process'
let cmdList = [
    "cd _dist_",
    "git add .",
    "git commit -m update",
    'git push -f'
]
cmdList.forEach(cmd=>{
    try{
        console.log(execSync(cmd,{encoding:"utf-8"}));
    }catch(err){console.log(err);} 
})
