import './site.css';
import './navbar.css';
import '../../assests/CNAME';
const brandImg = require('../../assests/brand.png');
const brandImgEle = document.getElementById("brandImg") as HTMLImageElement;
brandImgEle.src = brandImg;