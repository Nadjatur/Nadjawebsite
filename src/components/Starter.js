import React from 'react';
import "./../scss/Starter.scss";
import myVideo from '../assets/fairy.mp4';

function Starter() {
    return (
        <div className='bg'>
            <video src={myVideo} autoPlay loop muted />
            <h1>Nadja Tur website</h1>
        </div>
    )
}

export default Starter;