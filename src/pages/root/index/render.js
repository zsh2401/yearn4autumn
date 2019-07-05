const hpug = require('hpug');
const template = require('./index.pug');
module.exports = template(hpug.getData());