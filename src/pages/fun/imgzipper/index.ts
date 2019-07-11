// import $ from 'jquery'
// declare function $(params:any):any;
declare function compressImg(uploadId:string,displayImgId:string,width:number,callback:Function):void;
const ID_DISPLAY_IMG = "display";
const ID_UPLOAD = "upload";
const ID_BTN = "do";
require("./exif");
require("./imgcompresion");
$("#" + ID_BTN).click(doClick);
function doClick(){
    compressImg(ID_UPLOAD,ID_DISPLAY_IMG,480,(src)=>{
        console.log(src);
    })
}