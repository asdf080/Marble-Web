import React from "react";
import { CgMenuCake } from "react-icons/cg";

export default function MobileMenu() {
  return (
    <div className="block md:hidden">
      <div className="md:hidden text-3xl px-3 cursor-pointer">
        <CgMenuCake />
      </div>
      MobileMenu
    </div>
  );
}
