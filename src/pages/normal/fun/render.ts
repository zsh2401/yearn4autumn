import * as scanner from '../../../common/build/pages-scanner';
const pugrender  = require('hpug');
const template = require('./template.pug');
let fpages = scanner.getFPages();
const data = pugrender.getData();
data.fpages = fpages;
data.fp_len = fpages.length;
module.exports = template(data);