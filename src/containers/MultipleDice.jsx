import React, { useState } from "react";

import DiceElement from "../components/Dice/DiceElement";
import Button from "../components/UI/Button/Button";
import Sum from "../components/Sum/Sum";
import { generateNumber } from "../utils/utility";

const MultipleDice = (props) => {
  const initialState = {
    dices: [
      { value: null, id: 1 },
      { value: null, id: 2 },
      { value: null, id: 3 },
      { value: null, id: 4 },
    ],
    sum: null,
  };
  const [numbers, setNumbers] = useState(initialState);

  const rollDiceHandler = () => {
    let newNumbers = { ...numbers };
    newNumbers.dices.map((number) => (number.value = generateNumber()));
    setNumbers(newNumbers);
    setNumbers({...numbers, sum: null})
  };
  const calculateHandler = () => {
    let results = [];
    numbers.dices.forEach((dice) => results.push(dice.value));
    const sum = results.reduce(
      (prevValue, currentVal) => prevValue + currentVal
    );
    setNumbers({ ...numbers, sum: sum });
  };

  return (
    <React.Fragment>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {numbers.dices.map((dice) => (
          <DiceElement thrownNumber={dice.value} key={dice.id} />
        ))}
      </div>
      <Sum
        num1={numbers.dices[0].value}
        num2={numbers.dices[1].value}
        num3={numbers.dices[2].value}
        num4={numbers.dices[3].value}
        sum={numbers.sum}
      />
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
        <Button clicked={calculateHandler} disabled={!numbers.dices[0].value}>
          Calculate
        </Button>
      </div>
    </React.Fragment>
  );
};

export default MultipleDice;
