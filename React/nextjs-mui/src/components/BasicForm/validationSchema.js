import * as yup from "yup";

export const schema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid").required("Email is required"),
  age: yup.number().positive().integer().required("Age is required"),
  role: yup.string().required("Role is required"),
});
