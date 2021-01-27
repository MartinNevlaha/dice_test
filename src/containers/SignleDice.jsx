import React, { useState } from "react";

import DiceElement from "../components/Dice/DiceElement";
import Button from "../components/UI/Button/Button";
import {generateNumber} from "../utils/utility";

const Dice = (props) => {
  const [number, setNumber] = useState(null);

  
  const rollDiceHandler = () => {
    setNumber(generateNumber());
  };

  return (
    <React.Fragment>
      <DiceElement thrownNumber={number} />
      <Button iconType="roll" clicked={rollDiceHandler}>
        Roll dice
      </Button>
    </React.Fragment>
  );
};

export default Dice;
