import React, { useState, useEffect } from "react";
import "./Prize.css";
import { FiArrowUpRight } from "react-icons/fi";
import Maleea from "/images/MaleeaProfilePic.jpg";
import Maleea1 from "/images/Maleea1.jpg";

const Prize = () => {

  return (
    
    <div className="team-container" id="Leadership">
      <h1 className="heading-tag-line">Leadership</h1>
      < hr className="heading-underline" />
      <div class="responsive-three-column-grid">
       
        <div>
        <a href="/">
            <img src={Sav1} alt="Savannah"  />
          </a><br />
            <p><b>Savannah Sanistreet - Flagstaff High School, Senior </b>
            <b>Flagstaff High Outreach Cordinator</b>
               <br />
              ...........................
            </p>
        </div>

         <div>
          <a href="/">
            <img src={Maleea1} alt="Maleea"  />
          </a><br />
            <p><b>Maleea Moebes - BASIS Flagstaff, Senior </b>
            <b>Organizer/Founder</b>
               <br />
              I plan to pursue Computer Science in college and know Python
              and Java and dabble in C and HTML. I'm looking forward to 
              helping with all your ambitious Hackathon projects.
            </p>
        </div>
        
      <  div>
      <a href="/">
            <img src={Jaden1} alt="Jaden Anonymous"  />
          </a><br />
            <p><b>Jaden - Coconino High School, Junior </b>
            <b>Coconino High Outreach Cordinator</b>
               <br />
              ........................
            </p>
        </div>
    </div>
    
 

    </div>
  );
};

export default Prize;
