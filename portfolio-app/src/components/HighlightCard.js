import HighlightPopup from "./HighlightPopup";
import { useState } from "react";

export default function HighlightCard({ imgSrc, title, description, popupContent }) {
  const [buttonPopup, setButtonPopup] = useState(false);

  return (
    <div className="HighlightCard">
      <img className="highlightImg" src={imgSrc} alt={title} />
      <div className="highlightContent">
        <h1>{title}</h1>
        <p>{description}</p>
        <button className="seeMoreBtn" onClick={() => setButtonPopup(true)}>See More</button>

        <HighlightPopup trigger={buttonPopup} setTrigger={setButtonPopup}>
          {popupContent}
        </HighlightPopup>
      </div>
    </div>
  );
}