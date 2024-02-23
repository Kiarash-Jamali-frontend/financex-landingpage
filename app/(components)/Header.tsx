import Link from "next/link";
import React from "react";
import ArrowRight from "../(assets)/(icons)/ArrowRight";

const Header: React.FC = () => {
  return (
    <>
      <header className="max-w-[1200px] py-11 grid grid-cols-3 mx-auto w-full">
        <div>
          <Link href={"/"} className="text-white text-2xl font-normal">
            FinanceX
          </Link>
        </div>
        <div>
          <ul className="flex justify-between items-center w-full">
            <li className="text-white/70 hover:text-white/80 transition-all duration-300">
              <Link href={"/"}>Why FinanceX</Link>
            </li>
            <li className="text-white/70 hover:text-white/80 transition-all duration-300">
              <Link href={"/"}>Features</Link>
            </li>
            <li className="text-white/70 hover:text-white/80 transition-all duration-300">
              <Link href={"/"}>Update</Link>
            </li>
            <li className="text-white/70 hover:text-white/80 transition-all duration-300">
              <Link href={"/"}>Blog</Link>
            </li>
          </ul>
        </div>
        <div className="flex justify-end">
          <Link href={"/"} className="flex items-center text-white font-['Satoshi-Medium']">
            Sign Up
            <ArrowRight classes="ms-3 w-[19px] h-[19px]" fill="#fff" />
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;
