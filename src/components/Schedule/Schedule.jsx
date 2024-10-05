import React from "react";
import "./Schedule.css";
import { FiCheckCircle } from "react-icons/fi";
import W1 from "/images/W1.png";
import W2 from "/images/W2.png";
import W3 from "/images/W3.png";
import W4 from "/images/W4.png";

const Timeline = () => {
  return (
    <div>
      <div className="sched-section">
           <h1 className="schedheading-tag-line">Schedule</h1>
           <hr className="schedheading-underline" />
         <div className="Schedule_main">
            <div className="responsive-two-column-grid">
               <div>
                <p> 👋 <b>8:00AM</b> Check-in, Breakfast</p>
                <p> 📢 <b>8:30AM</b> Welcome! Opening Ceremony</p>
                <p> 👥 <b>9:00AM</b> Team Formation (Optional)</p>
                <p> 👩‍💻 <b>9:15AM</b> Hacking Begins</p>
                
                <p> 🍽️ <b>12:00PM</b> Lunch</p>
                <p> ⌛ <b>4:30PM</b> Hacking Ends, Judging</p>
                <p> 📢 <b>5:30PM</b> Awards, Closing Ceremony</p>
                <p> 😭 <b>6:00PM</b> Event Ends</p>
                <br />
                <p> ➡️ Attend optional workshops/demos. Times will be announced at event. </p>
                <h1><a href="https://ponhack24.github.io/Resources/">Hackathon Resources
                    
                </a></h1><br />

               </div>
               <div>
               <a href="/">
                    <img src={W1} alt="Workshop 1" class="responsive"/>
                </a><br />
                <a href="/">
                    <img src={W2} alt="Workshop 2" class="responsive"/>
                </a><br />
                <a href="/">
                    <img src={W3} alt="Workshop 3" class="responsive"/>
                </a><br />
                <a href="/">
                    <img src={W4} alt="Demo/Workshop" class="responsive"/>
                </a><br />
               </div>
            </div>
         </div>
      </div>
    </div>
  );
};

export default Timeline;
