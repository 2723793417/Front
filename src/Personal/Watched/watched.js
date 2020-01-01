import React from 'react'
import one from '../Imgs/baobei.png'

var WatchedCss =require('./watched.css')
export default class Watched extends React.Component{
    render(){

        return(
            
                <div className={WatchedCss.lookout}>{/*最近观看 */}
                    <div className={WatchedCss.looktop}>
                        <div className={WatchedCss.close}>最近观看</div>
                    </div>
                
                            {/*四个div */}
                    <div>
                        <div className={WatchedCss.movie}> 
                            <img src={one} width="300px" height="360px" alt="图片未加载"className={WatchedCss.imgs}></img>
                            <p className={WatchedCss.name}>片名:三傻大闹宝莱坞</p>
                            <p className={WatchedCss.person}>主演：阿米尔·汗 / 卡琳娜·卡普尔</p>
                            <p className={WatchedCss.director}>导演：拉吉库马尔·希拉尼</p>
                            <p className={WatchedCss.Introduction}>电影简介：在以严格著称的学院里，兰乔是个非常与众不同的学生，他不死记硬背，甚至还公然顶撞校长“病毒”，质疑他的教学方法。</p>
                        </div>
                        <div className={WatchedCss.movie}> 
                            <img src={one} width="300px" height="360px" alt="图片未加载"className={WatchedCss.imgs}></img>
                            <p className={WatchedCss.name}>片名:三傻大闹宝莱坞</p>
                            <p className={WatchedCss.person}>主演：阿米尔·汗 / 卡琳娜·卡普尔</p>
                            <p className={WatchedCss.director}>导演：拉吉库马尔·希拉尼</p>
                            <p className={WatchedCss.Introduction}>电影简介：在以严格著称的学院里，兰乔是个非常与众不同的学生，他不死记硬背，甚至还公然顶撞校长“病毒”，质疑他的教学方法。</p>
                        </div>
                        <div className={WatchedCss.movie}> 
                            <img src={one} width="300px" height="360px" alt="图片未加载"className={WatchedCss.imgs}></img>
                            <p className={WatchedCss.name}>片名:三傻大闹宝莱坞</p>
                            <p className={WatchedCss.person}>主演：阿米尔·汗 / 卡琳娜·卡普尔</p>
                            <p className={WatchedCss.director}>导演：拉吉库马尔·希拉尼</p>
                            <p className={WatchedCss.Introduction}>电影简介：在以严格著称的学院里，兰乔是个非常与众不同的学生，他不死记硬背，甚至还公然顶撞校长“病毒”，质疑他的教学方法。</p>
                        </div>
                        <div className={WatchedCss.movie}> 
                            <img src={one} width="300px" height="360px" alt="图片未加载"className={WatchedCss.imgs}></img>
                            <p className={WatchedCss.name}>片名:三傻大闹宝莱坞</p>
                            <p className={WatchedCss.person}>主演：阿米尔·汗 / 卡琳娜·卡普尔</p>
                            <p className={WatchedCss.director}>导演：拉吉库马尔·希拉尼</p>
                            <p className={WatchedCss.Introduction}>电影简介：在以严格著称的学院里，兰乔是个非常与众不同的学生，他不死记硬背，甚至还公然顶撞校长“病毒”，质疑他的教学方法。</p>
                        </div>
                        <div className={WatchedCss.movie}> 
                            <img src={one} width="300px" height="360px" alt="图片未加载"className={WatchedCss.imgs}></img>
                            <p className={WatchedCss.name}>片名:三傻大闹宝莱坞</p>
                            <p className={WatchedCss.person}>主演：阿米尔·汗 / 卡琳娜·卡普尔</p>
                            <p className={WatchedCss.director}>导演：拉吉库马尔·希拉尼</p>
                            <p className={WatchedCss.Introduction}>电影简介：在以严格著称的学院里，兰乔是个非常与众不同的学生，他不死记硬背，甚至还公然顶撞校长“病毒”，质疑他的教学方法。</p>
                        </div>
                        <div className={WatchedCss.movie}> 
                            <img src={one} width="300px" height="360px" alt="图片未加载"className={WatchedCss.imgs}></img>
                            <p className={WatchedCss.name}>片名:三傻大闹宝莱坞</p>
                            <p className={WatchedCss.person}>主演：阿米尔·汗 / 卡琳娜·卡普尔</p>
                            <p className={WatchedCss.director}>导演：拉吉库马尔·希拉尼</p>
                            <p className={WatchedCss.Introduction}>电影简介：在以严格著称的学院里，兰乔是个非常与众不同的学生，他不死记硬背，甚至还公然顶撞校长“病毒”，质疑他的教学方法。</p>
                        </div>
                    </div>
                 
                </div>
               

        )
    }
}