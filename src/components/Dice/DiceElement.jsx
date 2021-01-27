import React from "react";
import classes from "./DiceElement.module.scss";

import dice_one from "../../assets/img/dice-1.png";
import dice_two from "../../assets/img/dice-2.png";
import dice_three from "../../assets/img/dice-3.png";
import dice_four from "../../assets/img/dice-4.png";
import dice_five from "../../assets/img/dice-5.png";
import dice_six from "../../assets/img/dice-6.png";
import dice_blank from "../../assets/img/dice-blank.png";

const DiceElement = (props) => {
  let number = dice_blank;
  if (props.type !== "custom") {
    switch (props.thrownNumber) {
      case 1:
        number = dice_one;
        break;
      case 2:
        number = dice_two;
        break;
      case 3:
        number = dice_three;
        break;
      case 4:
        number = dice_four;
        break;
      case 5:
        number = dice_five;
        break;
      case 6:
        number = dice_six;
        break;
      default:
        number = dice_blank;
    }
  }

  return (
    <div className={classes.dice}>
      {props.type === "custom" && <p className={classes.dice_custom_text}>{props.customText}</p>}
      <img src={number} alt="dice" />
    </div>
  );
};

export default DiceElement;
