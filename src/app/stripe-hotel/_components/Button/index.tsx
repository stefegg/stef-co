import React from "react";
import { Wrapper } from "./styles";

type HotelButtonProps = {
  width?: string;
  height?: string;
  onClick: () => void;
  text: string;
  backgroundColor?: string;
  textColor?: string;
  border?: string;
  borderRadius?: string;
  disabled?: boolean;
  padding?: string;
  font?: string;
};

const Button = (props: HotelButtonProps) => {
  const {
    width,
    height,
    onClick,
    textColor,
    backgroundColor,
    disabled,
    border,
    borderRadius,
    font,
    padding,
    text,
  } = props;
  return (
    <Wrapper
      width={width}
      height={height}
      onClick={onClick}
      textColor={textColor}
      backgroundColor={backgroundColor}
      disabled={disabled}
      border={border}
      borderRadius={borderRadius}
      font={font}
      padding={padding}
    >
      {text}
    </Wrapper>
  );
};

export default Button;
