import React from "react";
import { Link } from "react-router-dom";

export default function NavLink({ children, href, compo, menuOpen, setMenuOpen }) {
  return (
    <div onMouseEnter={() => setMenuOpen(true)} onMouseLeave={() => setMenuOpen(false)} className="group">
      <Link to={href} className="relative">
        {children}
        <span className="absolute -bottom-[14px] -left-1 -right-1 h-[2px] bg-red-500 duration-300 ease-out origin-left scale-x-0 group-hover:scale-x-100"></span>
      </Link>
    </div>
  );
}
