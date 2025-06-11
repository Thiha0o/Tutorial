import * as yup from "yup";

export const schema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid").required("Email is required"),
  // phoneNumber: yup
  //   .number()
  //   .positive()
  //   .integer()
  //   .required("Phone Number is required"),
  phoneNumber: yup
    .string()
    .matches(/^(?:\+?95|0)?9\d{7,9}$/, {
      message:
        "Phone number must be a valid Myanmar number (e.g. +959xxxxxxxxx or 09xxxxxxxxx)",
      excludeEmptyString: true,
    })
    .required("Phone Number is required"),
  address: yup.string().required("Address is required"),
  city: yup.string().required("City is required"),
  township: yup.string().required("Townships is required"),
});
