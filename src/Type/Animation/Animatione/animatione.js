import React from 'react'

var Css = require ('../Animatione/css.css')
export default  class Animatione extends  React.Component{


    render(){

        return(

            
            <div >
            <div className={Css.movie}> 
            <img src={this.props.product.img} width="230px" height="360px" alt="图片未加载"className={Css.img}></img>
                <p className={Css.name}>片名{this.props.product.name}</p>
                <p className={Css.person}>主演：{this.props.product.person}</p>
                <p className={Css.director}>导演：{this.props.product.director}</p>
                <p className={Css.Introduction}>电影简介：{this.props.product.Introduction}</p>
                
            </div>
           
        </div>
        )
    }
}