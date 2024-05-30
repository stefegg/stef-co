import React, { FocusEvent, useState } from "react";
import { Wrapper, Label, ErrorText, Input, InputWrapper } from "./styles";

type HotelInputProps = {
  label?: string;
  error?: string;
  inputHeight?: string;
  inputWidth?: string;
  borderColor?: string;
  type?: string;
  onBlur: () => void;
  onChange: () => void;
  value: string;
};

const InputField = (props: HotelInputProps) => {
  const {
    label,
    error,
    inputHeight,
    inputWidth,
    borderColor,
    type,
    onBlur,
    onChange,
    value,
  } = props;
  const [focused, setFocused] = useState(false);
  const setBlur = (e: FocusEvent, onBlur: (e: FocusEvent) => void) => {
    onBlur(e);
    setFocused(false);
  };

  return (
    <Wrapper inputWidth={inputWidth}>
      {label && <Label>{label}</Label>}
      <InputWrapper
        borderColor={borderColor}
        error={error}
        focused={focused}
        inputWidth={inputWidth}
      >
        <Input
          autoComplete="nope"
          inputHeight={inputHeight}
          onFocus={() => setFocused(true)}
          onBlur={(e) => setBlur(e, onBlur)}
          type={type ? type : "text"}
          onChange={onChange}
          value={value}
        />
      </InputWrapper>
      <ErrorText>{error ? error : null}</ErrorText>
    </Wrapper>
  );
};

export default InputField;
