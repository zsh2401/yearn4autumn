import { getCraftResult, getItemById } from "./Data";
import Item from "./Item";
interface CraftView
{
    eleSelectedItem1Name:HTMLParagraphElement;
    eleSelectedItem1Img:HTMLImageElement;
    eleSelectedItem1Desc:HTMLParagraphElement;

    eleSelectedItem2Name:HTMLParagraphElement;
    eleSelectedItem2Img:HTMLImageElement;
    eleSelectedItem2Desc:HTMLParagraphElement;

    eleResultName:HTMLParagraphElement;
    eleResultImg:HTMLImageElement;
    eleResultDesc:HTMLParagraphElement;
}
class CraftGuide
{
    private leftId:number = 1;
    private rightId:number = 1;
    constructor(private view:CraftView)
    {
        this.update(this.leftId,this.rightId);
    }
    update(item1Id:number,item2Id:number)
    {
        console.log(item1Id + "-" + item2Id);
        this.leftId = item1Id;
        this.rightId = item2Id;
        this.updateCraftResultInfo(getCraftResult(item1Id,item2Id));
        this.updateItem1Info(item1Id);
        this.updateItem2Info(item2Id);
    }
    updateLeft(item1Id:number){
        this.update(item1Id,this.rightId);
    }
    updateRight(item2Id:number){
        this.update(this.leftId,item2Id);
    }
    private updateItem1Info(id:number){
        let item = getItemById(id);
        this.view.eleSelectedItem1Name.textContent = item.name;
        this.view.eleSelectedItem1Img.src = item.imgSrc;
        this.view.eleSelectedItem1Desc.textContent = item.description;
    }
    private updateItem2Info(id:number){
        let item = getItemById(id);
        this.view.eleSelectedItem2Name.textContent = item.name;
        this.view.eleSelectedItem2Img.src = item.imgSrc;
        this.view.eleSelectedItem2Desc.textContent = item.description;
    }
    private updateCraftResultInfo(item:Item){
        this.view.eleResultName.textContent = item.name;
        this.view.eleResultImg.src = item.imgSrc;
        this.view.eleResultDesc.textContent = item.description;
    }
}
let crafter = new CraftGuide({
    eleSelectedItem1Name: document.getElementById("selectedItem1Name") as HTMLParagraphElement,
    eleSelectedItem1Img:document.getElementById("selectedItem1Pic") as HTMLImageElement,
    eleSelectedItem1Desc:document.getElementById("selectedItem1Desc") as HTMLImageElement,

    eleSelectedItem2Name: document.getElementById("selectedItem2Name") as HTMLParagraphElement,
    eleSelectedItem2Img:document.getElementById("selectedItem2Pic") as HTMLImageElement,
    eleSelectedItem2Desc:document.getElementById("selectedItem2Desc") as HTMLImageElement,

    eleResultName: document.getElementById("resultName") as HTMLParagraphElement,
    eleResultDesc: document.getElementById("resultDesc") as HTMLParagraphElement,
    eleResultImg : document.getElementById("resultImg") as HTMLImageElement
});

function bindEvents(){
    let items1 = document.getElementsByClassName("crafting-item-1") as HTMLCollectionOf<HTMLDivElement>;
    let items2 = document.getElementsByClassName("crafting-item-2") as HTMLCollectionOf<HTMLDivElement>;
    for(let i=0;i<items1.length;i++){
        items1[i].addEventListener('click',item1Click,false);
    }
    for(let i=0;i<items1.length;i++){
        items2[i].addEventListener('click',item2Click,false);
    }
}
function item1Click(event:MouseEvent){
    let iid  = Number(this.getAttribute("iid"));
    crafter.updateLeft(iid);
}
function item2Click(event:MouseEvent){
    let iid  = Number(this.getAttribute("iid"));
    crafter.updateRight(iid);
}
bindEvents();
