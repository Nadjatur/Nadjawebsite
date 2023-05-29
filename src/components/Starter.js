import React from "react";
import "./../scss/Starter.scss";
import myVideo from "../assets/fairy.mp4";

function Starter() {
  return (
    <div className="bg">
      <video src={myVideo} autoPlay loop muted />
      <h1>Nađa Tur website</h1>
      <div className="float-area">


      <p className='floating-txt'>Scroll down for more
      <svg className='floating-img'>


<g>
	<path d="M 90 24.25 c 0 -0.896 -0.342 -1.792 -1.025 -2.475 c -1.366 -1.367 -3.583 -1.367 -4.949 0 L 45 60.8 L 5.975 21.775 c -1.367 -1.367 -3.583 -1.367 -4.95 0 c -1.366 1.367 -1.366 3.583 0 4.95 l 41.5 41.5 c 1.366 1.367 3.583 1.367 4.949 0 l 41.5 -41.5 C 89.658 26.042 90 25.146 90 24.25 z"  />
</g>
</svg></p>
      </div>

      <ul className="menuRight">
        <li><a href='#about'>About me</a></li>
        <li><a href='#projects'>My projects</a></li>
        <li><a>Social media</a></li>
        <li><a>Contact me</a></li>
      </ul>
    </div>
  );
}

export default Starter;
