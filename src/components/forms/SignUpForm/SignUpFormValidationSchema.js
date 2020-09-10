import * as Yup from "yup";

const NAME_SCHEMA = Yup.string()
  .trim()
  .matches(
    /(?=^[A-Z][a-z]*(?:-[A-Z][a-z]*)?$)[A-z-]{1,64}/,
    "Name must be valid name"
  )
  .required();

const VALIDATION_SCHEMA = Yup.object().shape({
  firstName: NAME_SCHEMA,
  lastName: NAME_SCHEMA,
  displayName: Yup.string().required("display name is required field"),
  email: Yup.string()
    .email("email field must be valid email")
    .required("email is required field"),
  password: Yup.string()
    .matches(
      /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?\d)^\w{8,64}$/,
      "Your password must be at least 8 characters long, be of mixed case and also contain a digit or symbol."
    )
    .required("Password is required"),
  passwordConfirmation: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm password is required field"),
  role: Yup.string()
    .oneOf(["buyer", "seller"])
    .required("A radio option is required"),
});
export default VALIDATION_SCHEMA;
