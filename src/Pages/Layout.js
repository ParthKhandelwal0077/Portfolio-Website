import React from 'react';
import {useState, useEffect} from 'react'
import { Outlet } from 'react-router-dom';
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "../styles/Layout.css"

const Layout = () => {
  const [scrollUp, setScrollUp] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  

  useEffect(() => {


    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < lastScrollY) {
        setScrollUp(true);  // Scrolling down
      } else {
        setScrollUp(false);   // Scrolling up
      }
      setLastScrollY(currentScrollY);  // Update the last scroll position
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div className="layout-container"> {/* Use a wrapper div */}
      <Header className={`header ${scrollUp ? "visible" : "hidden"}`} />
      <main className="main-content">
        <Outlet /> {/* This will grow and take up available space */}
      </main>
      <Footer /> {/* Footer remains at the bottom */}
    </div>
  );
};

export default Layout;
