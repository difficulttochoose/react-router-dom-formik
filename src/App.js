import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SignUpForm from "./components/forms/SignUpForm";
import LoginForm from "./components/forms/LoginForm";
import styles from "./App.module.css";

function HeaderLogoBtn({ to, ...rest }) {
  return (
    <div className={styles.headerWrapper}>
      <a href="https://www.squadhelp.com/">
        <img
          src="https://www.squadhelp.com/img/logo.png"
          alt="logo"
          className={styles.logoStyle}
        />
      </a>
      <Link to={to} {...rest} />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/signup">
          <HeaderLogoBtn
            to="/login"
            className={styles.switchBtn}
            children={"Login"}
          />
          <SignUpForm />
        </Route>
        <Route path="/login">
          <HeaderLogoBtn
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
