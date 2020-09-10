import React from "react";
import { Formik, Form } from "formik";
import VALIDATION_SCHEMA from "./SignUpFormValidationSchema";
import styles from "./SignUpForm.module.scss";
import TextInput from "../../inputs/TextInput";
import RadioInput from "../../inputs/RadioInput";

const textFields = [
  { name: "firstName", type: "text", placeholder: "First name" },
  { name: "lastName", type: "text", placeholder: "Last name" },
  { name: "displayName", type: "text", placeholder: "Display name" },
  { name: "email", type: "text", placeholder: "Email address" },
  { name: "password", type: "password", placeholder: "Password" },
  {
    name: "passwordConfirmation",
    type: "password",
    placeholder: "Password confirmation",
  },
];

const radioLabels = [
  {
    value: "buyer",
    name: "Join As a Buyer",
    description:
      "I am looking for a Name, Logo or Tagline for my business, brand or product.",
  },
  {
    value: "seller",
    name: "Join As a Creative or Marketplace Seller",
    description:
      "I plan to submit name ideas, Logo designs or sell names in Domain Marketplace.",
  },
];

export default function SignUpForm(props) {
  const initialValues = {
    firstName: "",
    lastName: "",
    displayName: "",
    email: "",
    password: "",
    passwordConfirmation: "",
  };

  const handleFormikSubmit = (values, formikBag) => {
    formikBag.resetForm();
  };

  return (
    <div className={styles.form}>
      <h1 className={styles.formHeader}>
        CREATE AN ACCOUNT
        <p className={styles.subHeader}>
          We always keep your name and email address private.
        </p>
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
              <div className={styles.inputsWrapper}>
                {textFields.map((field) => (
                  <div className={styles.inputField} key={`${field.name}`}>
                    <TextInput
                      field={field}
                      errors={errors}
                      touched={touched}
                    />
                  </div>
                ))}
              </div>
              <div>
                {radioLabels.map((label) => (
                  <RadioInput
                    key={`${label.name}${label.description}`}
                    errors={errors}
                    {...label}
                  />
                ))}
              </div>
              <button type="submit" className={styles.accountBtn}>
                create account
              </button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}
