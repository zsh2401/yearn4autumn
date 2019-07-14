import Item from "./Item";

export const itemsCraftData:number[][] = [
    [9,10,11,12,13,14,15,16],
    [-1,17,18,19,20,21,22,23],
    [-1,-1,24,25,26,27,28,29],
    [-1,-1,-1,30,31,32,33,34],
    [-1,-1,-1,-1,35,36,37,38],
    [-1,-1,-1,-1,-1,39,40,41],
    [-1,-1,-1,-1,-1,-1,42,43],
    [-1,-1,-1,-1,-1,-1,-1,44]
]
class CraftTable{
    constructor(
    public readonly item1:number,
    public readonly item2:number){}
}
export function getItemById(id:number):Item{
    return items[--id];
}
export function getCraftTableById(id:number):CraftTable{
    for(let x = 1;x<=8;x++){
        for(let y = 1;x<=8;y++){
            if(itemsCraftData[x][y] == id)
                return new CraftTable(x,y);
        }
    }
    return new CraftTable(1,1);
}
export function getCraftResult(item1:number,item2:number):Item{
    let result = itemsCraftData[--item1][--item2];
    if(result==-1){
        result = itemsCraftData[item2][item1];
    }
    return items[--result];
}
export const items:Item[] = 
[
    new Item(1,"暴风大剑"),
    new Item(2,"反曲之弓"),
    new Item(3,"无用大棒"),
    new Item(4,"眼泪"),
    new Item(5,"大腰带"),
    new Item(6,"锁子甲"),
    new Item(7,"负极斗篷"),
    new Item(8,"金铲铲"),
    new Item(9,"无尽之刃"),
    new Item(10,"鸡儿刀"),
    new Item(11,"海克斯科技枪"),
    new Item(12,"青龙偃月刀"),
    new Item(13,"红色的奇怪装备"),
    new Item(14,"复活甲"),
    new Item(15,"饮血剑"),
    new Item(16,"幽梦之灵"),
    new Item(17,"疾射火炮"),
    new Item(18,"鬼索的狂暴之刃"),
    new Item(19,"电刀"),
    new Item(20,"巨型九头蛇"),
    new Item(21,"幻影之舞"),
    new Item(22,"绿色的奇怪刀"),
    new Item(23,"破败王者之刃"),
    new Item(24,"灭世者的死亡之帽"),
    new Item(25,"卢登的回声"),
    new Item(26,"特雷默的宝典"),
    new Item(27,"钢铁烈阳之匣"),
    new Item(28,"UFO刀"),
    new Item(29,"大棒+铲铲"),
    new Item(30,"大天使之杖"),
    new Item(31,"救赎"),
    new Item(32,"冰心"),
    new Item(33,"紫色刀"),
    new Item(34,"女神之泪+铲铲"),
    new Item(35,"狂徒铠甲"),
    new Item(36,"红BUFF"),
    new Item(37,"灵风"),
    new Item(38,"冰霜之锤"),
    new Item(39,"荆棘之甲"),
    new Item(40,"黄色的奇怪刀"),
    new Item(41,"骑士之誓"),
    new Item(42,"终极魔抗"),
    new Item(43,"卢安娜的飓风"),
    new Item(44,"自然之力"),
];