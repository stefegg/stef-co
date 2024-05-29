import styled from "styled-components";
import { StaticImageData } from "next/image";

type CartImage = {
  src: StaticImageData;
};

export const Wrapper = styled.div`
  padding: 12px 24px;
`;

export const AddWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const AddHeader = styled.h1`
  font-size: 24px;
  align-text: center;
  margin-bottom: 24px;
  font-family: Lobster;
  color: #ffdd00;
  display: flex;
  align-items: center;
  position: relatve;
`;

export const CartImage = styled.img<CartImage>`
  width: 60%;
  border-radius: 4px;
  filter: invert(100%) sepia(1%) saturate(3129%) hue-rotate(235deg)
    brightness(109%) contrast(80%);
`;

export const CartWrapper = styled.div``;

export const CartHeader = styled.h1`
  font-size: 24px;
  font-family: Lobster;
  color: #e5e5e5;
  text-shadow: 2px 2px #000;
`;

export const RoomTitle = styled.p`
  font-size: 24px;
  font-family: Lobster;
  color: #cd0909;
  text-shadow: 1px 1px #000;
  text-align: center;
`;

export const RoomPrice = styled.span`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  margin: 1em 0;
  color: #e5e5e5;
`;

export const RoomDetails = styled.p`
  font-style: italic;
  color: #ffdd00;
`;

export const RoomAmount = styled.p`
  color: #ffdd00;
  margin: 0px;
`;

export const RoomImage = styled.img`
  width: 100%;
  border-radius: 4px;
`;

export const ButtonWrapper = styled.div`
  margin-top: 24px;
`;

export const UtilIcon = styled.div`
  background-color: #3f5577;
  display: flex;
  margin: 0px;
  cursor: pointer;
  height: 24px;
  width: 24px;
  position: absolute;
  border: #ffdd00;
  font-family: Roboto Condensed;
  color: #ffdd00;
  &:hover {
    color: #cd0909;
    border: 1px solid #cd0909;
  }
  font-size: 14px;
  right: 28px;
  border-radius: 25px;
  justify-content: center;
  cursor: pointer;
  align-items: center;
`;
