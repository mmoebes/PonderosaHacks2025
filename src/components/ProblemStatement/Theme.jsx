import React, { useState } from "react";
import "./Theme.css";
import { ThemeList } from "./data";

const Theme = () => {
  const [cards] = useState(ThemeList);
  const [flippedCardIndex, setFlippedCardIndex] = useState(null);

  const handleCardFlip = (index) => {
    setFlippedCardIndex(index);
  };

  return (
    <div>
      <div className="about-head-section" id="FAQs">
        <h1 className="heading-tag-line">FAQs</h1>
        <hr className="heading-underline" />
      </div>
      <div className="problem-content">
        {cards.map((card, index) => (
          <a
            key={index}
            className={`card ${flippedCardIndex === index ? "flipped" : ""}`}
            onMouseEnter={() => handleCardFlip(index)}
            onMouseLeave={() => handleCardFlip(null)}
          >
            <div
              className="front"
              style={{ backgroundImage: `url(${card.frontImage})` }}
            >
              <p>{card.frontText}</p>
            </div>
            <div className="back">
              <div>
                {card.backText.map((text, i) => (
                  <p key={i}>{text}</p>
                ))}

              </div>
            </div>
          </a>
        ))}
      </div>
      < hr className="divider-line2" />
    </div>
  );
};

export default Theme;
