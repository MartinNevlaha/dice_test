import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiceD6, faCalculator } from "@fortawesome/free-solid-svg-icons";

import classes from "./Button.module.scss";

const Button = (props) => {
  let style = [classes.btn];
  if (props.disabled) {
    style.push(classes.disabled);
  }
  return (
    <div>
      <button className={style.join(" ")} onClick={props.clicked}>
        <FontAwesomeIcon
          size="2x"
          icon={props.iconType === "roll" ? faDiceD6 : faCalculator}
          className={classes.btn_icon}
        />
        {props.children}
      </button>
    </div>
  );
};

export default Button;
