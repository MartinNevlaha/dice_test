import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiceD6 } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

import classes from "./Navbar.module.scss";

const UserChoice = (props) => {
  return (
    <nav className={classes.navbar}>
      <div className={classes.navbar_logo}>
        <FontAwesomeIcon icon={faDiceD6}  size="2x"/>
        <h2>Dice</h2>
      </div>
      <ul className={classes.navbar_links}>
        <li>Single dice</li>
        <li>Custom dice</li>
        <li>Multiple dice</li>
      </ul>
    </nav>
  );
};

export default UserChoice;
