import * as Yup from "yup";

const VALIDATION_SCHEMA = Yup.object().shape({
  email: Yup.string()
    .email("email field must be valid email")
    .required("email is required field"),
  password: Yup.string()
    .matches(
      /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?\d)^\w{8,64}$/,
      "Your password must be at least 8 characters long, be of mixed case and also contain a digit or symbol."
    )
    .required("Password is required"),
});
export default VALIDATION_SCHEMA;
