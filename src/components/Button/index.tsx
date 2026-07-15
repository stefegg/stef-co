import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

const Button = ({
  children,
  type = "button",
  className = "",
  ...rest
}: ButtonProps) => (
  <button
    type={type}
    className={`rounded-lg border border-divider px-3 py-1 text-link cursor-pointer hover:text-secondary disabled:cursor-not-allowed disabled:opacity-40 ${className}`}
    {...rest}
  >
    {children}
  </button>
);

export default Button;
