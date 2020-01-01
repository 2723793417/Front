import React from 'react'
import Documentarye from './Documentarye/documentarye'
export default class Documentary extends React.Component{

    getProductLost(){
        let dataList=[{
            img:"/Imgs/xj1.png",
            name:"三傻大闹宝莱坞 ",
            person:"阿米尔·汗 / 卡琳娜·卡普尔  ",
            director:"拉吉库马尔·希拉尼",
            Introduction:"在以严格著称的学院里，兰乔是个非常与众不同的学生，他不死记硬背，甚至还公然顶撞校长“病毒”，质疑他的教学方法。"
        },{
            img:"/Imgs/xj2.png",
            name:"触不可及",
            person:"弗朗索瓦·克鲁塞 / 奥玛·希  ",
            director:"奥利维埃·纳卡什 ",
            Introduction:"因为一次跳伞事故，白人富翁菲利普Philippe瘫痪在床，欲招聘一名全职陪护。由于薪酬高，应聘者云集，个个舌灿莲花，却无法打动他的心。"
        },{
            img:"/Imgs/xj3.png",
            name:"西力传 ",
            person:"伍迪·艾伦 / 米亚·法罗 ",
            director:"伍迪·艾伦",
            Introduction:"故事发生在三十年代的美国，随着经济和文化的蓬勃发展，一个名叫西力的男人横空出现在了人们的面前。这个神奇的犹太人被发现混迹于各种各样相去甚远的交际圈里，不同阶级的，甚至是不同种族的，而每当他进入了一个新的环境中... "
        },{
            img:"/Imgs/xj4.png",
            name:"绿皮书 ",
            person:"维果·莫腾森 / 马赫沙拉·阿里 ",
            director:"彼得·法雷里",
            Introduction:"托尼是一个吊儿郎当游手好闲的混混，在一家夜总会做侍者。这间夜总会因故要停业几个月，可托尼所要支付的房租和生活费不会因此取消，所以他的当务之急是去寻找另一份工作来填补这几个月的空缺。在这个节骨眼上，一位名叫唐雪莉的黑人钢琴家提出雇佣托尼。"
        },{
            img:"/Imgs/xj5.png",
            name:"小鬼当家 ",
            person:"麦考利·卡尔金 / 乔·佩西 ",
            director:"克里斯·哥伦布",
            Introduction:"：一年一度的圣诞节又到了。全家忙着外出欢度圣诞假期，不料忙中出错，将家里最小的成员——8岁的凯文留在了家里。爸爸妈妈急坏了，可此时他们已经身在外地，一时亦无可奈何。倒是凯文乐坏了，难得一个人在家，凯文将家里布置成了“游乐场”。 "
        },{
            img:"/Imgs/xj6.png",
            name:"西虹市首富",
            person:"沈腾/宋芸桦/张一鸣  ",
            director:"闫非 / 彭大魔",
            Introduction:"西虹市丙级球队大翔队的守门员王多鱼因比赛失利被教练开除，一筹莫展之际王多鱼突然收到神秘人士金老板的邀请，被告知自己竟然是保险大亨王老太爷的唯一继承人，遗产高达百亿！但是王老太爷给出了一个非常奇葩的条件，那就是要求王多鱼在一个月内花光十亿..."
        },]
        return dataList;
    }

    render(){
        let dataList = this.getProductLost();
        return(
            dataList.map((item,i)=>(
                <Documentarye product={item}></Documentarye>
            ))
        )
    }

}