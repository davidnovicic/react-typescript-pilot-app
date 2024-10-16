import React from "react";
import logo from "../Assets/randomlogo.png";
import Button from "./Button";

type Props = {};

function Header({}: Props) {
  return (
    <div className="flex flex-wrap sm:flex-row gap-5 items-center justify-between drop-shadow-md bg-gradient-to-r from-myBlue to bg-myPink px-5 py-5 md:py-2 text-white">
      <img
        className="w-[70px] drop-shadow-md cursor-pointer"
        src={logo}
        alt="logo"
      />
      <div className="flex">
        <Button text="Add New ListBoard" secondary />
      </div>
    </div>
  );
}

export default Header;
