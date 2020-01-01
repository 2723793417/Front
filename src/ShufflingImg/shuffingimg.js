import React from 'react'
import Type from '../Type/type';
import Play1 from './Play/play01';
import play2 from './Play02/play02';
import play3 from './Play 03/play03';
import {Link,Route} from 'react-router-dom';
import lol1 from '../ShufflingImg/img/lol.jpg';
import lol2 from './img/lol1.jpg';
import {Carousel,Icon,  } from 'antd'
var ShuffingImgCss =require('./shuffingimg.css')

export default class ShuffingImg extends React.Component{
    
            state = { dotPosition: 'top',};
            handlePositionChange = ({ target: { value: dotPosition } }) => this.setState({ dotPosition });
            
    render(){
        const { dotPosition } = this.state;
        return(
            <div className={ShuffingImgCss.out}>
              <div className={ShuffingImgCss.shuffling}>
                <Carousel autoplay className={ShuffingImgCss.shuffling}>
                    <div>
                        <Link to="/play03">
                            <h3> <img src="/Imgs/zy8.jpg" alt="小垃圾" width="1400px" height="600px" ></img></h3>
                        </Link>   
                        <Route path="/play03" component={play3}></Route>    
                    </div>
                    <div>
                        <h3><img src="/Imgs/zy7.jpg" alt="小垃圾" width="1400px" height="600px"></img></h3>
                    </div>
                    <div>
                        <h3><img src="/Imgs/zy1.jpg"  alt="小垃圾" width="1400px" height="600px"></img></h3>
                    </div>
                    <div>
                        <h3><img src="/Imgs/zy9.jpg"  alt="小垃圾" width="1400px" height="600px"></img></h3>
                    </div>
                </Carousel>
            </div>
            <div className={ShuffingImgCss.switch}>
               
            

                <div className={ShuffingImgCss.advertising}> {/**广告 */}
                    <span>黄金广告位招租</span>
                    <a href=" "><img src={lol1} alt="图没加载" width="500px" height="290px"></img></a>
                    <a href=" "><img src={lol2} alt="图没加载" width="500px" height="290px"></img></a>
                </div>
            </div>
           


            <div className={ShuffingImgCss.regionout}>

                <div className={ShuffingImgCss.tuijian}>
                    <span className={ShuffingImgCss.wntj}>为你推荐  </span>
                    {/* 左跳*/}
                    <span>1/2</span>
                    {/*右跳 */}
                    <Link  to="/type">
                        <div className={ShuffingImgCss.classification}>
                        更多分类
                        <Icon type="forward"  ></Icon>
                        </div> 
                        </Link>
                        <Route path="/type" Component={Type}></Route>
                </div>
                <div> 
                    <span className={ShuffingImgCss.re }>近期最热</span>      {/**两个小页面，，用轮播图或者路由加载 */}
                        
                <div>
                  
                    <Carousel dotPosition={dotPosition}  effect="fade">
                    <div>
                        <h3> 
                            <Link to="/play01">
                                <div className={ShuffingImgCss.done} >
                                    <img src="/Imgs/zy10.jpg" alt="小垃圾" width="600px" height="445px" className={ShuffingImgCss.imgs}></img>
                                    <p className={ShuffingImgCss.name}>片名遇见你之前</p>
                                    <p className={ShuffingImgCss.person}>主演：艾米莉亚·克拉克 / 山姆·克拉弗林 </p>
                                    <p className={ShuffingImgCss.director}>导演：西娅·夏罗克</p>
                                    <p className={ShuffingImgCss.Introduction}>电影简介：来自于小镇的年轻女孩小露应聘成为了一名看护，她所要照顾的对象，是一位名叫威尔的男子。</p>
                                </div>
                            </Link>
                            <Route path="/play01" component={Play1}> </Route>
                           <Link to="play02">
                            <div className={ShuffingImgCss.done}>
                                <img src="/Imgs/zy5.jpeg" alt="小垃圾" width="600px" height="445px" className={ShuffingImgCss.imgs}></img>
                                <p className={ShuffingImgCss.name}>片名小黄人</p>
                                <p className={ShuffingImgCss.person}>主演：史蒂夫·卡瑞尔 和一大堆小黄人</p>
                                <p className={ShuffingImgCss.director}>导演：皮埃尔·柯芬 / 克里斯·雷纳德</p>
                                <p className={ShuffingImgCss.Introduction}>电影简介：超级坏蛋格鲁、在听说埃及金字塔被盗的新闻后不满市面上新贼辈出，决定在纳法利欧博士、的帮助下建造火箭升空盗取月亮。在向坏蛋银行贷款的过程中，格鲁盗取的收缩射线枪被新贼维克托、抢走。</p>
                            </div>
                            </Link>
                            <Route path="/play02" component={play2}></Route>
                        </h3>
                    </div>
                    <div>
                        <h3>
                        <div className={ShuffingImgCss.done}>
                                <img src="/Imgs/zy4.jpg" alt="小垃圾" width="600px" height="445px" className={ShuffingImgCss.imgs}></img>
                                <p className={ShuffingImgCss.name}>片名变形金刚</p>
                                <p className={ShuffingImgCss.person}>主演：希亚·拉博夫 / 泰瑞斯·吉布森</p>
                                <p className={ShuffingImgCss.director}>导演：迈克尔·贝</p>
                                <p className={ShuffingImgCss.Introduction}>电影简介：霸天虎”的先遣部队旋风和毒蝎袭击了美军位于卡塔尔的军事基地，与此同时，路障帮助他的搭档迷乱潜入了美国总统的座机空中一号，通过电脑获悉，要想找到威震天就必须找到维特维奇家族的那副眼镜...</p>
                            </div>
                            <div className={ShuffingImgCss.done}>
                                <img src="/Imgs/zy6.jpeg" alt="小垃圾" width="600px" height="445px" className={ShuffingImgCss.imgs}></img>
                                <p className={ShuffingImgCss.name}>片名这个杀手不太冷</p>
                                <p className={ShuffingImgCss.person}>主演：让·雷诺 / 娜塔莉·波特曼  </p>
                                <p className={ShuffingImgCss.director}>导演： 吕克·贝松 </p>
                                <p className={ShuffingImgCss.Introduction}>电影简介：里昂是名孤独的职业杀手，受人雇佣。一天，邻居家小姑娘马蒂尔达敲开他的房门，要求在他那里暂避杀身之祸。原来邻居家的主人是警方缉毒组的眼线，只因贪污了一小包毒品而遭恶警杀害全家的惩罚。
</p>
                            </div>
                        </h3>
                    </div>
                   
                    </Carousel>
                </div>
                </div>
                        
                  

                
            </div>
            
            </div>

          
        
        )
    }
}

