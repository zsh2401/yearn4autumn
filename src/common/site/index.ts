require('./site.css');
require('./navbar.css');
require('../../assests/CNAME');
const brandImg = require('../../assests/brand.png');
const brandImgEle = document.getElementById("brandImg") as HTMLImageElement;
brandImgEle.src = brandImg;

