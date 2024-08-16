import React, { useState, useEffect } from "react";
import "./Prize.css";
import { FiArrowUpRight } from "react-icons/fi";
import Maleea from "/images/MaleeaProfilePic.jpg";

const Prize = () => {

  return (
    <div className="team-container" id="Leadership">
      <h1 className="heading-tag-line">Leadership</h1>
      < hr className="heading-underline" />
      <div className="team-section">

       <div className="team-left-section">
          <div className="leader1">
            <a href="/">
              <img src={Maleea} alt="Maleea"  />
            </a>
          </div>
        </div>

        <div className="team-right-section">
          <p> Maleea Moebes is a high school senior at BASIS Flagstaff. She plans to pursue
            Computer Science in college and knows Python and Java and dabbles in C and HTML. She 
            is looking forward to helping with all your ambitious Hackathon projects. </p>
        </div>
 
      </div>
      <br />

    </div>
  );
};

export default Prize;
