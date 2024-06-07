"use client";
import Image from "next/image";
import { useContext } from "react";
import { ThemeContext } from "../../_providers";

type YearSalesProps = {
  icon: string;
  iconStyle: {
    filter: string | undefined;
  };
  year: string;
  growth: string;
  color: string;
  dollarAmount: {
    currency: string;
    number: string;
    amount: string;
  };
};

export default function YearSales(props: YearSalesProps) {
  const { appTheme } = useContext(ThemeContext);
  const { icon, iconStyle, year, growth, color, dollarAmount } = props;
  const { currency, number, amount } = dollarAmount;
  return (
    <div
      className={`text-${appTheme}-${color} min-h-full text-sm sm:text-xl border-4 rounded-lg border-${appTheme}-${color} px-2 flex flex-col w-1/3 justify-evenly font-light`}
    >
      {year} YTD Net Sales:
      <div className="flex flex-row">
        <div className="flex flex-col">
          <div className="text-3xl md:text-6xl xl:text-7xl">
            {currency}
            {number}
          </div>
          <div className="text-base md:text-xl xl:text-4xl">{amount}</div>
        </div>
      </div>
      <div className="text-sm xl:text-lg flex flex-row gap font-light">
        <div>{growth}</div>
        <Image
          src={icon}
          alt="arrow"
          height={20}
          width={20}
          style={iconStyle}
        />
      </div>
    </div>
  );
}
