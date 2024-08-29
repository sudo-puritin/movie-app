import * as yup from "yup";

const loginSchema = yup
  .object({
    username: yup.string().min(4).max(32).required(),
    password: yup.string().min(4).max(32).required(),
  })
  .required();

export default loginSchema;
