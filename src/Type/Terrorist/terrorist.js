import React from 'react'
import Terroriste from './Terroriste/terroriste'
export default class Terrorist extends React.Component{

    getProductLost(){
        let dataList=[{
            img:"/Imgs/js1.png",
            name:"电锯惊魂  ",
            person:"雷•沃纳尔 / 加利•艾尔维斯  ",
            director:"温子仁",
            Introduction:"一觉醒来的亚当发现自己被困在一个废弃的厕所里。他的对面是同样命运的劳伦斯——他们被人用铁链绑住了腿，并吃惊发现二人中间横亘着一个恐怖的死人。死人鲜血淋漓，左手拿录放机右手拿枪。"
        },{
            img:"/Imgs/js2.png",
            name:"罗斯玛丽的婴儿  ",
            person:"米亚•法罗 / 约翰•卡萨维蒂  ",
            director:"罗曼•波兰斯基",
            Introduction:"凯有着一个外表单薄脆弱的妻子罗斯玛丽，自从他们搬到新公寓后，凯就和邻居一对老夫妇相谈甚欢。而罗斯玛丽却并不特别喜欢这对邻居，令她感到不适的，还有接下来的一连串怪事。"
        },{
            img:"/Imgs/js3.png",
            name:"招魂  ",
            person:"维拉•法米加 / 帕特里克•威尔森  ",
            director:"温子仁",
            Introduction:"20世纪七十年代，罗杰与卡罗琳两夫妇带着他们五个可爱美丽的女儿，搬到了位于罗德岛哈瑞斯维尔的一幢旧宅居住。房屋虽然古旧沧桑，历史悠久，但是却让佩隆一家体会到回归田园的快乐与喜悦。"
        },{
            img:"/Imgs/js4.png",
            name:"呪怨  ",
            person:"柳忧怜 / 栗山千明 / 三轮瞳  ",
            director:"清水崇",
            Introduction:"名叫佐伯俊雄的男孩多日未曾上课，他的级任教师小林俊介按照地址登门拜访，发现家里乱七八糟，臭气熏天，而独自在家的俊雄则浑身是伤，精神恍惚。俊雄的父母行踪不明，他的妈妈伽椰子是小林大学时代的同学.."
        },{
            img:"/Imgs/js5.png",
            name:"死寂 ",
            person:"唐尼•沃尔伯格 / 安贝•瓦莱塔  ",
            director:"温子仁",
            Introduction:"童谣本应该充满欢声笑语，但世界上偏偏有这么一些童谣，让人听了毛骨悚然。小镇拉文斯•法尔就流传着这样一个恐怖的童谣：小心来自玛丽•肖的凝视；她没有孩子，只有玩偶；如果你看到她，不要尖叫.."
        },{
            img:"/Imgs/js6.png",
            name:"极度空间  ",
            person:"罗迪•派彭 / 凯斯•大卫 ",
            director:"约翰•卡朋特",
            Introduction:"在未来的某个年代，人们的思维已经被政府机构控制，政府机构通过电视信号传输一种催眠电波控制人们的行动。但是一些不甘心被强权统治的人们研究出一种眼镜，戴上这种眼镜，电视节目里道貌岸然的官员就会现出骷髅般的原形……"
        }]
        return dataList;
    }

    render(){
        let dataList = this.getProductLost();
        return(
            dataList.map((item,i)=>(
                <Terroriste product={item}></Terroriste>
            ))
        )
    }

}