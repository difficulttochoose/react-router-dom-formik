import React from "react";
import classNames from "classnames";
import { Field, ErrorMessage } from "formik";
import styles from "./TextInput.module.scss";

export default function TextInput(props) {
  const {
    field: { name, type, placeholder },
    errors,
    touched,
  } = props;
  const classes = classNames(styles.input, {
    [styles.validInput]: !(name in errors) && name in touched,
    [styles.invalidInput]: name in errors && name in touched,
  });
  return (
    <>
      <Field
        name={name}
        type={type}
        placeholder={placeholder}
        className={classes}
      />
      <ErrorMessage
        name={name}
        render={(msg) => <div className={styles.errorMessage}>{msg}</div>}
      />
    </>
  );
}
