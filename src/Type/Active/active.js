import React from 'react'
import Activee from './ActiveE/activee'
export default class Active extends React.Component{

    getProductLost(){
        let dataList=[{
            img:"/Imgs/dz1.png",
            name:"头号玩家",
            person:"泰伊•谢里丹/奥利维亚•库克 ",
            director:"史蒂文•斯皮尔伯格",
            Introduction:"故事发生在2045年，虚拟现实技术已经渗透到了人类生活的每一个角落。詹姆斯哈利迪一手建造了名为“绿洲”的虚拟现实游戏世界，临终前，他宣布自己在游戏中设置了一个彩蛋，找到这枚彩蛋的人即可成为绿洲的继承人。"
        },{
            img:"/Imgs/dz2.png",
            name:"阿凡达 )",
            person:"萨姆•沃辛顿 / 佐伊•索尔达娜",
            director:"詹姆斯•卡梅隆",
            Introduction:"战斗中负伤而下身瘫痪的前海军战士杰克•萨利决定替死去的同胞哥哥来到潘多拉星操纵格蕾丝博士用人类基因与当地纳美部族基因结合创造出的 “阿凡达” 混血生物。"
        },{
            img:"/Imgs/dz3.png",
            name:"这个杀手不太冷",
            person:"让•雷诺 / 娜塔莉•波特曼 ",
            director:"吕克•贝松",
            Introduction:"里昂是名孤独的职业杀手，受人雇佣。一天，邻居家小姑娘马蒂尔达敲开他的房门，要求在他那里暂避杀身之祸。原来邻居家的主人是警方缉毒组的眼线，只因贪污了一小包毒品而遭恶警杀害全家的惩罚。"
        },{
            img:"/Imgs/dz4.png",
            name:"功夫 (2004)",
            person:"周星驰 / 元秋 / 元华 ",
            director:"周星驰",
            Introduction:"1940年代的上海，自小受尽欺辱的街头混混阿星了能出人头地，可谓窥见机会的缝隙就往里钻，今次他盯上行动日益猖獗的黑道势力“斧头帮”，想借之大名成就大业。"
        },{
            img:"/Imgs/dz5.png",
            name:"红海行动 ",
            person:"张译 / 黄景瑜 / 海清 ",
            director:"林超贤",
            Introduction:"中东国家伊维亚共和国发生政变，武装冲突不断升级。刚刚在索马里执行完解救人质任务的海军护卫舰临沂号，受命前往伊维亚执行撤侨任务。舰长高云派出杨锐率领的蛟龙突击队登陆战区，护送华侨安全撤离。"
        },{
            img:"/Imgs/dz6.png",
            name:"星际迷航",
            person:"克里斯•派恩 / 扎克瑞•昆图",
            director:"J•J•艾布拉姆斯",
            Introduction:"2230年出生于瓦肯星的男孩史波克，因为母亲阿曼达•格雷森是人类，经常遭到同僚的嘲笑和欺负。父亲萨瑞克是瓦肯星的一名外交官，史波克从小就不断地在严肃的瓦肯逻辑教育和他的人类情感之间挣扎。"
        } 
        ]
        return dataList;
    }

    render(){
        let dataList = this.getProductLost();
        return(

            dataList.map((item,i)=>(
                <Activee product={item}></Activee>
            ))
              
               
           
        )
    }

}