import React from 'react'
import Sciencee from './Sciencee/sciencee'
export default class Science extends React.Component{

    getProductLost(){
        let dataList=[{
            img:"/Imgs/kh1.png",
            name:"盗梦空间  ",
            person:"莱昂纳多•迪卡普里奥 ",
            director:"克里斯托弗•诺兰",
            Introduction:"道姆•柯布与同事阿瑟和纳什在一次针对日本能源大亨齐藤的盗梦行动中失败，反被齐藤利用。齐藤威逼利诱因遭通缉而流亡海外的柯布帮他拆分他竞争对手的公司"
        },{
            img:"/Imgs/kh2.png",
            name:"星际穿越  ",
            person:"马修•麦康纳 / 安妮•海瑟薇  ",
            director:"克里斯托弗•诺兰",
            Introduction:"近未来的地球黄沙遍野，小麦、秋葵等基础农作物相继因枯萎病灭绝，人类不再像从前那样仰望星空，放纵想象力和灵感的迸发，而是每日在沙尘暴的肆虐下倒数着所剩不多的光景。"
        },{
            img:"/Imgs/kh3.png",
            name:"V字仇杀队  ",
            person:"娜塔莉•波特曼 / 雨果•维文  ",
            director:"詹姆斯•麦克特格",
            Introduction:"未来的英国社会处于极权统治的高压下，不能容许同性恋者、异教徒等社会角色的存在，人民在黑暗政权下苟延残喘。"
        },{
            img:"/Imgs/kh4.png",
            name:"复仇者联盟4 ",
            person:"小罗伯特·唐尼 / 克里斯·埃文斯 ",
            director:"安东尼•罗素 / 乔•罗素",
            Introduction:"一声响指，宇宙间半数生命灰飞烟灭。几近绝望的复仇者们在惊奇队长的帮助下找到灭霸归隐之处，却得知六颗无限宝石均被销毁，希望彻底破灭。如是过了五年，迷失在量子领域的蚁人意外回到现实世界，他的出现为幸存的复仇者们点燃了希望。"
        },{
            img:"/Imgs/kh5.png",
            name:"源代码 ",
            person:"杰克•吉伦哈尔 / 维拉•法米加  ",
            director:"邓肯•琼斯",
            Introduction:"在阿富汗执行任务的美国空军飞行员科特史蒂文斯上尉突然惊醒，发现自己在一辆高速行驶的列车上，而他的身边坐着一个素不相识的女子克里斯蒂安正在与自己讲话。"
        },{
            img:"/Imgs/kh6.png",
            name:"第九区  ",
            person:"沙尔托•科普雷 / 詹森•库伯 ",
            director:"尼尔•布洛姆坎普",
            Introduction:"1990年，一艘巨大的飞船出现在地球上空，人们惶恐不安，却又分外好奇。经过一段时间紧张的等待，外星飞船始终没有动静。人类终于小心翼翼靠近它，强行走进舱内，结果发现了不计其数的外星人。"
        }]
        return dataList;
    }

    render(){
        let dataList = this.getProductLost();
        return(
            dataList.map((item,i)=>(
                <Sciencee product={item}></Sciencee>
            ))
        )
    }

}