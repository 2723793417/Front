import React from 'react'
import Fantasye from './Fantasye/fantasye'
export default class Fantasy extends React.Component{

    getProductLost(){
        let dataList=[{
            img:"/Imgs/qh1.png",
            name:"指环王1魔戒再现",
            person:"伊利亚·伍德 / 西恩·奥斯汀",
            director:"彼得·杰克逊",
            Introduction:"比尔博•巴金斯是100多岁的哈比人，住在故乡夏尔，生性喜欢冒险，在年轻时的一次探险经历中，他从怪物咕噜手中得到了至尊魔戒，这枚戒指是黑暗魔君索伦打造的至尊魔戒，拥有奴役世界的邪恶力量，能够统领其他几枚力量之戒..."
        },{
            img:"/Imgs/qh2.png",
            name:"哈利·波特与魔法石",
            person:"丹尼尔·雷德克里夫 / 艾玛·沃森",
            director:"克里斯·哥伦布",
            Introduction:"哈利波特是一个孤儿，从小寄养在姨妈家，受尽欺凌。但就在哈利11岁生日的时候，他意外收到了霍格沃茨学院的入学通知书。哈利从该学院派来接他的巨人海格口中得知，这是一间魔法学院，并得知了自己的身世，原来哈利的父母都是伟大的魔法师... "
        },{
            img:"/Imgs/qh3.png",
            name:"霍比特人1：意外之旅",
            person:"伊恩·麦克莱恩 / 马丁·弗瑞曼",
            director:"彼得·杰克逊",
            Introduction:"中土最后一座矮人王国埃尔波尔，巍峨壮丽，庄严雄伟。老国王索尔积聚大量财富，却引来恶龙史茅革的觊觎和荼毒，最终导致这座城池陷落。许多年后，灰袍巫师甘道夫找到弗罗多的舅舅——霍比特人比尔博·巴金斯，邀请他加入由13名矮人组成的远征队伍。"
        },{
            img:"/Imgs/qh4.png",
            name:"加勒比海盗3",
            person:"约翰尼·德普 / 杰弗里·拉什 ",
            director:"戈尔·维宾斯基",
            Introduction:"被大章鱼吞下去的杰克船长进入了戴维·琼斯控制的“死界”——世界的尽头。为了拯救杰克，威尔·特纳、伊丽莎白和女巫等一行人也来到了“死界”。 "
        },{
            img:"/Imgs/qh5.png",
            name:"香水   ",
            person:"本·卫肖 / 艾伦·瑞克曼",
            director:"汤姆·提克威",
            Introduction:"十八世纪，让-马普蒂斯特•格雷诺耶出生在巴黎最肮脏、最恶臭不堪的地方——鱼市场上。格雷诺耶天生对气味有着惊人的天赋：无论恶臭还芳香，他都一一记住，并能轻易分辨各种气味"
        },{
            img:"/Imgs/qh6.png",
            name:"你眼中的世界 ",
            person:"迈克尔·斯塔尔·大卫 / 佐伊·卡赞 ",
            director:"布林·希尔",
            Introduction:"让人有些意外的欧美小清新爱情电影，影片讲述了两个美国大陆东西两端完全没有交集的陌生人之间的故事，两人不知为何被不可思议的力量联系在一起共享视觉听觉嗅觉等，当然最后相爱在一起了的爱情故事。"
        },]
        return dataList;
    }

    render(){
        let dataList = this.getProductLost();
        return(
            dataList.map((item,i)=>(
                <Fantasye product={item}></Fantasye>
            ))
        )
    }

}