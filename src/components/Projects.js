import React from "react";
import "./../scss/Projects.scss";
import part from "../assets/unnamed.jpg";
import parttwo from "../assets/parttwo.jpg";
import castle from "../assets/castle.jpg";
import castle1 from "../assets/castle1.jpg";
import castle2 from "../assets/castle2.jpg";
import steps from "../assets/steps.gif";
import steps2 from "../assets/steps.gif";
function Projects() {
  return (
    <div className="Projects" id="projects">
      <h1>To continue, use a map...</h1>
      <div className="line">
      <img src={part} className="photoa"/>
      <img src={steps} className="step"/>
      <img src={steps2} className="step2"/>
      <a href="https://nadjatur.github.io/fws-fe-test-macfarlanes_nadja-tur/"><img src={castle} className="castles"/> <h4 className="textc">Macfarlanes</h4></a>
      <a href="https://nadjatur.github.io/Sadona/"><img src={castle1} className="castles1"/><h4 className="textc1">Sadona</h4></a>
      <a href="https://github.com/Nadjatur/kanban"><img src={castle2} className="castles2"/><h4 className="textc2">Kanban</h4></a>
     
      
      
      <img src={parttwo} className="photob"/>
      </div>
    </div>
  );
}

export default Projects;
