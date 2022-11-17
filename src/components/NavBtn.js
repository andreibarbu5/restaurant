import React from "react";

const NavBtn = ({ title }) => {
  return (
    <div className="relative text-[13.9px] overflow-hidden group   ">
      <p className="relative z-10 group-hover:text-[#ffd700] duration-200 ease-out px-1.5 py-1">
        {title}
      </p>
      <div className="absolute bg-black  h-full w-full top-0  -translate-x-[110%] group-hover:translate-x-[0%]  duration-200 ease-out "></div>
    </div>
  );
};

export default NavBtn;
