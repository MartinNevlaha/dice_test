import React from "react";

import classes from "./Inputs.module.scss";

const Inputs = (props) => {
  return (
    <div className={classes.inputs}>
      {Object.entries(props.inputs).map((inp, i) => (
        <input
          key={i}
          value={inp[1]}
          onChange={(e) => props.change(e, inp[0])}
        />
      ))}
    </div>
  );
};

export default Inputs;
