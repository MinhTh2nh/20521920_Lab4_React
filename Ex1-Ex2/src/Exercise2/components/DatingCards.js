// Card.js
import React from "react";
import { useSwipeable } from "react-swipeable";
import "./style.css";


const Card = ({ profile, onSwipe }) => {
  const handlers = useSwipeable({
    onSwipedLeft: () => onSwipe("left"),
    onSwipedRight: () => onSwipe("right"),
  });

  return (
    <div
      {...handlers}
      className="card"
      style={{
        backgroundImage: `url(${profile.imgUrl})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <h3>{profile.name}</h3>
    </div>
  );
};

export default Card;