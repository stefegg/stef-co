import * as Yup from "yup";

export const addressSchema = Yup.object().shape({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  addressOne: Yup.string().required("Required"),
  addressCity: Yup.string().required("Required"),
  addressState: Yup.string().required("Required"),
  addressPostal: Yup.string().required("Required"),
  shipMethod: Yup.number().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

export const loginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Required"),
});

export const registerSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .required("Required")
    .min(8, "Your password is too short"),
  confirmPassword: Yup.string()
    .required("Please retype your password")
    .oneOf([Yup.ref("password")], "Your passwords do not match."),
});

export const searchSchema = Yup.object().shape({
  search: Yup.string()
    .required("Please enter your order number")
    .min(36, "Invalid Order Number")
    .max(36, "Invalid Order Number"),
});

export const productSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  price: Yup.number().min(0.1, "Required").required("Required"),
  description: Yup.string().required("Required"),
  stock: Yup.number().min(1, "Required").required("Required"),
  imageUrl: Yup.string().required("Required"),
  categoryId: Yup.number().min(1, "Required").required("Required"),
  specs: Yup.array().of(Yup.string()).min(1, "Required").required("Required"),
});
