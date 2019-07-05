const hpug = require('hpug');
const template = require('./content.pug');
module.exports = template(hpug.getData());