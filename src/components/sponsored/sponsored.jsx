import React from "react";
//import { sponserData } from "./data";
//import SponserList from "./SponserList";
import "./sponsored.css";

const Sponsors = () => {
  return (
    <div className="sponsor-section">
    <div className="sponsor-head-section">
      <h1 className="heading-tag-line1">Sponsors</h1>
      <hr className="heading-underline1" />
    </div>
    <div className="sponsor-subsection" id="Sponsors">
    <div className="sponsor-left-section">
        {/*<h2 className="sponsor-heading">
        We need your help! 
        </h2>*/}
        <h2 className="sponsor-heading">
        This event is being organized by high school students for high school students - please support us!
        </h2>
        <p>No donation is too small! We could use help with money, food, supplies, prizes, 
        and/or give-away items. We have several packages available with different benefits, starting 
        with your logo on all our materials to having a representative speak at our opening ceremony 
        or giving out materials. By sponsoring Ponderosa Hacks, you will get your brand in front of 
        60-100 emerging developers and encourage coding + creativity into the future. Plus, marketing 
        exposure to 2000+ local Flagstaff students along with their families. This event will also be 
        promoted in social media for all BASIS high schools in Arizona and advertised nationally on 
        hackathons.hackclub.com and devpost.com. Contact us at ponderosa-hacks@gmail.com.
        </p>
        <h2 className="sponsor-heading">
        Contact us at ponderosa-hacks@gmail.com 
        </h2>
      </div>
      </div>
  </div>
  );
};
export default Sponsors;
