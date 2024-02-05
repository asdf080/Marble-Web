import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import mainLogo from "../assets/mainLogo.png";
import inLogo from "../assets/inLogo.png";
import { Link } from "react-router-dom";
import NavLink from "./NavLink";
import { AnimatePresence, motion } from "framer-motion";
import ComicsCompo from "./menus/ComicsCompo";

const MENUS = [
  { text: "news", href: "#", component: ComicsCompo },
  { text: "comics", href: "/comics", component: "" },
  { text: "characters", href: "/characters", component: "" },
  { text: "movies", href: "/movies", component: "" },
  { text: "tv shows", href: "/tv shows", component: "" },
  { text: "games", href: "/games", component: "" },
  { text: "videos", href: "/videos", component: "" },
  { text: "more", href: "/more", component: "" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="uppercase text-white font-bold">
      <section className="w-full flex justify-center h-[52px] bg-main-dark uppercase">
        <div className="relative max-w-7xl w-full h-ull flex justify-between items-center">
          {/* 왼쪽: 회원정보 */}
          <div className="flex h-full items-center text-ml border-x border-gray-600 p-[23px] space-x-2">
            <span className="inline-block">
              <img className="h-5" src={inLogo} alt="inLogo" />
            </span>
            <span>080</span>
          </div>
          {/* 중앙:로고 */}
          <Link to="/">
            <div className="h-full absolute top-0 left-1/2 -translate-x-1/2">
              <img src={mainLogo} alt="MarvelLogo" />
            </div>
          </Link>
          {/* 오른쪽:검색 */}
          <div className="h-full px-4 flex border-x border-gray-600 items-center">
            {/* 구독 버튼 */}
            <div className="h-full flex items-center space-x-2 pr-4 pb-1">
              <img className="h-[22px] inline-block" src="https://cdn.marvel.com/u/prod/marvel/images/mu/web/2021/icon-mu-shield.png" alt="img" />
              <Link to="/email">
                <div className="inline-block text-center">
                  <p className="text-sm">send email for qna</p>
                  <p className="text-xs">at anytime</p>
                </div>
              </Link>
            </div>
            {/* 검색 */}
            <div className="flex items-center pl-4 h-full border-l border-gray-600">
              <IoSearch />
            </div>
          </div>
        </div>
      </section>
      <div className="relative">
        <section className="border-t border-gray-600 w-full flex justify-center items-center h-12 bg-main-dark space-x-8 text-sm">
          {MENUS.map((item, index) => (
            <NavLink key={index} href={item.href} compo={item.component} menuOpen={menuOpen} setMenuOpen={setMenuOpen}>
              {item.text}
            </NavLink>
          ))}
        </section>
        {menuOpen ? (
          <AnimatePresence>
            {/* 자식 컴포넌트들은 유일한 key를 가져야만 AnimatePresence가 제대로 동작한다. */}
            <motion.div initial={{ opacity: 0.5, y: -3 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -5 }} transition={{ duration: 0.2 }} className="absolute z-10 top-12 left-0 right-0 w-full h-40 bg-white"></motion.div>
          </AnimatePresence>
        ) : null}
      </div>
    </div>
  );
}
