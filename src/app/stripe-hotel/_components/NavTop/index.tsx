import React from "react";
import {
  Wrapper,
  HeaderOne,
  SubHeader,
  HeaderPrimary,
  SubHeaderWrapper,
  UtilIcon,
  UtilWrapper,
} from "./styles";
import account from "@/public/icons/account.png";
import cartPng from "@/public/cart_png.png";
import { useContext } from "react";
import { HotelContext } from "@/app/_providers";

const NavTop = () => {
  const { setShowCheckout, setShowCart, cart } = useContext(HotelContext);
  const clickLogo = () => {
    setShowCheckout(false);
  };
  return (
    <Wrapper>
      <HeaderOne onClick={() => clickLogo()}>
        <HeaderPrimary>Stripe</HeaderPrimary> H O T E L
        <UtilWrapper>
          <UtilIcon src={account} />
          <UtilIcon
            cart={cart ? true : false}
            src={cartPng}
            onClick={() => setShowCart(true)}
          />
        </UtilWrapper>
      </HeaderOne>

      <SubHeaderWrapper>
        <SubHeader>A Better Hotel Experience</SubHeader>
      </SubHeaderWrapper>
    </Wrapper>
  );
};

export default NavTop;
