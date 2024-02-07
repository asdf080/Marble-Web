import React, { useState } from "react";
import { CgMenuCake } from "react-icons/cg";
import { IoClose, IoSearchSharp } from "react-icons/io5";
import { FaAngleRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { MENUS } from "./Header";
import { Link } from "react-router-dom";

const MobileMenuLink = ({ menu }) => (
  <Link to={menu.href}>
    <div className="relative w-full flex justify-between items-center px-4 py-2 mt-4 cursor-pointer group text-xl">
      {/* 왼쪽 */}
      <div>{menu.text}</div>
      {/* 오른쪽 */}
      <FaAngleRight color="red" size={30} />
      <div className="absolute left-4 right-4 bottom-0 origin-left bg-white h-[1px] scale-x-0 group-hover:scale-x-100 duration-300"></div>
    </div>
  </Link>
);

export default function MobileMenu() {
  const [mobileOpen, setmobileOpen] = useState(false);

  return (
    <div className="block md:hidden">
      {/* 아이콘 */}
      <div onClick={() => setmobileOpen(!mobileOpen)} className="md:hidden text-3xl px-3 cursor-pointer">
        <CgMenuCake />
      </div>
      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ x: "-100vw" }} animate={{ x: 0 }} exit={{ x: "-100vw" }} transition={{ duration: 0.3 }} key={1} className="z-50 fixed left-0 top-0 bottom-0 flex w-full h-screen bg-main-dark/95 backdrop-blur-lg">
            <div className="w-full h-full p-4">
              {/* 헤더 영역 */}
              <div className="w-full flex justify-between text-2xl">
                <button onClick={() => setmobileOpen(!mobileOpen)}>
                  <IoClose />
                </button>
                <button>
                  <IoSearchSharp />
                </button>
              </div>
              {/* 메뉴 리스트 */}
              <div className="my-10">
                {MENUS.map((item, index) => (
                  <MobileMenuLink key={index} menu={item} />
                ))}
              </div>
              <div className="mt-16 py-8 px-4 border-y border-gray-500 ">
                <p className="mb-6 text-yellow-500">marvel insider</p>
                <div className="flex justify-between">
                  <p className="text-lg">080</p>
                  <FaAngleRight color="red" size={30} />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
