const pugrender  = require('../../../layout/pug/pugrender');
const template = require('./template.pug');
const data = pugrender.getData();
module.exports = template(data);