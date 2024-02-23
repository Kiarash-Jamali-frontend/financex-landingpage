import Link from "next/link";
import React from "react";

type ButtonType = {
  children: React.ReactNode;
  classes?: string;
  link: string;
  isDark?: boolean;
};

const Button: React.FC<ButtonType> = ({ children, classes, link, isDark }) => {
  return (
    <Link
      href={link}
      className={`px-12 py-5 font-['Satoshi-Bold'] inline-flex text-lg items-center justify-center text-center ${
        isDark ? "bg-base-100 text-primary " : "bg-primary text-black "
      } ${classes}`}
    >
      {children}
    </Link>
  );
};

export default Button;
