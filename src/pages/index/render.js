const layoutRender = require('../../../common/layout/render');
const info =require('../../../info');
const title = '美图T8_双像素黑科技_美图拍照手机_美图官网';
const keyword = '美图T8,美图T8手机,美图T8拍照手机,1200万双像素智能手机,美图拍照手机,双像素黑科技,美颜手机,美颜视频手机,4G全网通,美图秀秀手机,美图手机,美图官网';
const description = '全新美图手机美图T8，前置1200万双像素摄像头，夜间自拍更高清。美图T8为夜而生。.......';

// 菜单配置
const contentHTML = layoutRender.renderFile(__dirname + "\\content.ejs");
console.log("wtf");
module.exports = layoutRender.render({title, keyword, description, contentHTML});