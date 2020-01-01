import React from 'react'
import {Link,Route } from 'react-router-dom'
import play4 from './Play/play4'
var Css =require ('../Sciencee/css.css')
export default  class Sciencee extends  React.Component{


    render(){

        return(
           
            <div >
                 <Link to="/play4">
                
                    <div className={Css.movie}> 
                        <img src={this.props.product.img} width="230px" height="360px"alt="图片未加载" className={Css.img}></img>
                        <p className={Css.name}>片名{this.props.product.name}</p>
                        <p className={Css.person}>主演：{this.props.product.person}</p>
                        <p className={Css.director}>导演：{this.props.product.director}</p>
                        <p className={Css.Introduction}>电影简介：{this.props.product.Introduction}</p>
                        
                    </div>
                
                <Route path="/play4" component={play4}></Route>
                </Link>
        </div>
       
        )
    }
}