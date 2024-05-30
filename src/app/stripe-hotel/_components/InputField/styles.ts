import styled from "styled-components";

type HotelInputWrapperProps = {
  inputWidth?: string;
};

type HotelInputWrapProps = {
  inputWidth?: string;
  focused?: boolean;
  borderColor?: string;
  error?: string;
};

type HotelInputProps = {
  inputHeight?: string;
};

export const Wrapper = styled.div<HotelInputWrapperProps>`
  display: flex;
  flex-direction: column;
  width: ${({ inputWidth }) => (inputWidth ? inputWidth : "100%")};
`;

export const Label = styled.span`
  margin-bottom: 8px;
  color: #ffdd00;
`;

export const ErrorText = styled.span`
  color: red;
  margin-top: 2px;
  font-size: 12px;
  height: 14px;
`;

export const InputWrapper = styled.div<HotelInputWrapProps>`
  width: ${({ inputWidth }) => (inputWidth ? inputWidth : "100%")};
  border-radius: 4px;
  border: ${({ focused, borderColor, error }) => {
    if (borderColor && !focused && !error) {
      return `2px solid #33435B`;
    }
    if (focused && borderColor) {
      return `2px solid ${borderColor}`;
    }
    if (!focused && error) {
      return `2px solid #cd0909`;
    }
  }};
`;

export const Input = styled.input<HotelInputProps>`
  border-radius: 3px;
  outline: none;
  border: none;
  padding-left: 6px;
  width: calc(100% - 8px);
  height: ${({ inputHeight }) => (inputHeight ? inputHeight : "30px")};
  filter: drop-shadow(0px 0px 4px #363636);
`;
