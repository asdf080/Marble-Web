import React from "react";
import { TiSocialInstagram } from "react-icons/ti";
import { Link } from "react-router-dom";

export default function Insta() {
  return (
    <Link to="https://www.instagram.com/marvel/">
      <div className="cursor-pointer w-6 h-6 text-gray-500 hover:text-white duration-500">
        <TiSocialInstagram size="full" />
      </div>
    </Link>
  );
}
