import React from "react";
import "./footer.css";
import hackathonLogo from "/images/hackslogo3.png";
import { FaLinkedinIn, FaEnvelope } from "react-icons/fa6";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { SiDevpost } from "react-icons/si";

const footer = () => {
  // get the current year dynamically
  const currentYear = new Date().getFullYear();
  return (
    <footer className="mainContainer" id="Footer">
      
      <div className="contentContainer">
        <div className="logoContent"> 
          <p> 
          </p>
          
      <div className="socialContent">
          
            <ul className="socialLogo">
              <li>
                
               <a href="mailto:info@ponderosa-hacks.com?" target="_blank">
                 <FaEnvelope />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/ponderosa-hacks" target="_blank">
                  <FaLinkedinIn />
                </a>
              </li>
             <li className="instalogo">
              <a href="https://ponderosa-hacks.devpost.com/" target="_blank">
                  <SiDevpost />
                </a>
              </li>
            </ul>

        </div>
        </div>
      </div>
      <div className="copyContainer">
        <p>
          <span>©</span> {currentYear} PONDEROSA HACKS.<span> Fiscally sponsored by&nbsp;         
            <a href="https://hackclub.com" target="_blank">
          Hack Club
          </a>
          . Nonprofit EIN: 81-2908499.</span>
        </p>
      </div>
    </footer>
  );
};

export default footer;
