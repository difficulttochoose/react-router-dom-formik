import React from "react";
import { Formik, Form } from "formik";
import VALIDATION_SCHEMA from "./LoginFormValidationSchema";
import styles from "./LoginForm.module.scss";
import classNames from "classnames";
import TextInput from "../../inputs/TextInput";

const fields = [
  { name: "email", type: "text", placeholder: "Email address" },
  { name: "password", type: "password", placeholder: "Password" },
];

export default function LoginForm() {
  const initialValues = {
    email: "",
    password: "",
  };
  const handleFormikSubmit = (values, formikBag) => {
    formikBag.resetForm();
  };
  return (
    <div className={styles.form}>
      <h1 className={classNames(styles.formHeader, styles.loginHeader)}>
        LOGIN TO YOUR ACCOUNT
      </h1>
      <Formik
        initialValues={initialValues}
        onSubmit={handleFormikSubmit}
        validationSchema={VALIDATION_SCHEMA}
      >
        {(props) => {
          const { errors, touched } = props;
          return (
            <Form>
              {fields.map((field) => (
                <div className={styles.inputField} key={`${field.name}`}>
                  <TextInput field={field} errors={errors} touched={touched} />
                </div>
              ))}
              <button type="submit" className={styles.accountBtn}>
                login
              </button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}
