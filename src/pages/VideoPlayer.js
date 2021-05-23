import React from "react";
import ReactHlsPlayer from 'react-hls-player';

var local = "http://localhost:4000/media/1/stream/"
var ngrok = "http://daecea95f19e.ngrok.io/media/1/stream/"


function VideoPlayer() {
    const source = ngrok;

    return (
        <div>
            <ReactHlsPlayer src={source}
                autoPlay={true}
                controls={true}
                width="100%"
                height="auto"/>
        </div>
    );

}
export default VideoPlayer
