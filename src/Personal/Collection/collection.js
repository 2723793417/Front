import React from 'react'
import one from '../Imgs/timg.jpg'
var CollectionCss = require('./collection.css')
export default class Collection extends React.Component{
    render(){

        return(
            <div className={CollectionCss.lookout}>{/*收藏 */}
            <div className={CollectionCss.looktop}>
                <div className={CollectionCss.close}>我的收藏</div>
            </div>
        
                    {/*四个div */}
            <div>
                <div className={CollectionCss.movie}> 
                    <img src={one} width="300px" height="360px" alt="图片未加载"className={CollectionCss.imgs}></img>
                    <p className={CollectionCss.name}>片名:三傻大闹宝莱坞</p>
                    <p className={CollectionCss.person}>主演：阿米尔·汗 / 卡琳娜·卡普尔</p>
                    <p className={CollectionCss.director}>导演：拉吉库马尔·希拉尼</p>
                    <p className={CollectionCss.Introduction}>电影简介：在以严格著称的学院里，兰乔是个非常与众不同的学生，他不死记硬背，甚至还公然顶撞校长“病毒”，质疑他的教学方法。</p>
                </div>
                <div className={CollectionCss.movie}> 
                    <img src={one} width="300px" height="360px" alt="图片未加载"className={CollectionCss.imgs}></img>
                    <p className={CollectionCss.name}>片名:三傻大闹宝莱坞</p>
                    <p className={CollectionCss.person}>主演：阿米尔·汗 / 卡琳娜·卡普尔</p>
                    <p className={CollectionCss.director}>导演：拉吉库马尔·希拉尼</p>
                    <p className={CollectionCss.Introduction}>电影简介：在以严格著称的学院里，兰乔是个非常与众不同的学生，他不死记硬背，甚至还公然顶撞校长“病毒”，质疑他的教学方法。</p>
                </div>
                <div className={CollectionCss.movie}> 
                    <img src={one} width="300px" height="360px" alt="图片未加载"className={CollectionCss.imgs}></img>
                    <p className={CollectionCss.name}>片名:三傻大闹宝莱坞</p>
                    <p className={CollectionCss.person}>主演：阿米尔·汗 / 卡琳娜·卡普尔</p>
                    <p className={CollectionCss.director}>导演：拉吉库马尔·希拉尼</p>
                    <p className={CollectionCss.Introduction}>电影简介：在以严格著称的学院里，兰乔是个非常与众不同的学生，他不死记硬背，甚至还公然顶撞校长“病毒”，质疑他的教学方法。</p>
                </div>
                <div className={CollectionCss.movie}> 
                    <img src={one} width="300px" height="360px" alt="图片未加载"className={CollectionCss.imgs}></img>
                    <p className={CollectionCss.name}>片名:三傻大闹宝莱坞</p>
                    <p className={CollectionCss.person}>主演：阿米尔·汗 / 卡琳娜·卡普尔</p>
                    <p className={CollectionCss.director}>导演：拉吉库马尔·希拉尼</p>
                    <p className={CollectionCss.Introduction}>电影简介：在以严格著称的学院里，兰乔是个非常与众不同的学生，他不死记硬背，甚至还公然顶撞校长“病毒”，质疑他的教学方法。</p>
                </div>
                <div className={CollectionCss.movie}> 
                    <img src={one} width="300px" height="360px" alt="图片未加载"className={CollectionCss.imgs}></img>
                    <p className={CollectionCss.name}>片名:三傻大闹宝莱坞</p>
                    <p className={CollectionCss.person}>主演：阿米尔·汗 / 卡琳娜·卡普尔</p>
                    <p className={CollectionCss.director}>导演：拉吉库马尔·希拉尼</p>
                    <p className={CollectionCss.Introduction}>电影简介：在以严格著称的学院里，兰乔是个非常与众不同的学生，他不死记硬背，甚至还公然顶撞校长“病毒”，质疑他的教学方法。</p>
                </div>
                <div className={CollectionCss.movie}> 
                    <img src={one} width="300px" height="360px" alt="图片未加载"className={CollectionCss.imgs}></img>
                    <p className={CollectionCss.name}>片名:三傻大闹宝莱坞</p>
                    <p className={CollectionCss.person}>主演：阿米尔·汗 / 卡琳娜·卡普尔</p>
                    <p className={CollectionCss.director}>导演：拉吉库马尔·希拉尼</p>
                    <p className={CollectionCss.Introduction}>电影简介：在以严格著称的学院里，兰乔是个非常与众不同的学生，他不死记硬背，甚至还公然顶撞校长“病毒”，质疑他的教学方法。</p>
                </div>
                
            </div>
         
        </div>
        )
    }
}