const pugrender  = require('hpug');
const template = require('./template.pug');
const ps = require('../../../../tools/dist/pages-scanner');
let fpages = ps.getFPages();
const data = pugrender.getData();
data.fpages = fpages;
module.exports = template(data);