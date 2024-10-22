// Header.js
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

import "../styles/Header.css";
import 'remixicon/fonts/remixicon.css';
import logo from '../images/1.png';

function Header({ className }) {
  
 
  const navigate = useNavigate();

  const onClicked = () => {
    navigate("/");
  }

  const [isChecked, setIsChecked] = useState(false);
  const location = useLocation();

  // Close nav menu when location changes (i.e., when user navigates to another page)
  useEffect(() => {
    setIsChecked(false); // This will close the menu
  }, [location]);

  const handleToggle = () => {
    setIsChecked(!isChecked); // Open or close the menu
  };


  return (
  
      <header className={className}>
      
        {/* instagram */}
        <a
          href="https://www.instagram.com/devershikapandit/"
          className="header__insta"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="ri-instagram-line"></i>
        </a>

        {/* Logo */}
       <figure className="header__logo">
       <img
          
          src={logo}
          alt="DP Logo"
          onClick={onClicked}
        />
       </figure>

       <div>
      {/* Toggle button */}
      <input
        type="checkbox"
        id="toggle"
        style={{ display: 'none' }}
        checked={isChecked}
        onChange={handleToggle}
      />
      <label className={`toggle-btn ${isChecked ? 'toggle-btn__cross' : ''}`} onClick={handleToggle}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </label>

      {/* Navigation */}
      <nav className={isChecked ? 'open' : ''}>
        <ul>
        <li><Link to="/" onClick={() => setIsChecked(false)}>Home</Link></li>
          <li><Link to="/about" onClick={() => setIsChecked(false)}>About</Link></li>
          <li><Link to="/gallery" onClick={() => setIsChecked(false)}>Gallery</Link></li>
          <li><Link to="/projects" onClick={() => setIsChecked(false)}>Projects</Link></li>
          <li><Link to="/contact" onClick={() => setIsChecked(false)}>Contact</Link></li>
        </ul>
      </nav>
    </div>
    
   
      </header>
    
  );
}

export default Header;







    //   {/* Nav */}
    //    {/* <div className="menu-wrap">
    //   <input type="checkbox" className="toggler" />
    //   <div className="hamburger">
    //     <div></div>
    //   </div>
    //   <div className="menu">
    //     <div>
    //       <div>
    //         <ul className="nav__list">
    //           <li className="nav__item">
    //             <Link to="/" className="nav__link" >Home</Link>
    //           </li>
    //           <li className="nav__item">
    //             <Link to="/about" className="nav__link" >About</Link>
    //           </li>
    //           <li className="nav__item">
    //             <Link to="/gallery" className="nav__link">Gallery</Link>
    //           </li>
    //           <li className="nav__item">
    //             <Link to="/projects" className="nav__link" >Projects</Link>
    //           </li>
    //           <li className="nav__item">
    //             <Link to="/contact" className="nav__link" >Contact</Link>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //   </div>
    // </div> */}
