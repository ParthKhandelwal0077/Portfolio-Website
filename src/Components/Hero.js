import React from "react";
import video from "../images/File_237.mp4"

function Hero() {
  return (
    
    <section className="hero">
      <div className="hero-quote">
        <p>“यत भावो - तत भवति”</p>
      </div>

      <div className="hero-text">
        <h1>DEVERSHIKA PANDIT</h1>
        <p>ACTOR | MODEL</p>
      </div>
      <video className="background-video" autoPlay muted loop>
      <source src={`${video}`} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
 
    </section>
  );
}

export default Hero;
