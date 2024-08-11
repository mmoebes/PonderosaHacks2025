import React from "react";
import "./Prize.css";
import Maleea from "/images/MaleeaProfilePic.jpg";
//import { cardData } from "./data";

const Leadership = () => {
  return (
    <div className="leadership-section">
      <div className="leadership-head-section">
        <h1 className="heading-tag-line">Leadership</h1>
        < hr className="heading-underline" />
      </div>
      <div className="leadership-subsection" id="Leadership">
        <div className="leadership-left-section">
          <p>
            Maleea Moebes is a high school senior at BASIS Flagstaff. She is pursuing Computer Science in college 
            and knows python, java, html, and dabbles in C. She is looking forward to helping with all your ambitious 
            Hackathon projects.
          </p>
        
          <div className="profile-pic">
            <a href="/">
              <img src={Maleea} alt="Maleea Moebes"  />
            </a>
          </div>
        </div>
      </div>
  </div>
  );
};

export default Leadership;
