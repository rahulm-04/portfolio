import React from "react";
import Navbar from "./components/Navbar/navbar";
import Hero from "./components/Hero/hero";
import About from "./components/About/about";
import Skills from "./components/Skills/skills";
import VideoLayout from "./components/Layout/layout";
import Project from "./components/Projects/project";
import Education from "./components/Education/edu";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";
import Projects from "./components/Projects/project";
import Experience from "./components/Experience/experience";


function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <VideoLayout>
       <About/>
       <Skills/>
       <Experience/>
       <Projects/>
       <Education/>
       <Contact/>
      </VideoLayout>
      <Footer/>
    </div>
  );
}

export default App;
