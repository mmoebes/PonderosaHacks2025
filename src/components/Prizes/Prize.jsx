import React, { useState, useEffect } from "react";
import "./Prize.css";
import { FiArrowUpRight } from "react-icons/fi";
import Maleea1 from "/images/Maleea1.jpg";
import Annabelle1 from "/images/Annabelle1.png";
import Sav1 from "/images/Sav2.png";
import Eva1 from "/images/Eva1.png";
import { FaLinkedinIn, FaEnvelope } from "react-icons/fa6";

const Prize = () => {

  return (
    
    <div className="team-container" id="Leadership">
      <h1 className="heading-tag-line">Leadership</h1>
      <hr className="heading-underline" />
        <div class="responsive-three-column-grid">

            <div>
                <a href="/">
                <img src={Maleea1} alt="Maleea"  />
                </a><br /><br />
          
                <p><b>Organizer/Founder</b></p>

                <p><b>Maleea Moebes - BASIS Flagstaff, Senior </b>
                <br />
                Maleea plans to pursue Computer Science in college with a focus 
                on Cybersecurity. She knows Python and Java and dabbles in C 
                and HTML. When she's not sitting at a computer, Maleea can be found
                playing sports or hammocking in the ponderosa pines.
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
                </a><br /><br />

                <p><b>Outreach Director</b></p>

                <p><b>Savannah Stanistreet - Flagstaff High School, Senior </b>
                <br />
              Savannah aspires to pursue a career in the medical field and hopes
              to help bring a medical touch to your projects. On top of being a 
              representative for Ponderosa Hacks, she is a nationally qualified 
              figure skater.
                </p>
            </div>

            <div>
                <a href="/">
                <img src={Eva1} alt="Eva"  />
                </a><br /><br />
                <p> <b>Media Manager</b></p>
                <p><b>Eva Wilke - Coconino High School, Junior </b>
           
               <br />
              Eva is the Student President of the Career and Technical Student 
              Organization and is interested in Engineering and Design. She loves volleyball and
              plays on both the indoor and beach volleyball teams for her high school.
                </p>
            </div>
    
            
            <div>
                <a href="/">
                <img src={Annabelle1} alt="Annabelle"  />
                </a><br /><br />
                <p> <b>Outreach Director</b></p>
                <p><b>Annabelle Jackson - Northland Prep Academy, Senior </b>
            
               <br />
               Annabelle has ambitions of purusing a career in business and learning 
               spanish. For the time being though, she enjoys filling her day with 
               her studies, sports, side hustles, and school clubs. Aside from being 
               a representative for Ponderosa Hacks, she is also a captain for her 
               6 time state champion varsity soccer team.
            </p>
            </div>
            
        </div>
        </div>    
  );
};

export default Prize;
