import React from "react";
import "./Schedule.css";
import { FiCheckCircle } from "react-icons/fi";

const Timeline = () => {
  return (
    <div>
      <div className="sched-section">
        <h1 className="schedheading-tag-line">Schedule</h1>
        <hr className="schedheading-underline" />
        <div className="Schedule_main">
            <div className="Schedule_container">
                <p> 👋 <b>7:30AM</b> Check-in, Breakfast</p>
                <p> 📢 <b>8:00AM</b> Welcome! Opening Ceremony</p>
                <p> 👥 <b>8:45AM</b> Team Formation (Optional)</p>
                <p> 👩‍💻 <b>9:00AM</b> Hacking Begins</p>
                <p> 🍽️ <b>12:00PM</b> Lunch</p>
                <p> ⌛ <b>4:30PM</b> Hacking Ends, Judging</p>
                <p> 📢 <b>5:30PM</b> Awards, Closing Ceremony</p>
                <p> 😭 <b>6:00PM</b> Event Ends</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
