import React, { useState } from "react";
import { CgMenuCake } from "react-icons/cg";
import { motion, AnimatePresence } from "framer-motion";

export default function MobileMenu() {
  const [mobileOpen, setmobileOpen] = useState(false);

  return (
    <div className="block md:hidden">
      {/* 아이콘 */}
      <div onClick={() => setmobileOpen(!mobileOpen)} className="md:hidden text-3xl px-3 cursor-pointer">
        <CgMenuCake />
      </div>
      {mobileOpen && <div className="z-50 fixed left-0 top-0 bottom-0 flex w-full h-screen bg-main-dark/95 backdrop-blur-lg">asdf</div>}
    </div>
  );
}
