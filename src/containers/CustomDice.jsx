import React, { useState } from "react";

import DiceElement from "../components/Dice/DiceElement";
import Button from "../components/UI/Button/Button";
import Inputs from "../components/Inputs/Inputs";
import { generateNumber } from "../utils/utility";

const CustomDice = (props) => {
  const [number, setNumber] = useState(null);
  const initialState = {
    input1: "",
    input2: "",
    input3: "",
    input4: "",
    input5: "",
    input6: "",
  };

  const [inputs, setInputs] = useState(initialState);
  const rollDiceHandler = () => {
    setNumber(generateNumber());
  };

  const inputHandler = (e, key) => {
    setInputs({...inputs, [key]: e.target.value})
  };

  return (
    <div>
      <DiceElement />
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
      <Inputs inputs={inputs} change={inputHandler} />
    </div>
  );
};

export default CustomDice;
