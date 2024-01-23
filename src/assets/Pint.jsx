import React from "react";
import { BiLogoPinterest } from "react-icons/bi";
import { Link } from "react-router-dom";

export default function Pint() {
  return (
    <Link to="https://www.pinterest.co.kr/marvelofficial/">
      <div className="cursor-pointer w-6 h-6 text-gray-500 hover:text-white duration-500">
        <BiLogoPinterest size="full" />
      </div>
    </Link>
  );
}
