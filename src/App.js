//import logo from './logo.svg';
import './App.css';
import Starter from './components/Starter';
import AboutMe from './components/AboutMe';
function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal); 

function App() {
  return (
    <div >
      <Starter/>
      <AboutMe/>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#212534"  d="M0,320L40,282.7C80,245,160,171,240,149.3C320,128,400,160,480,160C560,160,640,128,720,117.3C800,107,880,117,960,154.7C1040,192,1120,256,1200,282.7C1280,309,1360,299,1400,293.3L1440,288L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path></svg>
    </div>
  );
}

export default App;
