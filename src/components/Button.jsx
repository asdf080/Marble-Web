import React from "react";
import { Link } from "react-router-dom";

export default function Button(props) {
  return (
    <>
      <Link to={props.link}>
        <button className="uppercase bg-red-600 duration-500 hover:bg-red-700 px-10 py-3" style={{ clipPath: "polygon(10% 0, 100% 0, 100% 74%, 90% 100%, 0 100%, 0 30%)" }}>
          {props.name}
        </button>
      </Link>
    </>
  );
}
