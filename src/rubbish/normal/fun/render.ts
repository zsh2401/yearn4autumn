import PageScanner  from '../../../common/build/pages-scanner';
import {IDirectoriesMap, DirectoriesMap} from '../../../common/build/directories-map';

declare var __projRootDir:string;

let pm= new PageScanner(new DirectoriesMap(__projRootDir));

const pugrender  = require('hpug');
const template = require('./template.pug');

let fpages = pm.getFPages().filter(e=>{
    return e.manifest.hide != true;
});
const data = pugrender.getData();
data.fpages = fpages;
data.fp_len = fpages.length;
module.exports = template(data);