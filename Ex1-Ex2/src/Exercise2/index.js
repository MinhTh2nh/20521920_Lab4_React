import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Card from "./components/DatingCards";
import SwipeButtons from "./components/SwipeButtons";
import "./style.css";

const Exercise2 = () => {
  const [profiles, setProfiles] = useState([]);
  const [swipedProfiles, setSwipedProfiles] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8081/profiles")
      .then((response) => response.json())
      .then((data) => {
        if (data.Status === "Success") {
          setProfiles(data.profiles);
        } else {
          console.error("Error fetching profiles:", data);
        }
      })
      .catch((error) => {
        console.error("Error fetching profiles:", error);
      });
  }, []);

  const onSwipe = (direction, profileId) => {
    // Add the swiped profile to the swipedProfiles state
    setSwipedProfiles([...swipedProfiles, profileId]);

    // Remove the swiped profile from the profiles state
    setProfiles((prevProfiles) => prevProfiles.filter((profile) => profile.id !== profileId));
  };

  return (
    <div className="tinder">
      <Header />
      <div className="tinder_cardContainer">
        {profiles.map((profile) => (
          <Card key={profile.id} profile={profile} onSwipe={(direction) => onSwipe(direction, profile.id)} />
        ))}
      </div>
      <SwipeButtons />
    </div>
  );
};

export default Exercise2;
