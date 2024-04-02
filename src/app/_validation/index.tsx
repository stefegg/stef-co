import * as Yup from "yup";

export const addressSchema = Yup.object().shape({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  addressOne: Yup.string().required("Required"),
  addressCity: Yup.string().required("Required"),
  addressState: Yup.string().required("Required"),
  addressPostal: Yup.string().required("Required"),
});
