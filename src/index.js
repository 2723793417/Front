import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter,Route, Redirect} from 'react-router-dom';
import Top from './Top/top'
import Type from './Type/type'
import play1 from './ShufflingImg/Play/play01';
import play2 from './ShufflingImg/Play02/play02';
import play3 from './ShufflingImg/Play 03/play03'
 
class IndexPage extends React.Component{

    render(){
        return(
            <div className="index"> 
               
            <BrowserRouter>
                
                <Top></Top>
               
                <Route path="/type" component={Type}></Route>{/*更多分类的路由*/}
                <Route path="/play01" component={play1}></Route>{/*play是播放界面  每部电影都写了一个，但是应该只有一个界面，利用js来跳转界面，然后后端实现数据调用来播放视频*/}
                <Route path="/play02" component={play2}></Route>
                <Route path="/play03" component={play3}></Route>
                
                <Redirect to="shuffingimg"></Redirect>{/*主界面，有第一个走马灯轮播图 广告位和推荐 这里应该是调用数据库的，然后管理员修改数据就可以对这里进行控制 */}
             </BrowserRouter>
               
                <div></div>
            </div>
        )
    }
}

ReactDOM.render(<IndexPage/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
