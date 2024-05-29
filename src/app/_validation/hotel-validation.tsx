import * as Yup from "yup";

export const billingSchema = Yup.object().shape({
  email: Yup.string()
    .email("Please enter a valid e-mail address")
    .required("Please enter your e-mail address"),
  firstName: Yup.string().required("Please enter your first name"),
  lastName: Yup.string().required("Please enter your last name"),
  addressOne: Yup.string().required("Please enter your street address"),
  addressCity: Yup.string().required("Please enter your city"),
  addressState: Yup.string().required("Please enter your state"),
  addressPostal: Yup.string().required("Please enter your postal code"),
});
