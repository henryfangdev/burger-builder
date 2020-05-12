import React from "react";
import classes from "./Logo.module.css";
import brugerLogo from "../../assets/images/burger-logo.png";

const Logo = (props) => (
    <div className={classes.Logo}>
        <img src={brugerLogo} alt="Burger Builder" />
    </div>
);

export default Logo;
