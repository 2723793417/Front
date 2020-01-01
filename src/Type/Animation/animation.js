import React from 'react'
import Animatione from './Animatione/animatione'
export default class Animation extends React.Component{

    getProductLost(){
        let dataList=[{
            img:"/Imgs/dh1.png",
            name:"大雄的怀念奶奶",
            person:"大山信代 / 小原乃梨子",
            director:"渡边步",
            Introduction:"《大雄的怀念奶奶》（おばあちゃんの思い出），是一部哆啦A梦电影作品系列的附篇作品之一，首映于2000年3月11日，是哆啦A梦短篇电影系列第三部，改编自1979年哆啦A梦电视动画《老祖母的愉快回忆》和1986年的哆啦A梦系列电视动画《我爱奶奶》..."
        },{
            img:"/Imgs/dh2.png",
            name:"千与千寻 ",
            person:"柊瑠美 / 入野自由 ",
            director:"宫崎骏",
            Introduction:"千寻和爸爸妈妈一同驱车前往新家，在郊外的小路上不慎进入了神秘的隧道——他们去到了另外一个诡异世界—一个中世纪的小镇。远处飘来食物的香味，爸爸妈妈大快朵颐，孰料之后变成了猪！这时小镇上渐渐来了许多样子古怪、半透明的人。 "
        },{
            img:"/Imgs/dh3.png",
            name:"龙猫",
            person:"日高法子 / 坂本千夏 ",
            director:"宫崎骏",
            Introduction:"小月的母亲生病住院了，父亲带着她与四岁的妹妹小梅到乡间的居住。她们对那里的环境都感到十分新奇，也发现了很多有趣的事情。她们遇到了很多小精灵，她们来到属于她们的环境中，看到了她们世界中很多的奇怪事物，更与一只大大胖胖的龙猫成为了朋友。"
        },{
            img:"/Imgs/dh4.png",
            name:"天空之城",
            person:"田中真弓 / 横泽启子  ",
            director:"宫崎骏",
            Introduction:"古老帝国拉比达是一座漂浮在空中的巨大的机器岛，传说那里已经无人居住，蕴藏着巨大的财富。因此，无论军方还是海盗，都在找寻着这座传说中的飞行岛。 "
        },{
            img:"/Imgs/dh5.png",
            name:"幽灵公主",
            person:"松田洋治 / 石田百合子",
            director:"宫崎骏",
            Introduction:"为了拯救危难中的村民，阿斯达卡的右手中了凶煞神的诅咒。他卡只好离开亲人往西方流浪以寻找解除诅咒的方法。旅途中他遇到了由幻姬大人带领的穷苦村民在麒麟兽的森林里开采铁矿，提炼矿石。 "
        },{
            img:"/Imgs/dh6.png",
            name:"神偷奶爸 ",
            person:"史蒂夫·卡瑞尔 / 杰森·席格尔  ",
            director:"皮埃尔·柯芬 / 克里斯·雷纳德",
            Introduction:"超级坏蛋格鲁在听说埃及金字塔被盗的新闻后不满市面上新贼辈出，决定在纳法利欧博士的帮助下建造火箭升空盗取月亮。在向坏蛋银行贷款的过程中，格鲁盗取的收缩射线枪被新贼维克托抢走。"
        },]
        return dataList;
    }

    render(){
        let dataList = this.getProductLost();
        return(
            dataList.map((item,i)=>(
                <Animatione product={item}></Animatione>
            ))
        )
    }

}