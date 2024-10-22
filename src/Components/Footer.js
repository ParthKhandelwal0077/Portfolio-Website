import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../styles/Footer.css"
import 'remixicon/fonts/remixicon.css';
import logo from "../images/1.png"

function Footer() {

  const navigate = useNavigate();
  return (
    <footer className="footer">
      {/* part 1 */}
        <section className="footer__quote">
              <p className="footer__quoteItem">“WE ARE WHATEVER WE PRETEND TO BE”</p>
              <p className="footer__quoteAuthor">- DEVERSHIKA PANDIT</p>
        </section>
      {/* part 2 */}
      <section className="footer__main">
        <div className="footer__mainPages">
          <h2>Pages</h2>
          <ul className="footer__pagesList">
      
            <li  className="footer__pagesItem"><Link to="/about">About</Link></li>
            <li  className="footer__pagesItem"><Link to="/projects">Projects</Link></li>
            <li  className="footer__pagesItem"><Link to="/gallery">Gallery</Link></li>
            <li  className="footer__pagesItem"><Link to="/contact">Contact</Link></li>
            <li  className="footer__pagesItem"><Link to="/covers">Covers</Link></li>
          </ul>
          </div>
          <div className="footer__mainLogo">
              <img src ={logo} alt="logo" onClick={()=>navigate('/ItsMe')}/>
              <p>©2024 Devershika Pandit</p>
          </div>
        </section>
        {/* part 3 */}
        <section className="footer__socialMedia"></section>
        <div className="footer__socialIcons">
            <a href="https://www.threads.net/@devershikapandit?xmt=AQGzAMvgtcqJP1LmmMM2dQ-IAVScw2xS5fwcX_20UM9tth8" className="footer__socialMedia" target="_blank" rel="noopener noreferrer" >
            <i class="ri-threads-line"></i>
            </a>
            <a href="https://www.instagram.com/devershikapandit/" className="footer__socialMedia" target="_blank" rel="noopener noreferrer">
            <i class="ri-instagram-line"></i>
            </a>
        </div>

    </footer>

  );
}

export default Footer;
