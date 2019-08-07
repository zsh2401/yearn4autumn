import { items } from "./Data";

const hpug = require('hpug');
const template = require('./index.pug');
let data = hpug.getData();
data.items = items.slice(0,8);
module.exports = template(data);