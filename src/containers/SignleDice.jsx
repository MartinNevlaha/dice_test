import React, {useState} from 'react';

import DiceElement from "../components/Dice/DiceElement";
import Button from "../components/UI/Button/Button";

const Dice = props => {
  const [number, setNumber] = useState(null)

  return (
    <React.Fragment>
      <DiceElement thrownNumber={1}/>
      <Button iconType="roll" >Roll dice</Button>
    </React.Fragment>
  )
}

export default Dice;