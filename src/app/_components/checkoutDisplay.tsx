"use client";
import { CartContext, ThemeContext, UserContext } from "../_providers";
import { useContext, useState, useEffect } from "react";
import { CheckoutDetails, Input } from ".";
import { lobsterFont } from "../fonts";
import { Dropdown } from ".";
import { useFormik } from "formik";
import { addressSchema } from "../_validation";
import { stateAbbrev, shipMethods } from "../_utils/constants";
import { createOrder, createGuestOrder } from "../_utils/serverutils";
import { useRouter } from "next/navigation";

export default function CheckoutDisplay() {
  const { cart, setCart, cartQuantity, setCartQuantity } =
    useContext(CartContext);
  const { user } = useContext(UserContext);
  const { appTheme } = useContext(ThemeContext);
  const [shipState, setShipState] = useState("");
  const [shipMethod, setShipMethod] = useState("");

  const router = useRouter();

  useEffect(() => {
    if (user) {
      formik.setFieldValue("email", user.email);
    }
  }, [user]);
  const submitOrder = async () => {
    if (!user) {
      const res = await createGuestOrder(
        formik.values.email,
        cart,
        {
          firstName: formik.values.firstName,
          lastName: formik.values.lastName,
          addressOne: formik.values.addressOne,
          addressTwo: formik.values.addressTwo,
          city: formik.values.addressCity,
          state: formik.values.addressState,
          zipCode: formik.values.addressPostal,
        },
        100,
        formik.values.shipMethod
      );
      if (res.id) {
        router.push(`/order-success/${res.id}`);
        setCart([]);
        setCartQuantity(0);
      }
      //@@TODO: set error
    }
  };
  const setShippingMethod = (s: string) => {
    if (s === "Ground - 9.99") {
      setShipMethod("Ground");
      formik.setFieldValue("shipMethod", 9.99);
    }
    if (s === "Air - 12.99") {
      setShipMethod("Air");
      formik.setFieldValue("shipMethod", 12.99);
    }
    if (s === "Space - 19.99") {
      setShipMethod("Space");
      formik.setFieldValue("shipMethod", 19.99);
    }
  };
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      addressOne: "",
      addressTwo: "",
      addressCity: "",
      addressState: "",
      addressPostal: "",
      email: "",
      shipMethod: "",
    },
    onSubmit: (values) => {
      submitOrder();
    },
    validateOnChange: true,
    validateOnBlur: true,
    validationSchema: addressSchema,
  });

  return (
    <>
      {cart.length > 0 ? (
        <div
          className={`flex flex-row border-${appTheme}-text rounded-lg h-full gap-6`}
        >
          <div className="w-2/3 rounded-lg flex flex-col shadow-[0px_0px_5px_5px_rgba(0,0,0,0.5);]">
            <div
              className={`h-16 ${lobsterFont.className} text-4xl flex items-center pl-6 border-b-2 border-${appTheme}-text bg-${appTheme}-containerBg rounded-t-lg`}
            >
              Checkout
            </div>
            {!user ? (
              <div className="flex justify-center w-full pt-4 text-lg">
                Login or continue as guest
              </div>
            ) : null}
            <form onSubmit={formik.handleSubmit}>
              <div className="flex flex-col gap-2 items-center py-6">
                <span className="flex flex-row w-5/6 gap-10 px-2">
                  <Input
                    width="1/2"
                    label="First Name"
                    onChange={formik.handleChange("firstName")}
                    onBlur={formik.handleBlur("firstName")}
                    value={formik.values.firstName}
                    error={formik.touched.firstName && formik.errors.firstName}
                  />
                  <Input
                    width="1/2"
                    label="Last Name"
                    onChange={formik.handleChange("lastName")}
                    onBlur={formik.handleBlur("lastName")}
                    value={formik.values.lastName}
                    error={formik.touched.lastName && formik.errors.lastName}
                  />
                </span>
                <span className="flex flex-col w-5/6 gap-2 px-2">
                  <Input
                    width="full"
                    label="Address"
                    placeholder="Street address or P.O. Box"
                    onChange={formik.handleChange("addressOne")}
                    onBlur={formik.handleBlur("addressOne")}
                    value={formik.values.addressOne}
                    error={
                      formik.touched.addressOne && formik.errors.addressOne
                    }
                  />
                  <Input
                    width="full"
                    label="Address Line Two"
                    placeholder="Apt, suite, unit, building, floor, etc."
                    onChange={formik.handleChange("addressTwo")}
                    value={formik.values.addressTwo}
                  />
                </span>
                <span className="flex flex-row w-5/6 px-2 justify-between">
                  <Input
                    width="1/3"
                    label="City"
                    onChange={formik.handleChange("addressCity")}
                    onBlur={formik.handleBlur("addressCity")}
                    value={formik.values.addressCity}
                    error={
                      formik.touched.addressCity && formik.errors.addressCity
                    }
                  />
                  <Dropdown
                    title="State"
                    options={stateAbbrev.map((s) => ({
                      title: s,
                      setter: () => {
                        setShipState(s);
                        formik.setFieldValue("addressState", s);
                      },
                    }))}
                    error={
                      formik.touched.addressState && formik.errors.addressState
                    }
                    stateSelect
                    value={shipState}
                  />
                  <Input
                    width="1/3"
                    label="Zip Code"
                    onChange={formik.handleChange("addressPostal")}
                    onBlur={formik.handleBlur("addressPostal")}
                    value={formik.values.addressPostal}
                    error={
                      formik.touched.addressPostal &&
                      formik.errors.addressPostal
                    }
                  />
                </span>
                <span className="flex flex-row w-5/6 px-2 justify-between">
                  {!user && (
                    <Input
                      width="1/2"
                      label="Email"
                      onChange={formik.handleChange("email")}
                      onBlur={formik.handleBlur("email")}
                      value={formik.values.email}
                      error={formik.touched.email && formik.errors.email}
                    />
                  )}
                  <Dropdown
                    title="Shipping"
                    options={shipMethods.map((s) => ({
                      title: s,
                      setter: () => {
                        setShippingMethod(s);
                      },
                    }))}
                    error={
                      formik.touched.shipMethod && formik.errors.shipMethod
                    }
                    stateSelect
                    value={shipMethod}
                  />
                </span>
              </div>
            </form>
          </div>
          <CheckoutDetails submit={formik.handleSubmit} />
        </div>
      ) : (
        "Cart Empty"
      )}
    </>
  );
}
