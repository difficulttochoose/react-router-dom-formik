import React from "react";
import { Link } from "react-router-dom";
import styles from "./../../App.module.scss";

export default function HeaderSwitch({ to, ...rest }) {
  return (
    <div className={styles.headerWrapper}>
      <a href="/">
        <img src="https://www.squadhelp.com/img/logo.png" alt="logo" />
      </a>
      {to === "/" ? (
        <div>
          <Link to="/signup" children={"Sign up"} {...rest} />
          <Link to="/login" children={"Login"} {...rest} />
        </div>
      ) : (
        <Link to={to} {...rest} />
      )}
    </div>
  );
}
