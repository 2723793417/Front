import React from 'react'
import imgone from '../Top/img/dog1.png'
import {Link,Route} from 'react-router-dom'
import Login1Page from '../Login1/login1'
import {Input,Button,Avatar} from 'antd'
import ShuffingImg from '../ShufflingImg/shuffingimg'
import Personal from '../Personal/personal'
import Register from '../Register/register'
var TopCss =require('./top.css')
var Search =Input;
export default class Top extends React.Component{

    render(){
        return(

          <div>

                        <div className={TopCss.top}>
                       
                            <Link to="/shuffingimg">
                                <div className={TopCss.img}>
                                    <img src={imgone} alt="图片未加载" width="100px" height="100px" className={TopCss.gou}></img>
                                    <div className={TopCss.biaoti}>狗头视频</div>
                                </div>
                            </Link>
                    
                            <Search placeholder="输入片名" onSearch={value => console.log(value)} enterButton className={TopCss.sousuo} /> <Button shape="circle" icon="search" />
                                {/*<input  placeholder="输入片名" className={TopCss.sousuo} ></input>*/}

                            

                            <Link to="/login1page" className={TopCss.login} >登录</Link>  |
                            
                            <Link to="register">注册</Link>

                            <Link to="/personal">
                                <div className={TopCss.yonghu}>
                                <Avatar size={100} icon="user" />
                                </div>  
                            </Link>
                        
                            </div >
                              
                                <Route path="/personal" component={Personal}></Route>
                                <Route path="/shuffingimg" component={ShuffingImg}></Route>
                                <Route path="/login1page" component={Login1Page}></Route>
                                <Route path="/register" component={Register}></Route>

              
          </div>

             
                    
          
           
        )
    }
}