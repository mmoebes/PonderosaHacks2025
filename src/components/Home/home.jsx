import React, { useState, useEffect } from "react";
import "./home.css";
import { BsDiscord } from "react-icons/bs";
import { FiArrowUpRight } from "react-icons/fi";
import { IoLocationSharp } from "react-icons/io5";
import PonderosaHacksLogo from "/images/hackathon-logo.png";

const Home = () => {
  // const hackathonDate = new Date('2024-10-05');

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



      <div className="section">

       <div className="left-section">
          <div className="logo">
            <img src={PonderosaHacksLogo} alt="PonderosaHacks" className="img" />
          </div>

          <h1 className="greetings">
            Ponderosa
          </h1> 

          <h1 className="greetings">
            Hacks
          </h1>  

          <p className="home-text">
                Unlock your potential, solve challenges
          </p>

          <h3 className="college-name">
            <a href="https://enrollbasis.com/flagstaff/" target="_blank">
              <span>
                <IoLocationSharp />
              </span>
              BASIS Flagstaff
              <br />
              
            </a>
          </h3>
        </div>

        <div className="right-section">
          <h4 className="date">
          <span> October 5, 2024 </span>
          </h4>

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
              <a href="https://hackthefuture.devfolio.co/" target="_blank">
                Register Now <FiArrowUpRight />
              </a>
            </button>
            <button
              type="button"
              className="btn btn-2 hover-slide-right discord"
            >
              <a href="https://discord.gg/q9vHfn9M" target="_blank">
                Sponsor <BsDiscord />
              </a>
            </button>
          </div>
        </div>
 
      </div>
    </div>
  );
};

export default Home;
