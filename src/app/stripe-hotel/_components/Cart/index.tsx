import React from "react";
import {
  Wrapper,
  AddHeader,
  CartImage,
  AddWrapper,
  CartWrapper,
  CartHeader,
  RoomTitle,
  RoomPrice,
  RoomDetails,
  RoomImage,
  ButtonWrapper,
  RoomAmount,
  UtilIcon,
} from "./styles";
import cartPng from "../../_assets/cart_png.png";
import { useContext } from "react";
import Button from "../Button";
import { HotelContext } from "@/app/_providers";

const Cart = () => {
  const {
    cart,
    setCart,
    showCheckout,
    setShowCheckout,
    showCart,
    setShowCart,
  } = useContext(HotelContext);

  const clickCheckout = () => {
    if (cart !== null) {
      const total = { totalCost: getTotal() };
      const finalCart = { ...cart, ...total };
      setCart(finalCart);
      setShowCheckout(!showCheckout);
    }
  };
  const getCost = () => {
    if (cart !== null) {
      return cart.price * cart.numNights;
    } else return 0;
  };
  const getTax = () => {
    if (cart !== null) {
      return cart.price * cart.numNights * 0.1;
    } else return 0;
  };
  const getTotal = () => {
    if (cart !== null) {
      return cart.price * cart.numNights + cart.price * cart.numNights * 0.1;
    } else return 0;
  };
  return (
    <Wrapper>
      {cart !== null ? (
        <CartWrapper>
          <CartHeader>
            {showCheckout ? "Your order..." : "Your selection..."}
          </CartHeader>
          <RoomImage src={cart.image} />
          <RoomTitle>{cart.title}</RoomTitle>
          <RoomDetails>
            {cart.startDate} - {cart.endDate}
          </RoomDetails>
          <RoomPrice>
            <span>Room Total for {cart.numNights} nights:</span>
            <RoomAmount>${getCost().toFixed(2)}</RoomAmount>
          </RoomPrice>
          <RoomPrice>
            <span>Taxes / Fees:</span>{" "}
            <RoomAmount>${getTax().toFixed(2)}</RoomAmount>
          </RoomPrice>
          <RoomPrice>
            <span>Total:</span>{" "}
            <RoomAmount>${getTotal().toFixed(2)}</RoomAmount>
          </RoomPrice>
          <ButtonWrapper>
            <Button
              width={"100%"}
              text={!showCheckout ? "Checkout" : "Modify Order"}
              backgroundColor={!showCheckout ? "#03c51d" : "#ffdd00"}
              textColor={!showCheckout ? "#E5E5E5" : "#33435B"}
              onClick={() => clickCheckout()}
            />
          </ButtonWrapper>
        </CartWrapper>
      ) : (
        <AddWrapper>
          <AddHeader>
            Your cart is empty
            <UtilIcon onClick={() => setShowCart(false)}>X</UtilIcon>
          </AddHeader>
          <CartImage src={cartPng} />
        </AddWrapper>
      )}
    </Wrapper>
  );
};

export default Cart;
