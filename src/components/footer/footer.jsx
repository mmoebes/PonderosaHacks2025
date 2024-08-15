import React from "react";
import "./footer.css";
import hackathonLogo from "/images/ponderosahackslogo2.png";
import { FaLinkedinIn } from "react-icons/fa6";
import { BsFacebook, BsInstagram } from "react-icons/bs";

const footer = () => {
  // get the current year dynamically
  const currentYear = new Date().getFullYear();
  return (
    <footer className="mainContainer" id="Footer">
      
      <div className="contentContainer">
        <div className="logoContent">
          <a href="/">
            <img src={hackathonLogo} alt="Ponderosa Hacks" />
          </a>
        </div>
      {/*  <div className="socialContent">*/}
      {/*    <div className="contentText">*/}
      {/*      <ul className="socialLogo">*/}
      {/*        <li>*/}
      {/*          <a href="/" target="_blank">*/}
      {/*            <BsFacebook />*/}
      {/*          </a>*/}
      {/*        </li>*/}
      {/*        <li>*/}
      {/*          <a href="/" target="_blank">*/}
      {/*            <FaLinkedinIn />*/}
      {/*          </a>*/}
      {/*        </li>*/}
       {/*       <li className="instalogo">*/}
       {/*         <a href="/" target="_blank">*/}
       {/*           <BsInstagram />*/}
       {/*         </a>*/}
        {/*      </li>*/}
        {/*    </ul>*/}
        {/*  </div>*/}
        {/*</div>*/}

      </div>
      <div className="copyContainer">
        <p>
          <span>©</span> {currentYear} PONDEROSA HACKS.<span> Fiscally sponsored by The Hack Foundation. Nonprofit EIN: 81-2908499.</span>
        </p>
      </div>
    </footer>
  );
};

export default footer;
