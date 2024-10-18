import React, { useEffect, useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : null}`}>
      <div className="navbar-container container">
        <input type="checkbox" name="" id="" />
        <div className="hamburger-lines">
          <span className="line line1"></span>
          <span className="line line2"></span>
          <span className="line line3"></span>
        </div>
        <ul className="menu-items">
          <li className="borderXwidth">
            <a href="#About">About</a>
          </li>
          {/*
          <li className="borderXwidth">
            <a href="#FAQs">FAQs</a>
          </li>
          <li className="borderXwidth">
            <a href="#Venue">Venue</a>
          </li> 
          */}         
          <li className="borderXwidth">
            <a href="#Sponsors">Sponsors</a>
          </li>
          <li className="borderXwidth">
            <a href="#Leadership">Leadership</a>
          </li>
          <li className="borderXwidth">
            <a href="mailto:info@ponderosa-hacks.com" target="_blank">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
    );
};



export default Navbar;
