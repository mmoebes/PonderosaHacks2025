import React, { useState, useEffect } from "react";
import "./Prize.css";
import { FiArrowUpRight } from "react-icons/fi";
import Maleea1 from "/images/Maleea1.jpg";
import Jaden1 from "/images/Jaden1.png";
import Sav1 from "/images/Sav1.png";

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
        </div>

        <div>
        <a href="/">
            <img src={Sav1} alt="Savannah"  />
          </a><br />
          <p><b>Flagstaff High Outreach</b></p>
            <p><b>Savannah Sanistreet - Flagstaff High School, Senior </b>
            
               <br />
              ...........................
            </p>
        </div>

      <  div>
      <a href="/">
            <img src={Jaden1} alt="Jaden Anonymous"  />
          </a><br /><br />
            <p> <b>Coconino High Outreach</b></p>
            <p><b>Jaden - Coconino High School, Junior </b>
           
               <br />
              ........................
            </p>
        </div>
    </div>
    
 

    </div>
  );
};

export default Prize;
