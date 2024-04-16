"use client";
import { CartContext, ThemeContext, UserContext } from "../_providers";
import { useContext, useState, useEffect } from "react";
import { CheckoutDetails, CheckoutAddressForm } from ".";
import { lobsterFont } from "../fonts";
import { useFormik } from "formik";
import { addressSchema } from "../_validation";
import { createOrder, createGuestOrder } from "../_utils/serverutils";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function CheckoutDisplay() {
  const { cart, setCart, setCartQuantity } = useContext(CartContext);
  const { user } = useContext(UserContext);
  const { appTheme } = useContext(ThemeContext);
  const [shipState, setShipState] = useState("");
  const [shipMethod, setShipMethod] = useState("");
  const [salesTax, setSalesTax] = useState(0);
  const [shippingCost, setShippingCost] = useState(0);
  const [subTotal, setsubTotal] = useState<number>(0);
  const [orderTotal, setOrderTotal] = useState(0);
  const router = useRouter();

  useEffect(() => {
    if (user) {
      formik.setFieldValue("email", user.email);
    }
  }, [user]);

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

  useEffect(() => {
    getOrderTotal();
  }, [shippingCost]);

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
        parseFloat(subTotal.toFixed(2)),
        parseFloat(salesTax.toFixed(2)),
        parseFloat(shippingCost.toFixed(2)),
        parseFloat(orderTotal.toFixed(2)),
        shipMethod
      );
      if (res) {
        router.push(`/order-success/guest-order/${res}`);
        setTimeout(() => {
          setCart([]);
          setCartQuantity(0);
        }, 500);
      }
      //@@TODO: set error
    }
    if (user) {
      const res = await createOrder(
        user.id,
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
        parseFloat(subTotal.toFixed(2)),
        parseFloat(salesTax.toFixed(2)),
        parseFloat(shippingCost.toFixed(2)),
        parseFloat(orderTotal.toFixed(2)),
        shipMethod
      );
      if (res !== "Error") {
        router.push(`/order-success/order/${res}`);
        setTimeout(() => {
          setCart([]);
          setCartQuantity(0);
        }, 1000);
        //@@TODO: set error
      }
    }
  };
  const setShippingMethod = (s: string) => {
    if (s === "Ground - 9.99") {
      setShipMethod("Ground");
      setShippingCost(9.99);
      formik.setFieldValue("shipMethod", 9.99);
    }
    if (s === "Air - 12.99") {
      setShipMethod("Air");
      setShippingCost(12.99);
      formik.setFieldValue("shipMethod", 12.99);
    }
    if (s === "Space - 19.99") {
      setShipMethod("Space");
      setShippingCost(19.99);
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
    onSubmit: () => {
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
          <div className="w-2/3 rounded-lg flex flex-col shadow-[0px_0px_5px_5px_rgba(0,0,0,0.5)]">
            <div
              className={`h-16 ${lobsterFont.className} text-4xl flex items-center pl-6 border-b-2 border-${appTheme}-text bg-${appTheme}-containerBg rounded-t-lg`}
            >
              Checkout
            </div>
            {!user ? (
              <div className="flex justify-center w-full pt-4 text-lg">
                <Link href="/login" className={`mr-2 text-${appTheme}-link`}>
                  Login
                </Link>
                or continue as guest
              </div>
            ) : null}
            <CheckoutAddressForm
              formik={formik}
              shipState={shipState}
              setShipState={setShipState}
              shipMethod={shipMethod}
              setShippingMethod={setShippingMethod}
              user={user}
            />
          </div>
          <CheckoutDetails
            submit={formik.handleSubmit}
            subTotal={subTotal.toFixed(2)}
            salesTax={salesTax.toFixed(2)}
            shippingCost={shippingCost.toFixed(2)}
            orderTotal={orderTotal.toFixed(2)}
          />
        </div>
      ) : (
        <div className="flex w-full justify-center text-lg">
          Your Cart is Empty
        </div>
      )}
    </>
  );
}
