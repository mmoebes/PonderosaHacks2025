import React, { useState, useEffect } from "react";
import "./team.css";
import { FiArrowUpRight } from "react-icons/fi";
import Maleea from "/images/MaleeaProfilePic.jpg";

const Team = () => {

  return (
    <div className="team-container" id="Leadership">

      <div className="section">

       <div className="left-section">
          <div className="logo">
            <a href="/">
              <img src={Maleea} alt="Maleea"  />
            </a>
          </div>
        </div>

        <div className="right-section">
          <h4 className="profile">
          <span> Maleea Moebes is a high school senior at BASIS Flagstaff. She is pursuing 
            Computer Science in college and knows python, java, html, and dabbles in C. She 
            is looking forward to helping with all your ambitious Hackathon projects. </span>
          </h4>

          <div className="button">
            <button
              type="button"
              className="btn btn-2 hover-slide-right register-btn"
            >
              <a href="https://hackthefuture.devfolio.co/" target="_blank">
                Register Now <FiArrowUpRight />
              </a>
            </button>
            <button
              type="button"
              className="btn btn-2 hover-slide-right discord"
            >
              <a href="https://discord.gg/q9vHfn9M" target="_blank">
                Donate/Sponsor 
              </a>
            </button>
          </div>
        </div>
 
      </div>
    </div>
  );
};

export default Team;
