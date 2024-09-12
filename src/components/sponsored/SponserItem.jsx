import React from "react";
import "./sponsored.css";

const SponserItem = (props) => {
  return (
    <div className="slide">
      <a href={props.website} target="_blank">
      <img
        src={props.image}
        alt={props.id}
        className="slide-image"
        loading="lazy"
        title={props.id}
      />
       </a>
    </div>
    
  );
};

export default SponserItem;
