import React from "react";
import "./sponsored.css";
import Pdf from "/images/SponsorInfo-v2.pdf";
import { FaDownload } from "react-icons/fa";
import S1 from "/images/Coconino.png";
import S2 from "/images/Flagtag.png";
import S3 from "/images/Hackclub.png";
import S4 from "/images/NAU_logo.png";
import S5 from "/images/Oreganos.png";
import S6 from "/images/moonshot.png";

const Sponsors = () => {
  return (
    <div className="sponsor-section" id="Sponsors">
    <div className="sponsor-head-section">
      <h1 className="heading-tag-line1">Sponsors</h1>
      <hr className="heading-underline1" />
    </div>
    <div className="responsive-multi-column-grid">
       <div>
               <a href="https://www.coconinofcu.org/" id="Coconino Federal Credit Union">
                    <img src={S1} alt="Coconino Federal Credit Union" class="responsive1"/>
                </a><br />
        </div>
        <div>
               <a href="https://www.flagtagaz.com/" id="FlagTag">
                    <img src={S2} alt="FlagTag" class="responsive1"/>
                </a><br />
        </div>
        <div>
               <a href="https://hackclub.com/" id="Hack Club">
                    <img src={S3} alt="Hack Club" class="responsive1"/>
                </a><br />
        </div>
        <div>
               <a href="https://nau.edu/" id="Northern Arizona University">
                    <img src={S4} alt="Northern Arizona University" class="responsive1"/>
                </a><br />
        </div>
        <div>
               <a href="https://oreganos.com/" id="Oregano's Pizza">
                    <img src={S5} alt="Oregano's Pizza" class="responsive1"/>
                </a><br />
        </div>
        <div>
               <a href="https://www.moonshotaz.com/" id="Northern Arizona Technology & Business Incubator, Inc.">
                    <img src={S6} alt="Northern Arizona Technology & Business Incubator, Inc." class="responsive1"/>
                </a><br />
        </div>
    </div>

    <div className="sponsor-subsection">
    <div className="sponsor-left-section">
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
