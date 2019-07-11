declare class Valine{
    constructor(data:any);
}
declare let AV;
import $ from 'jquery';
import { declareInterface } from 'babel-types';
const ID_VCOMMENT = "#vcomment";
const ATTR_PATH = "vpath";
const APP_KEY = "";
const APP_ID = "";
$(document).ready(()=>{
    let _path = $(ID_VCOMMENT).attr(ATTR_PATH);
    new Valine({
        // AV 对象来自上面引入av-min.js(老司机们不要开车➳♡゛扎心了老铁)
        av: AV, 
        el: ID_VCOMMENT,
        emoticon_url: 'https://cloud.panjunwen.com/alu',
        emoticon_list: ["狂汗.png","不说话.png","汗.png","坐等.png","献花.png","不高兴.png","中刀.png","害羞.png","皱眉.png","小眼睛.png","暗地观察.png"],
        app_id: APP_ID,
        app_key: APP_KEY,
        path:_path,
        placeholder: '和谐上网,爱慕秋'
    });
});
