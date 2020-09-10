import React from "react";
import classNames from "classnames";
import styles from "./RadioInput.module.scss";
import { Field } from "formik";

export default function RadioInput(props) {
  const { errors, ...label } = props;
  const classes = classNames(styles.radioStyle, {
    [styles.invalidInput]: "role" in errors,
  });
  return (
    <div className={classes}>
      <label className={styles.labelStyle}>
        <Field type="radio" name="role" value={label.value} />
        <span className={styles.valueStyle}>
          {label.name}
          <br />
          <span className={styles.radioDescription}>{label.description}</span>
        </span>
      </label>
    </div>
  );
}
