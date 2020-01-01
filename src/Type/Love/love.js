import React from 'react'
import Lovee from './Lovee/lovee'


export default class Love extends React.Component{

    constructor(props){
        super(props);
        this.state = {username:'',lastGistUrl:''};
    }









    getProductLost(){
        let dataList=[{
            img:"/Imgs/aq1.png",
            name:"美丽人生",
            person:"罗伯托•贝尼尼",
            director:"罗伯托•贝尼尼",
            Introduction:"犹太青年圭多邂逅美丽的女教师多拉，他彬彬有礼的向多拉鞠躬：“早安！公主！”。历经诸多令人啼笑皆非的周折后，天遂人愿，两人幸福美满的生活在一起。"
        },{
            img:"/Imgs/aq2.png",
            name:"阿甘正传 ",
            person:"克汤姆•汉克斯/罗宾•怀特",
            director:"罗伯特•泽米吉斯",
            Introduction:"阿甘于二战结束后不久出生在美国南方阿拉巴马州一个闭塞的小镇，他先天弱智，智商只有75，然而他的妈妈是一个性格坚强的女性，她常常鼓励阿甘“傻人有傻福”，要他自强不息"
        },{
            img:"/Imgs/aq3.png",
            name:"泰坦尼克号 ",
            person:"莱昂纳多•迪卡普里奥",
            director:"詹姆斯•卡梅隆",
            Introduction:"1912年4月14日，星期天晚上，一个风平浪静的夜晚。泰坦尼克号撞上了冰山，“永不沉没的”泰坦尼克号面临沉船的命运，罗丝和杰克刚萌芽的爱情也将经历生死的考验。"
        },{
            img:"/Imgs/aq4.png",
            name:"怦然心动 ",
            person:"玛德琳•卡罗尔/卡兰•麦克奥利菲",
            director:"罗伯•莱纳",
            Introduction:"布莱斯全家搬到小镇，邻家女孩朱丽（玛德琳•卡罗尔 Madeline Carroll 饰）前来帮忙。她对他一见钟情，心愿是获得他的吻。两人是同班同学，她一直想方设法接近他，但是他避之不及。她喜欢爬在高高的梧桐树上看风景。"
        },{
            img:"/Imgs/aq5.png",
            name:"侧耳倾听 ",
            person:"本名阳子 / 小林桂树 ",
            director:"近藤喜文",
            Introduction:"正在读初三的月岛滴滴是一个喜欢看书的女孩，她每次都能在借书卡上看到一个叫天泽圣司名字，因此她对这个人充满了好奇。"
        },{
            img:"/Imgs/aq6.png",
            name:"剪刀手爱德华 ",
            person:"约翰尼•德普 / 薇诺娜•瑞德 ",
            director:"蒂姆•波顿",
            Introduction:"爱德华是一个机器人，他拥有人的心智，却有一双剪刀手，孤独地生活在古堡里，闯入古堡的化妆品推销员佩格把他带回家，让他走进了人类的世界。单纯的爱德华爱上了佩格的女儿金，金也慢慢的被爱德华的善良所吸引"
        }]
        return dataList;
    }

    render(){
        let dataList = this.getProductLost();
        return(
            dataList.map((item,i)=>(
                <Lovee product={item}></Lovee>
            ))
        )
    }

}