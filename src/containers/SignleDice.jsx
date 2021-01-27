import React, { useState } from "react";

import DiceElement from "../components/Dice/DiceElement";
import Button from "../components/UI/Button/Button";
import { generateNumber } from "../utils/utility";

const Dice = (props) => {
  const [number, setNumber] = useState(null);

  const rollDiceHandler = () => {
    setNumber(generateNumber());
  };

  return (
    <React.Fragment>
      <DiceElement thrownNumber={number} />
      <div
        style={{
          margin: "0 auto",
          width: "30%",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <Button iconType="roll" clicked={rollDiceHandler}>
          Roll dice
        </Button>
      </div>
    </React.Fragment>
  );
};

export default Dice;
