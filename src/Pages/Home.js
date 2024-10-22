import React from "react";
import Hero from "../Components/Hero";
import Latest from "../Components/Latest";

import "../styles/Home.css"
import AboutComponent from '../Components/AboutComponents'

import ProjectsComponent from "../Components/ProjectsComponent";


function Home() {
  return (
    <>
    <main className="homeMain">
      <Hero />
      <AboutComponent/>
      <Latest />
      <ProjectsComponent />
    </main>
  
    </>
  );
}

export default Home;
