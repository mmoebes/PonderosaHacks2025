import React from "react";
import { sponserData } from "./data";
import SponserList from "./SponserList";
import "./sponsored.css";
import Pdf from "/images/SponsorInfo-v2.pdf";
import { FaDownload } from "react-icons/fa";

const Sponsors = () => {
  return (
    <div className="sponsor-section" id="Sponsors">
    <div className="sponsor-head-section">
      <h1 className="heading-tag-line1">Sponsors</h1>
      <hr className="heading-underline1" />
    </div>
    <SponserList items={sponserData} />
    <div className="sponsor-subsection">
    <div className="sponsor-left-section">
        {/*<h2 className="sponsor-heading">
        We need your help! 
        </h2>*/}
        <h2 className="sponsor-heading"><br />
        This event is being organized by high school students - please support us!
        </h2>
        <p>
          No donation is too small! Please consider supporting us with money, food, 
          supplies, prizes, and/or give-away items.  We have several packages available 
          with different benefits, ranging from placement of your logo on all our materials, giving out materials about your business or organization, to having a representative speak at our opening ceremony. 
          </p>
          <p>Ponderosa Hacks is fiscally sponsored by&nbsp;         
            <a href="https://hackclub.com" target="_blank">
          Hack Club
          </a>
          , a 501(c)(3) nonprofit (EIN 81-2908499), so your donations are tax deductible!
        </p>
        <div className="sponsor-heading2">
        <a href = {Pdf} target = "_blank"><FaDownload />  Download our Sponsorship Packet</a>
        <br />
        <br />
         <button
              type="button3"
              className="btn3 discord3"
            >
              <a href="https://hcb.hackclub.com/donations/start/ponderosa-hacks" target="_blank">
                Donate/Sponsor 
              </a>
            </button>
            </div>
      </div>
      </div>
  </div>
  );
};
export default Sponsors;
