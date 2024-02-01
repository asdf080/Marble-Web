import React from "react";
import { PiSnapchatLogoFill } from "react-icons/pi";
import { Link } from "react-router-dom";

export default function Snap() {
  return (
    <Link to="https://www.snapchat.com/add/marvelhq">
      <div className="cursor-pointer w-6 h-6 text-gray-500 hover:text-white duration-500">
        <PiSnapchatLogoFill size="100%" />
      </div>
    </Link>
  );
}
