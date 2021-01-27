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
        <li><NavLink to="/single-dice">Single dice</NavLink>
        </li>
        <li><NavLink to="/custom-dice">Custom dice</NavLink></li>
        <li><NavLink to="/multiple-dice">Multiple dice</NavLink></li>
      </ul>
    </nav>
  );
};

export default UserChoice;
