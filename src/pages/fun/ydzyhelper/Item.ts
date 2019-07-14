export default class Item
{
    imgSrc:string;
    constructor(public id:number,public name:string,
        public description:string=null)
    {
        try{
            this.imgSrc = require("./imgs/" + this.id + ".png");
        }catch{}
    }
}