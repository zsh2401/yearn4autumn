const hpug = require('hpug');
const template = require('./template.pug');
module.exports = template(hpug.getData());