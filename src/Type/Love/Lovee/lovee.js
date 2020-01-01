import React from 'react'

import {Link,Route} from 'react-router-dom'
import play5 from './Play5/play5'
var Css =require('../Lovee/css.css')
export default  class Lovee extends  React.Component{
        

    render(){

        return(
           
            <div >
                  <Link to="/play5">
                <div className={Css.movie}> 
                    <img src={this.props.product.img} width="230px" height="367px" alt="图片未加载"className={Css.img}></img>
                    <p className={Css.name}>片名{this.props.product.name}</p>
                    <p className={Css.person}>主演：{this.props.product.person}</p>
                    <p className={Css.director}>导演：{this.props.product.director}</p>
                    <p className={Css.Introduction}>电影简介：{this.props.product.Introduction}</p>
                </div>
                </Link>
                <Route path="/paly5" component={play5}></Route>
            </div>
           
        )
    }
}