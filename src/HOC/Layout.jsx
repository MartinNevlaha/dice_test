import React from "react";

import classes from "./Layout.module.scss";
import Navbar from "../components/Navbar/Navbar";

const Layout = (props) => {
  return (
    <div className={classes.Layout}>
      <Navbar />
      <main>{props.chidren}</main>
    </div>
  );
};

export default Layout;
