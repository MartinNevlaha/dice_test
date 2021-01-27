import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiceD6 } from "@fortawesome/free-solid-svg-icons";
import classes from "./UserChoice.module.scss";

const UserChoice = (props) => {
  return <div className={classes.dice}>
    <FontAwesomeIcon icon={faDiceD6} size="10x" color="white" />
    <h1>Please choose your game option in navbar!</h1>
  </div>;
};

export default UserChoice;
