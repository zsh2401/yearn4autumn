const pugrender  = require('hpug');
const template = require('./template.pug');
const data = pugrender.getData();
module.exports = template(data);