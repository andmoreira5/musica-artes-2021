import React from 'react'
import video from './congMusica.mp4'
import './styleVideo.css'

export default function Video(){
    return(
        <video autoPlay loop muted>
            <source src={video} type="video/mp4"></source>
        </video>
    );
}