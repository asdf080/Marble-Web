import React from "react";
import { IoSearch } from "react-icons/io5";
import mainLogo from "../assets/mainLogo.png";
import inLogo from "../assets/inLogo.png";

export default function Header() {
  return (
    <div className="uppercase text-white font-bold">
      <section className="w-full flex justify-center h-[52px] bg-main-dark uppercase">
        <div className="relative max-w-7xl w-full h-ull flex justify-between items-center">
          {/* 왼쪽: 회원정보 */}
          <div className="flex h-full items-center text-ml border-x border-gray-600 p-[23px] space-x-2">
            <span className="inline-block">
              <img className="h-5" src={inLogo} alt="inLogo" />
            </span>
            <span>abc</span>
          </div>
          {/* 중앙:로고 */}
          <div className="h-full absolute top-0 left-1/2 -translate-x-1/2">
            <img src={mainLogo} alt="MarvelLogo" />
          </div>
          {/* 오른쪽:검색 */}
          <div className="h-full px-4 flex border-x border-gray-600 items-center">
            {/* 구독 버튼 */}
            <div className="h-full flex items-center space-x-2 pr-4 pb-1">
              <img className="h-[22px] inline-block" src="https://cdn.marvel.com/u/prod/marvel/images/mu/web/2021/icon-mu-shield.png" alt="img" />
              <div className="inline-block text-center">
                <p className="text-sm">Marvel Unlimited</p>
                <p className="text-xs">Subscribe</p>
              </div>
            </div>
            {/* 검색 */}
            <div className="flex items-center pl-4 h-full border-l border-gray-600">
              <IoSearch />
            </div>
          </div>
        </div>
      </section>
      <section className="border-t border-gray-600 w-full flex justify-center items-center h-10 bg-main-dark space-x-8 text-sm">
        <p>news</p>
        <p>comics</p>
        <p>characters</p>
        <p>movies</p>
        <p>tv shows</p>
        <p>games</p>
        <p>videos</p>
        <p>more</p>
      </section>
    </div>
  );
}
