import React from 'react';
import {Route,Link,BrowserRouter,Redirect} from 'react-router-dom';
import baobei from './Imgs/baobei.png'


import Watched from './Watched/watched'
import Collection from './Collection/collection'
import Setup from './Setup/setup'

var PersonalCss = require('./personal.css')
export default class Personal extends React.Component{
    render(){
        return(
            <div>
               <div className={PersonalCss.out}>{/*top下方的整体div，包含两个，用户和最近观看的div*/}
                    <span className={PersonalCss.top}>个人中心</span>
                    <div className={PersonalCss.user}>{/*用户信息 */}
                        <div className={PersonalCss.img}>
                          {/**<Avatar size={100} icon="user"></Avatar>  */}
                          <img src={baobei} alt="baobei" width="100px" height="100px" border-radius="50px"></img>
                        </div>
                        <div classNam={PersonalCss.information}>
                            <span className={PersonalCss.wenzi}>用户名:小颜宝贝</span>
                            <span className={PersonalCss.wenzi}>账号:2095215781</span>
                        </div>
                    </div>

                    {/*选项卡*/}
                    <div className={PersonalCss.tab}> 
                        <BrowserRouter basename="personal">
                            <div className={PersonalCss.link}>
                                <Link to="/watched"><div className={PersonalCss.watched}>最近观看</div></Link>
                                <Link to="/collection"><div className={PersonalCss.watched}>收藏</div></Link>{/*与最近观看类似*/}
                             
                                <Link to="/setup"><div className={PersonalCss.watched}>设置</div></Link>{/**页面设置，下载设置，设置路径 */}
                            </div>

                            <div className={PersonalCss.luyou}>
                                <Redirect to="/watched"></Redirect>
                                <Route path="/watched" component={Watched}></Route>
                                <Route path="/collection" component={Collection}></Route>
                                <Route path="/setup" component={Setup}></Route>
                                
                            </div>

                        </BrowserRouter>
                    </div>

                        
                   </div> 
            </div>
        )
    }
}
