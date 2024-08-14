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
          <div className="logo">
            <a href="/">
              <img src={Maleea} alt="Maleea"  />
            </a>
          </div>
        </div>

        <div className="team-right-section">
          <h4 className="profile">
          <span> Maleea Moebes is a high school senior at BASIS Flagstaff. She will pursue
            Computer Science in college and knows Python and Java and dabbles in C and HTML. She 
            is looking forward to helping with all your ambitious Hackathon projects. </span>
          </h4>

          {/*<div className="button">
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
          </div>*/}
        </div>
 
      </div>
      <br />
      < hr className="divider-line" />
    </div>
  );
};

export default Prize;
