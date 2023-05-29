import React from "react";
import "./../scss/Projects.scss";
//import myVideo from "../assets/fairy.mp4";

function Projects() {
  return (
    <div className="Projects" id="projects">
      <h1>My projects</h1>
      <div className="horizontal">
      <div className="iteem"  ><svg ><g>
<path id="XMLID_92_" d="M111.213,165.004L250.607,25.607c5.858-5.858,5.858-15.355,0-21.213c-5.858-5.858-15.355-5.858-21.213,0.001
	l-150,150.004C76.58,157.211,75,161.026,75,165.004c0,3.979,1.581,7.794,4.394,10.607l150,149.996
	C232.322,328.536,236.161,330,240,330s7.678-1.464,10.607-4.394c5.858-5.858,5.858-15.355,0-21.213L111.213,165.004z"/>
</g></svg></div>
       <a href="https://nadjatur.github.io/fws-fe-test-macfarlanes_nadja-tur/"> <div className="item" id="firstgallery" ><h1>Macfarlanes</h1></div></a>
       <a href="https://nadjatur.github.io/Sadona/"><div className="item" id="secondgallery" ><h1>Sadona</h1></div></a>
       <a href="#about"><div className="item" id="secondgallery" ><h1>Kanban</h1></div></a>
        <div className="iteem"  ><svg  
	 ><g>
<path id="XMLID_103_" d="M233.252,155.997L120.752,6.001c-4.972-6.628-14.372-7.97-21-3c-6.628,4.971-7.971,14.373-3,21
	l105.75,140.997L96.752,306.001c-4.971,6.627-3.627,16.03,3,21c2.698,2.024,5.856,3.001,8.988,3.001
	c4.561,0,9.065-2.072,12.012-6.001l112.5-150.004C237.252,168.664,237.252,161.33,233.252,155.997z"/>
</g></svg></div>
      </div>
    </div>
  );
}

export default Projects;
