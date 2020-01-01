import React from 'react'
import {Radio,Button} from 'antd'
var SetupCss = require('./setup.css')
export default class Setup extends React.Component{
    render(){

        return(
                <div>
                    <div className={SetupCss.theme}>
                    <span className={SetupCss.wenzi}>主题选择</span>

                    <div className={SetupCss.radio}>
                        <Radio.Group defaultValue="a" buttonStyle="solid">
                            <Radio.Button value="a" className={SetupCss.a}>复古绿</Radio.Button>
                            <Radio.Button value="b" className={SetupCss.a}>中国红</Radio.Button>
                            <Radio.Button value="c" className={SetupCss.a}>玄潭黑</Radio.Button>
                            <Radio.Button value="d" className={SetupCss.a}>哈尼粉</Radio.Button>
                            <br></br>
                            <Radio.Button value="e" className={SetupCss.a}>霜茶白</Radio.Button>
                            <Radio.Button value="f" className={SetupCss.a}>魅惑紫</Radio.Button>
                            <Radio.Button value="g" className={SetupCss.a}>忧郁蓝</Radio.Button>
                            <Radio.Button value="h" className={SetupCss.a}>活力橙</Radio.Button>
                        </Radio.Group>
                    </div>

                    <Button type="primary" className={SetupCss.button}>确认使用</Button>

                    </div>
                    <div className={SetupCss.download}>下载设置</div>
                </div>
            
        )
    }
}