import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

const Button = ({ children, type = "button", ...rest }: ButtonProps) => (
  <button type={type} {...rest}>
    {children}
  </button>
);

export default Button;
