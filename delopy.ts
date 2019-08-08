import {execSync} from 'child_process'
console.log(execSync("cd _dist_",{encoding:"utf-8"}));
console.log(execSync("git add .",{encoding:"utf-8"}));
console.log(execSync("git commit -m 'a'",{encoding:"utf-8"}));
console.log(execSync("git push oschina -f",{encoding:"utf-8"}))
