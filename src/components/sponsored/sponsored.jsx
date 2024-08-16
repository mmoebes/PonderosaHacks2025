import React from "react";
//import { sponserData } from "./data";
//import SponserList from "./SponserList";
import "./sponsored.css";
import Pdf from "/images/SponsorInfo.pdf";

const Sponsors = () => {
  return (
    <div className="sponsor-section" id="Sponsors">
    <div className="sponsor-head-section">
      <h1 className="heading-tag-line1">Donate/Sponsor</h1>
      <hr className="heading-underline1" />
    </div>
    <div className="sponsor-subsection">
    <div className="sponsor-left-section">
        {/*<h2 className="sponsor-heading">
        We need your help! 
        </h2>*/}
        <h2 className="sponsor-heading">
        This event is being organized by high school students - please support us!
        </h2>
        <p>
          No donation is too small! Please consider supporting us with money, food, 
          supplies, prizes, and/or give-away items.  We have several packages available 
          with different benefits, ranging from placement of your logo on all our 
          materials to having a representative speak at our opening ceremony or giving 
          out materials about your business or organization. 
          </p>
          <p>Ponderosa Hacks is 
          fiscally sponsored by Hack Club, a 501(c)(3) nonprofit. Our registered 
          EIN is 81-2908499.
        </p>
        <h2 className="sponsor-heading">
        <a href = {Pdf} target = "_blank">Download our Sponsorship Packet</a>
         </h2>
      </div>
      </div>
  </div>
  );
};
export default Sponsors;
