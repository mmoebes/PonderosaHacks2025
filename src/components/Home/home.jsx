import React, { useState, useEffect } from "react";
import "./home.css";
import { BsDiscord } from "react-icons/bs";
import { FiArrowUpRight } from "react-icons/fi";
import { IoLocationSharp } from "react-icons/io5";
import PonderosaHacksLogo from "/images/hackslogo.png";

const Home = () => {

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  function calculateTimeLeft() {
    const currentTime = new Date();
    const targetDate = new Date("2024-10-04");
    targetDate.setHours(23, 59, 59); // Set the target time to 11:59 pm

    const timeDiff = targetDate.getTime() - currentTime.getTime();

    if (timeDiff <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((timeDiff / 1000 / 60) % 60);
    const seconds = Math.floor((timeDiff / 1000) % 60);

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  }

  return (
    <div className="home-container" id="Home">
          <div className="logo">
            <a href="/">
              <img src={PonderosaHacksLogo} alt="PonderosaHacks"  />
            </a>
          </div>
          <h1 className="greetings">
          1st ever High School Hackathon in Flagstaff
          </h1> 
          <h2 className="date">
          October 5, 2024 @ 8AM - 6:30PM
          </h2> 
          <h3 className="college-name">
            <a href="https://enrollbasis.com/flagstaff/" target="_blank">
              <span>
                <IoLocationSharp />
              </span>
              BASIS Flagstaff

            </a>
          </h3>
          <div className="timer">
            <div className="timer-item">
              <div className="timer-item-value">{timeLeft.days}</div>
              <div className="timer-item-label">Days</div>
            </div>
            <div className="timer-item">
              <div className="timer-item-value">{timeLeft.hours}</div>
              <div className="timer-item-label">Hours</div>
            </div>
            <div className="timer-item">
              <div className="timer-item-value">{timeLeft.minutes}</div>
              <div className="timer-item-label">Minutes</div>
            </div>
            <div className="timer-item">
              <div className="timer-item-value">{timeLeft.seconds}</div>
              <div className="timer-item-label">Seconds</div>
            </div>
          </div>

          <div className="button">
            <button
              type="button"
              className="btn btn-2 hover-slide-right register-btn"
            >
              <a href="https://docs.google.com/forms/d/e/1FAIpQLScM5wHHmPTgR4WvTNntHesTiRIf1r-5AhfV6uhxeNfPhJin2Q/viewform?usp=sf_link" target="_blank">
                Register<FiArrowUpRight />
              </a>
            </button>
            <button
              type="button"
              className="btn btn-2 hover-slide-right discord"
            >
              <a href="https://hcb.hackclub.com/donations/start/ponderosa-hacks" target="_blank">
                Donate/Sponsor 
              </a>
            </button>
          </div>
    </div>
  );
};

export default Home;
