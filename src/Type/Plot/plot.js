import React from 'react'
import Plote from './Plote/plote'
export default class Plot extends React.Component{

    getProductLost(){
        let dataList=[{
            img:"/Imgs/jq1.png",
            name:" 肖申克的救赎  ",
            person:" 蒂姆·罗宾斯 / 摩根·弗里曼",
            director:" 弗兰克·德拉邦特",
            Introduction:" 20世纪40年代末，小有成就的青年银行家安迪因涉嫌杀害妻子及她的情人而锒铛入狱。在这座名为肖申克的监狱内，希望似乎虚无缥缈，终身监禁的惩罚无疑注定了安迪接下来灰暗绝望的人生。未过多久..."
        },{
            img:"/Imgs/jq2.png",
            name:" 海上钢琴师",
            person:" 蒂姆·罗斯 / 普路特·泰勒·文斯",
            director:"朱塞佩·托纳多雷 ",
            Introduction:"1900年，Virginian号豪华邮轮上，一个孤儿被遗弃在头等舱，由船上的水手抚养长大，取名1900。1900慢慢长大，显示出了无师自通的非凡钢琴天赋，在船上的乐队表演钢琴，每个听过他演奏的人，都被深深打动... "
        },{
            img:"/Imgs/jq3.png",
            name:"摔跤吧！爸爸 ",
            person:"  阿米尔·汗 / 法缇玛·萨那·纱卡",
            director:"涅提·蒂瓦里 ",
            Introduction:" 马哈维亚曾经是一名前途无量的摔跤运动员，在放弃了职业生涯后，他最大的遗憾就是没有能够替国家赢得金牌。马哈维亚将这份希望寄托在了尚未出生的儿子身上，哪知道妻子接连给他生了两个女儿，取名吉塔和巴比塔。"
        },{
            img:"/Imgs/jq4.png",
            name:" 当幸福来敲门",
            person:"威尔·史密斯 / 贾登·史密斯 ",
            director:"加布里埃莱·穆奇诺 ",
            Introduction:" 克里斯•加纳用尽全部积蓄买下了高科技治疗仪，到处向医院推销，可是价格高昂，接受的人不多。就算他多努力都无法提供一个良好的生活环境给妻儿，妻子最终选择离开家。从此他带着儿子克里斯托夫相依为命..."
        },{
            img:"/Imgs/jq5.png",
            name:"我不是药神 (2018) ",
            person:" 徐峥 / 王传君 / 周一围 ",
            director:"  文牧野",
            Introduction:" 普通中年男子程勇经营着一家保健品店，失意又失婚。不速之客吕受益的到来，让他开辟了一条去印度买药做“代购”的新事业，虽然困难重重，但他在这条“买药之路”上发现了商机，一发不可收拾地做起了治疗慢粒白血病的印度仿制药独家代理商。"
        },{
            img:"/Imgs/jq6.png",
            name:" 少年派的奇幻漂流 ",
            person:" 苏拉·沙玛 / 伊尔凡·可汗 ",
            director:" 李安",
            Introduction:" 故事开始于蒙特娄，也结束于蒙特娄。一名在找寻灵感的作家无意间得知派·帕帖尔的传奇故事。派的父亲开了一家动物园。因这样特殊的生活环境，少年派对信仰与人的本性自有一套看法。"
        },]
        return dataList;
    }

    render(){
        let dataList = this.getProductLost();
        return(
            dataList.map((item,i)=>(
                <Plote product={item}></Plote>
            ))
        )
    }

}