import React from 'react';
import {BrowserRouter,Route,Redirect,Link,} from 'react-router-dom';
import Love from './Love/love'
import Active from './Active/active'
import Animation from './Animation/animation'
import Documentary from './Documentary/documentary'
import Fantasy from './Fantasy/fantasy'
import Plot from './Plot/plot'
import Science from './Science/science'
import Terrorist from './Terrorist/terrorist'
import play4 from './Science/Sciencee/Play/play4'
import play5 from './Love/Lovee/Play5/play5'
var TypeCss = require('./type.css');

export default class Type extends React.Component{


    render(){
        return(

           
        <div className={TypeCss.mout}>
                <BrowserRouter basename="type">
            <div className={TypeCss.list}>        
                <div className={TypeCss.outer}>
                    <Link to="/love"><div className={TypeCss.l1}>爱情</div></Link>
                </div>
                <div className={TypeCss.outer}>
                    <Link to="/terrorist"><div className={TypeCss.l1}>惊悚恐怖</div></Link>
                </div>
                <div className={TypeCss.outer}>
                    <Link to="/plot"><div className={TypeCss.l1}>剧情</div></Link>
                </div>
                <div className={TypeCss.outer}>
                    <Link to="/active"><div className={TypeCss.l1}>动作</div></Link>
                </div>
                <div className={TypeCss.outer}>
                    <Link to="/fantasy"><div className={TypeCss.l1}>奇幻</div></Link>
                </div>
                <div className={TypeCss.outer}>
                    <Link to="/animation"><div className={TypeCss.l1}>动画</div></Link>
                </div>
                <div className={TypeCss.outer}>
                    <Link to="/documentary"><div className={TypeCss.l1}>喜剧</div></Link>
                </div>
                <div className={TypeCss.outer}>
                    <Link to="/science"><div className={TypeCss.l1}>科幻</div></Link>
                </div>
            </div>    
                <div className={TypeCss.option}>
                <div className="luyou">
                    <Route path="/love" component={Love} className={TypeCss.r}></Route>
                    <Route path="/terrorist" component={Terrorist}></Route>
                    <Route path="/plot" component={Plot}></Route>
                    <Route path="/active" component={Active}></Route>
                    <Route path="/fantasy" component={Fantasy}></Route>
                    <Route path="/animation" component={Animation}></Route>
                    <Route path="/documentary" component={Documentary}></Route>
                    <Route path="/science" component={Science}></Route>
                    <Redirect to="/love"></Redirect>
                    <Route path="/play4" component={play4}></Route>
                    <Route path="/paly5" component={play5}></Route>
                    
                </div>
           
            </div>
                
            {/* <div className={TypeCss.option}>
                <div className="luyou">
                    <Route path="/love" component={Love} className={TypeCss.r}></Route>
                    <Route path="/terrorist" component={Terrorist}></Route>
                    <Route path="/plot" component={Plot}></Route>
                    <Route path="/active" component={Active}></Route>
                    <Route path="/fantasy" component={Fantasy}></Route>
                    <Route path="/animation" component={Animation}></Route>
                    <Route path="/documentary" component={Documentary}></Route>
                    <Route path="/science" component={Science}></Route>
                    <Redirect to="/love"></Redirect>
                    <Route path="/play4" component={play4}></Route>
                    <Route path="/paly5" component={play5}></Route>
                    
                </div>
            </div> */}
                </BrowserRouter>
        </div>
        
           
        )
    }
}
