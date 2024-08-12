import React from "react";
import "./Venue.css";
import { FaStreetView } from "react-icons/fa6";

const Venue = () => {
  return (
    <div className="venue-section" id="Venue">
      <div className="venue-head-section">
        <h1 className="heading-tag-line2">Event Venue</h1>
        <hr className="heading-underline2" />
      </div>
      <div className="venue-container">
        <div className="venue-subheading-right">
          <iframe
            title="address"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3259.9506988293106!2d-111.63657928763261!3d35.20769697263003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872d8f30946acd67%3A0x93bd67bac55391fe!2sBASIS%20Flagstaff!5e0!3m2!1sen!2sus!4v1723271195051!5m2!1sen!2sus"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="venue-subsection">
          <div className="venue-subheading-left">
            <h3 className="venue-date">October 5, 2024</h3>
            <h4 className="venue-date">8AM - 6:30PM</h4>
            <h4 className="venue-date">. . .</h4>
            <h3 className="venue-address">
              BASIS Flagstaff School
            </h3>
          <div className="venue-location">
              <a href="https://www.google.com/maps/@22.5105556,88.4151563,3a,90y,204.34h,103.93t/data=!3m8!1e1!3m6!1sAF1QipPanWJHn1MPsns8prP_jOR0fxyPUZ1nQ47tRqw1!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipPanWJHn1MPsns8prP_jOR0fxyPUZ1nQ47tRqw1%3Dw203-h100-k-no-pi-0-ya154-ro-0-fo100!7i8704!8i4352?hl=en-US&entry=ttu"
                rel="noopener noreferrer"
                target="_blank"
                >
              </a>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Venue;
