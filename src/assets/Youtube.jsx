import React from "react";
import { FaYoutube } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Youtube() {
  return (
    <Link to="https://www.youtube.com/marvel">
      <div className="cursor-pointer w-6 h-6 text-gray-500 hover:text-white duration-500">
        <FaYoutube size="full" />
      </div>
    </Link>
  );
}
