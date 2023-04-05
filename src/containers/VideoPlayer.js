import React from 'react';

import video from '../assets/videos/Heathers Act 1.mp4';
import subtitles from '../assets/subtitles/Heathers_Legenda_Ato1.srt';


const VIDEO_PATH_REGEX = /videoPath=(?<videoPath>.*?)&?$/i;
const SUBTITLES_PATH_REGEX = /subtitlesPath=(?<subtitlesPath>.*?)&?$/i;

const VideoPlayer = (props) => {
    const videoPathMatch = VIDEO_PATH_REGEX.exec(props.location.search);
    const videoPath = !!videoPathMatch ? videoPathMatch.groups.videoPath : 'No title available';
    const subtitlesPathMatch = SUBTITLES_PATH_REGEX.exec(props.location.search);
    const subtitlesPath = !!subtitlesPathMatch ? subtitlesPathMatch.groups.subtitlesPath : 'No title available';
    console.log(decodeURIComponent(videoPath), decodeURIComponent(subtitlesPath));
    return (
        // <video>
        //     <source src={decodeURIComponent(videoPath)} type="video/mp4" />
        //     <track label="Português" kind="subtitles" srcLang="pt" src={decodeURIComponent(subtitlesPath)} />
        // </video>
        <video>
            <source src={video} type="video/mp4" />
            <track label="Português" kind="subtitles" srcLang="pt" src={subtitles} />
        </video>
    );
};

export default VideoPlayer;