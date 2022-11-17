import React from "react";
import logo2 from "../photos/logo2.png";
import logo1 from "../photos/logo1.png";
import { AiOutlineMenu } from "react-icons/ai";
import NavBtn from "./NavBtn";
import useScrollPosition from "../hooks/useScrollPosition";

const Header = () => {
  const buttons = [
    "GIFT CARDS",
    "MENUS",
    "LOCATIONS",
    "CATERING",
    "BBQ CLUB",
    "AWARDS",
    "ABOUT",
    "BRAND FAM",
  ];
  const position = useScrollPosition();
  console.log(position);
  return (
    <div className="sticky top-0 bg-[#ffd700]   p-4 flex justify-between items-center lg:justify-center lg:flex-col lg:pt-5  lg:h-52 ">
      {/* Left Logo */}
      <div className="overflow-hidden">
        <img
          src={logo2}
          alt=""
          className={`w-52 lg:w-[18.5rem]  brightness-[0] duration-[40ms] ease-out ${
            position ? "lg:-scale-0" : "lg:scale-[100%]"
          } lg:absolute lg:-translate-x-1/2 lg:top-2`}
        />

        <img
          src={logo1}
          alt=""
          className={`top-5 duration-[70ms] ease-out  w-52 lg:w-[25.5rem]  brightness-[0]  ${
            position ? "flex scale-[100%]" : "-scale-0"
          } absolute -translate-x-1/2 top-0`}
        />
      </div>

      {/* Right Menu */}
      <div className="lg:hidden">
        <AiOutlineMenu className="w-8 h-8" />
      </div>
      <div className="hidden lg:flex pt-6 space-x-2">
        {buttons.map((button) => (
          <NavBtn title={button} key={button} />
        ))}
        <div className=""></div>
      </div>
    </div>
  );
};

export default Header;
