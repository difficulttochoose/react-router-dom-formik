import React from "react";
import styles from "./RadioInput.module.scss";
import { Field } from "formik";

export default function RadioInput(props) {
  const { ...field } = props;
  return (
    <div className={styles.radioStyle}>
      <label className={styles.labelStyle}>
        <Field type="radio" name="role" value={field.value} />
        <span className={styles.valueStyle}>
          {field.name}
          <br />
          <span className={styles.radioDescription}>{field.description}</span>
        </span>
      </label>
    </div>
  );
}
