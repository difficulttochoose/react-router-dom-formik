import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SignUpForm from "./components/forms/SignUpForm";
import LoginForm from "./components/forms/LoginForm";
import styles from "./App.module.scss";

function HeaderSwitch({ to, ...rest }) {
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

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <HeaderSwitch to="/" className={styles.switchBtn} />
        </Route>
        <Route path="/signup">
          <HeaderSwitch
            to="/login"
            className={styles.switchBtn}
            children={"Login"}
          />
          <SignUpForm />
        </Route>
        <Route path="/login">
          <HeaderSwitch
            to="/signup"
            className={styles.switchBtn}
            children={"Sign up"}
          />
          <LoginForm />
        </Route>
      </Switch>
    </Router>
  );
}
