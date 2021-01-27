import classes from "*.module.css";
import React from "react";

import "./Layout.module.scss";

const Layout = (props) => {
  return (
    <div className={classes.layout}>
      <main>{props.chidren}</main>
    </div>
  );
};

export default Layout;
