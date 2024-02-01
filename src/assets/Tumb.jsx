import React from "react";
import { RiTumblrFill } from "react-icons/ri";
import { Link } from "react-router-dom";

export default function Tumb() {
  return (
    <Link to="https://marvelentertainment.tumblr.com/">
      <div className="cursor-pointer w-6 h-6 text-gray-500 hover:text-white duration-500">
        <RiTumblrFill size="100%" />
      </div>
    </Link>
  );
}
