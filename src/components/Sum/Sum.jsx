import React from "react";

import classes from "./Sum.module.scss";

const Sum = (props) => {
  return (
    <div className={classes.sum}>
      {props.sum && (
        <p>
          {`${props.num1} + ${props.num2} + ${props.num3} + ${props.num4} = ${props.sum}`}
        </p>
      )}
    </div>
  );
};

export default Sum;
