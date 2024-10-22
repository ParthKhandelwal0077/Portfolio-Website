import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import ItsMe from "./Pages/ItsMe"
import Contact from "./Pages/Contact";
import Restricted from "./Pages/Restricted"

import Gallery from "./Pages/Gallery"
import Layout from "./Pages/Layout"
import './styles/App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />}/>
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/ItsMe" element={<ItsMe/>} />
           <Route path="/restricted" element={<Restricted/>} />
              
       </Route>
      </Routes>
    </Router>
  );
}

export default App;