import PageScanner  from '../../../common/build/PageScanner';
import {IDirectoriesMap, DirectoriesMap} from '../../../common/build/DirectoriesMap';
import PagesScanner from '../../../common/build/PageScanner';

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