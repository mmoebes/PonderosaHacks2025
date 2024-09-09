import React, { useState, useEffect } from "react";
import "./Prize.css";
import { FiArrowUpRight } from "react-icons/fi";
import Maleea1 from "/images/Maleea1.jpg";
import Jaden1 from "/images/Jaden1.png";
import Sav1 from "/images/Sav1.png";
import { FaLinkedinIn, FaEnvelope } from "react-icons/fa6";

const Prize = () => {

  return (
    
    <div className="team-container" id="Leadership">
      <h1 className="heading-tag-line">Leadership</h1>
      < hr className="heading-underline" />
      <div class="responsive-three-column-grid">

         <div>
          <a href="/">
            <img src={Maleea1} alt="Maleea"  />
          </a><br /><br />
          
            <p><b>Organizer/Founder</b></p>

            <p><b>Maleea Moebes - BASIS Flagstaff, Senior </b>
               <br />
              I plan to pursue Computer Science in college with a focus 
              on Cybersecurity. I know Python and Java and dabble in C 
              and HTML. I'm looking forward to helping with all your 
              awesome Hackathon projects.
            </p>
            <a href="mailto:maleea@ponderosa-hacks.com?" target="_blank">
                 <FaEnvelope color='orange'/>
                </a>  &nbsp;
                <a href="https://www.linkedin.com/in/maleea-moebes/" target="_blank">
                 <FaLinkedinIn color='orange'/>
                </a>
        </div>

        <div>
        <a href="/">
            <img src={Sav1} alt="Savannah"  />
          </a><br />
          <p><b>Outreach Director</b></p>
            <p><b>Savannah Sanistreet - Flagstaff High School, Senior </b>
            
               <br />
              ...........................
            </p>
        </div>

      <  div>
      <a href="/">
            <img src={Jaden1} alt="Jaden"  />
          </a><br /><br />
            <p> <b>Outreach Director</b></p>
            <p><b>Jaden - Coconino High School, Junior </b>
           
               <br />
              ........................
            </p>
        </div>
    </div>
    
    <div class="divider-line">
    </div>
    </div>
    
  );
};

export default Prize;
