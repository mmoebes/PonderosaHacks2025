import React from "react";

import "./about.css";

const AboutSection = () => {
  return (
    <div className="about-section">
      <div className="about-head-section">
        <h1 className="heading-tag-line3">About</h1>
        <hr className="heading-underline3" />
      </div>
      <div className="about-subsection" id="About">
        <div className="about-left-section">
          <h2 className="about-heading">
          What Is A Hackathon? 
          </h2>
          <p>
          A hackathon is a collaborative event where people come together and "hack" solutions to real-world problems 
          such as world hunger, water pollution, or accessibility barriers. While we will not likely find THE solution 
          to a global problem, we can workshop innovative ideas that may contribute to actual solutions. With hours of 
          time to brainstorm, create, and model, you will present your project to a panel of judges for a chance to win 
          cool prizes. During the day, we will provide food, snacks, activities to earn prizes, skills workshops to help 
          with your project, and free goodies from our sponsors.

          </p>
          <p>
            If coding isn't your cup of tea, that's no problem. You can make a prototype of a physical device, a website 
            (we will have a workshop teaching you how), a game, or anything you can think of. 
            We will have volunteers and people knowledgeable in engineering and computer science to help you with your project. 
            Come with a team or find one at the event. 
          </p>
          <p>Everything begins with an IDEA.</p>
        </div>

      </div>
    </div>
  );
};

export default AboutSection;
