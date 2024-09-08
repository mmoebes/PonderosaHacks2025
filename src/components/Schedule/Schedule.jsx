import React from "react";
import "./Schedule.css";

const Timeline = () => {
  return (
    <div>
      <div className="about-head-section">
        <h1 className="heading-tag-line">Schedule</h1>
        <hr className="heading-underline" />
      </div>
      <div className="Schedule_main" id="Schedule">
        <div className="Schedule_container">
          <ul>
            <li>
              <h3 className="Schedule_heading">8:30AM Registration</h3>
              <p>
                Don't forget your school ID, laptop, power cord, chargers, etc.
              </p>
              {/* <a href="#">Read More &gt;</a> */}
              <span className="Schedule_date">Saturday, October 5th</span>
              <span className="circle"></span>
            </li>
            <li>
              <h3 className="Schedule_heading">First Day</h3>
              <p>
                text
              </p>
              {/* <a href="#">Read More &gt;</a> */}
              {/* <span className="Schedule_date">29 July 2023</span> */}
              <span className="circle"></span>
            </li>
            <li>
              <h3 className="Schedule_heading">Second Day</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit
                excepturi accusamus minus totam Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Fugit excepturi accusamus minus
                totam
              </p>
              {/* <a href="#">Read More &gt;</a> */}
              <span className="Schedule_date">30 July 2023</span>
              <span className="circle"></span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
