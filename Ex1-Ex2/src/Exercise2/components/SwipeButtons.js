// SwipeButtons.js
import React from "react";
import "./style.css";
import { faRotateLeft, faX, faStar, faHeart, faBolt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SwipeButtons = () => {
  return (
    <div className="swipeButtons">
      <button className="icons-action">
        <FontAwesomeIcon icon={faRotateLeft} style={{ color: "orange" }} />
      </button>
      <button className="icons-action">
        <FontAwesomeIcon icon={faX} style={{ color: "red" }} />
      </button>
      <button className="icons-action">
        <FontAwesomeIcon icon={faStar} style={{ color: "blue" }} />
      </button>
      <button className="icons-action">
        <FontAwesomeIcon icon={faHeart} style={{ color: "green" }} />
      </button>
      <button className="icons-action">
        <FontAwesomeIcon icon={faBolt} style={{ color: "purple" }} />
      </button>
    </div>
  );
};

export default SwipeButtons;