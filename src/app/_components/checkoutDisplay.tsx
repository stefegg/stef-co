"use client";
import { CartContext, ThemeContext } from "../_providers";
import { useContext, useState, useEffect } from "react";
import { Button, Input } from ".";
import { lobsterFont } from "../fonts";
import { currencyGen } from "../_utils";
import { Dropdown } from ".";
import { useFormik } from "formik";
import { addressSchema } from "../_validation";

export default function CheckoutDisplay() {
  const { cart, setCart, cartQuantity, setCartQuantity } =
    useContext(CartContext);
  const { appTheme } = useContext(ThemeContext);
  const [shippingCost, setShippingCost] = useState(10);
  const [subTotal, setsubTotal] = useState(0);
  const [salesTax, setSalesTax] = useState(0);
  const [orderTotal, setOrderTotal] = useState(0);

  const getOrderTotal = () => {
    let sum = 0;
    cart.map((c) => (sum = c.price * c.quantity + sum));
    setsubTotal(sum);
    let salesTax = 0;
    cart.map((c) => (salesTax = c.price * c.quantity * 0.06625 + salesTax));
    setSalesTax(salesTax);
    let orderTotal = sum + salesTax + shippingCost;
    setOrderTotal(orderTotal);
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
    },
    onSubmit: (values) => {
      console.log(values, "submit--------");
    },
    validateOnChange: false,
    validateOnBlur: true,
    validationSchema: addressSchema,
  });

  useEffect(() => {
    getOrderTotal();
  }, []);

  return (
    <>
      {cart.length > 0 ? (
        <div
          className={`flex flex-row border-${appTheme}-text rounded-lg h-full gap-6`}
        >
          <div className="w-3/4 rounded-lg flex flex-col shadow-[0px_0px_10px_5px_rgba(31,46,71,1);]">
            <div
              className={`h-16 ${lobsterFont.className} text-4xl flex items-center pl-6 border-b-2 border-${appTheme}-text bg-${appTheme}-containerBg rounded-t-lg`}
            >
              Checkout
            </div>
            <form onSubmit={formik.handleSubmit}>
              <div className="p-4 flex flex-col gap-2">
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
                <span className="flex flex-col w-5/6 gap-4 px-2">
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
                    options={[
                      { title: "NJ", setter: () => console.log("Nj") },
                      { title: "NY", setter: () => console.log("NY") },
                    ]}
                    stateSelect
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
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
          <div
            className={`w-1/4 bg-${appTheme}-bodyBg h-full flex flex-col rounded-lg shadow-[0px_0px_10px_5px_rgba(31,46,71,1)]`}
          >
            <div
              className={`flex border-b-2 border-${appTheme}-text rounded-t-lg h-16 items-center text-4xl bg-${appTheme}-containerBg ${lobsterFont.className} pl-6 py-4 `}
            >
              Your Order
            </div>
            <div className="h-2/3">
              <div className={`pl-6 pt-2 text-lg h-10 flex items-center`}>
                {`Order Details (${cartQuantity} item${
                  cartQuantity > 1 ? "s" : ""
                })`}
              </div>
              <div className="flex flex-col overflow-y-scroll min-h-72 pt-2 pb-4 gap-2">
                {cart.map((c, idx) => (
                  <div
                    className={`px-6 text-base flex min-h-[10%] flex-row justify-between items-center w-full`}
                    key={idx}
                  >
                    <div>{c.name}</div>
                    <div className=" min-w-[24px]">x {c.quantity}</div>
                  </div>
                ))}
              </div>
            </div>
            <div
              className={`flex flex-col h-72 py-4 border-t-2 border-${appTheme}-text bg-${appTheme}-containerBg w-full gap-2 rounded-b-lg justify-center`}
            >
              <div className="flex flex-row pl-6 text-lg justify-between pr-4">
                <div>Subtotal:</div>
                <div>
                  {currencyGen(cart[0].currency)}
                  {subTotal.toFixed(2)}
                </div>
              </div>
              <div className="flex flex-row pl-6 text-lg justify-between pr-4">
                <div>Shipping & Handling:</div>
                <div>
                  {currencyGen(cart[0].currency)}
                  {shippingCost.toFixed(2)}
                </div>
              </div>
              <div className="flex flex-row pl-6 text-lg justify-between pr-4">
                <div>Tax:</div>
                <div>
                  {currencyGen(cart[0].currency)}
                  {salesTax.toFixed(2)}
                </div>
              </div>
              <div
                className={`${lobsterFont.className} text-2xl pl-6  w-full flex flex-row justify-between pr-4`}
              >
                <div>Order Total:</div>
                <div>
                  {currencyGen(cart[0].currency)}

                  {orderTotal.toFixed(2)}
                </div>
              </div>
              <div className="flex flex-row pl-6 text-xl justify-between pr-4">
                <Button
                  buttonText="Submit Order"
                  size="lg"
                  styleType="secondary"
                  onClick={() => console.log("click")}
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        "Cart Empty"
      )}
    </>
  );
}
