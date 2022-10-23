import React from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDumbbell } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div>
      <div className="header">
        <FontAwesomeIcon className="icon" icon={faDumbbell}></FontAwesomeIcon>
        <h1> Our Fitness </h1>
      </div>
      <h2>Select Your Excercise</h2>
    </div>
  );
};

export default Header;
