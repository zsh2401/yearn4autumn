const fs = require('fs');
const path = require('path');
const site = require('../data/site.json');
function getData()
{
    let result:any = {};
    result.site = site;
    return result;
}
module.exports = {
    getData:getData
}