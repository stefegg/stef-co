import styled from "styled-components";
import { StaticImageData } from "next/image";

type UtilIconProps = {
  cart?: boolean;
  src: StaticImageData;
};

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  height: 110px;
  padding: 0px 32px;
  align-items: flex-start;
  justify-content: center;
  overflow: hidden;
  background: #363636;
  position: relative;
`;

export const HeaderOne = styled.h1`
  margin: 0px;
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 12px;
  cursor: pointer;
  color: #e5e5e5;
  text-shadow: 1px 1px #000;
`;

export const HeaderPrimary = styled.span`
  font-size: 36px;
  color: #cd0909;
  font-family: Lobster;
  margin-right: 8px;
`;

export const SubHeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const SubHeader = styled.p`
  margin: 0px;
  font-style: italic;
  color: #ffdd00;
`;

export const UtilWrapper = styled.div`
  position: fixed;
  right: 36px;
  top: 48px;
`;

export const UtilIcon = styled.img<UtilIconProps>`
  margin: 0px;
  cursor: pointer;
  height: 24px;
  width: 24px;
  margin-right: 8px;
  filter: invert(83%) sepia(34%) saturate(1647%) hue-rotate(359deg)
    brightness(103%) contrast(104%);
  &:last-child {
    filter: ${({ cart }) =>
      cart
        ? `invert(47%) sepia(23%) saturate(3776%) hue-rotate(94deg)
      brightness(105%) contrast(98%)`
        : `invert(83%) sepia(34%) saturate(1647%) hue-rotate(359deg)
      brightness(103%) contrast(104%)`};
  }
  &:hover {
    filter: invert(47%) sepia(23%) saturate(3776%) hue-rotate(94deg)
      brightness(105%) contrast(98%);
  }
  &:first-child {
    margin-right: 24px;
  }
`;

export const Notification = styled.div`
  height: 12px;
  width: 12px;
  background: red;
  position: absolute;
  right: 4px;
  top: 10px;
  border-radius: 25px;
  color: #e5e5e5;
`;
