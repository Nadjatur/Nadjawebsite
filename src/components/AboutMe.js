import React from "react";
import "./../scss/AboutMe.scss";
//import me from "../assets/me.png";
import girl from "../assets/girl.png";
import serbia from "../assets/serbia.png";
import cake from "../assets/birthday-cake.png";
import ux from "../assets/ux.png";
import app from "../assets/app-development.png";
import dancer from "../assets/dancer.png";
import friend from "../assets/high-five.png";
import dog from "../assets/dog-walking.png";
import team from "../assets/united.png";
import linux from "../assets/linux.png";
import moving from "../assets/movingb.gif";
import frame from "../assets/frame.png";
import green from "../assets/green.png";

function AboutMe() {
    return (
        <div className='About' id='about'>
             <img src={frame}  alt="butterfly" className="frame"/>
             <img src={green}  alt="butterfly" className="green"/>
            <img src={moving}  alt="butterfly" className="topbutterfly"/>
            <img src={moving}  alt="butterfly" className="topbutterfly2"/>
            <img src={moving}  alt="butterfly" className="topbutterfly3"/>
            <img src={moving}  alt="butterfly" className="topbutterfly4"/>
            <h2 className="reveal">About me</h2>
            
            <div className="aboutme reveal">
               <ul>
                <li><img src={girl} alt="girl" className="mini"/>My name is Nađa Tur</li>
                <li><img src={cake} alt="girl" className="mini"/>I am 24 years old</li>
                <li><img src={serbia} alt="girl" className="mini"/>I live in Serbia</li>
                <li><img src={ux} alt="girl" className="mini"/>I love creating websites using React, HTML5, CSS, SASS and Vanilla Javascript!</li>
                <li><img src={app} alt="girl" className="mini"/>My passion is connecting my creative side and technology</li>
                <li><img src={linux} alt="girl" className="mini"/>To make everything work, I also create servers on Linux installing Apache, PHP and MySQL where websites are host </li>
                <li><img src={team} alt="girl" className="mini"/>I would describe myself as dedicated to work and friendly person who really enjoy working in team</li>
                <li><img src={dog} alt="girl" className="mini"/>My inspiration often comes in nature playing with my 2 dogs, where I fulfill my batteries . </li>
                <li><img src={friend} alt="girl" className="mini"/>Hanging out with my friends and spending time with my family is something precious. </li>
                <li><img src={dancer} alt="girl" className="mini"/>I also really enjoy dancing salsa, going to gym or just stay at home making delicious meals and watch Harry Potter movies </li>
                </ul>
                
            <div className="reveal">
            <div className="container ">
                <hr className="left-line"/>
                <hr className="left-line hidden"/>
                <hr className="top-line"/>
                <hr className="top-line hidden"/>
                <hr className="right-line"/>
                <hr className="right-line hidden"/>
                <hr className="bottom-line"/>
                <hr className="bottom-line hidden"/>
             </div></div>
        </div>
            
        </div>
    );
}

export default AboutMe;