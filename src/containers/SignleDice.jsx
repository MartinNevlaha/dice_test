import React, { useState } from "react";

import DiceElement from "../components/Dice/DiceElement";
import Button from "../components/UI/Button/Button";
import {generateNumber} from "../utils/utility";

const Dice = (props) => {
  const [number, setNumber] = useState(null);

  
  const clickHandler = () => {
    setNumber(generateNumber());
  };

  return (
    <React.Fragment>
      <DiceElement thrownNumber={number} />
      <Button iconType="roll" clicked={clickHandler}>
        Roll dice
      </Button>
    </React.Fragment>
  );
};

export default Dice;
