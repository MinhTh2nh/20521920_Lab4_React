// Header.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faComment } from "@fortawesome/free-solid-svg-icons";
import "./style.css"; 

function Header() {
  return (
    <div className="header">
      <button className="header__iconButton">
        <FontAwesomeIcon icon={faUser} />
      </button>
      <img
        className="header__logo"
        src="https://img.icons8.com/?size=256&id=hp54uGDlrEZB&format=png"
        alt="header"
      />
      <button className="header__iconButton">
        <FontAwesomeIcon icon={faComment} />
      </button>
    </div>
  );
}

export default Header;