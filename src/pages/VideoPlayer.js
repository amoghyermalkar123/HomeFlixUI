import React from "react";
import "./VideoPlayer.css";
import ReactHlsPlayer from 'react-hls-player';

function VideoPlayer() {
    const source = 'http://localhost:3000/media/1/stream/';

    return (
        <div>
            <ReactHlsPlayer src={source}
                autoPlay={false}
                controls={true}
                width="100%"
                height="auto"
                id="videoPlayer"/>
        </div>
    );
}
export default VideoPlayer
