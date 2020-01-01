import React from 'react'

import { Player } from 'video-react';

var PlayCss =require('./play.css')

export default class Play  extends React.Component{
    

    render (){

        return(
           

                <div className={PlayCss.playout}> 

                        <div className={PlayCss.playtop}>钢铁侠</div>
                        <div className={PlayCss.play}>
                        <link rel="stylesheet" href="https://video-react.github.io/assets/video-react.css" />
                        <Player className={PlayCss.player}>
                            <source src="/Mp4s/gtx.mp4" />
                        </Player>
                        </div>
                      
                        
                </div>
           
        )
    }
}