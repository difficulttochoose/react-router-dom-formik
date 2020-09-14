import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignUpForm from "./components/forms/SignUpForm";
import LoginForm from "./components/forms/LoginForm";
import styles from "./App.module.scss";
import HeaderSwitch from "./components/HeaderSwitch";

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
