import React from "react";
import { Link } from "react-router-dom";
import TitleRotate from "../components/TitleRotate";

export default function TitleImgBox({ imgUrl }) {
  return (
    <div style={{ clipPath: "polygon(0 0, 100% 0, 100% 93%, 0% 100%)" }} className="relative w-full h-[600px] flex justify-end bg-[#151515]">
      {/* 오른쪽 이미지 */}
      <div style={{ clipPath: "polygon(0 0, 100% 0, 100% 93%, 18% 100%)" }} className="w-[55%] h-full">
        <img src={imgUrl} alt="img" className="w-full h-full object-cover object-top" />
      </div>
      {/* 절대포지션 부모요소 전체 선택 */}
      <div className="absolute top-0 left-0 w-full h-full flex justify-center text-white">
        <div className="max-w-7xl w-full h-full flex flex-col justify-center">
          <div className="space-y-2 mb-6">
            {/* 로고 */}
            <img src="https://cdn.marvel.com/content/1x/mulogo_lob_log_eye_01_1.png" alt="logo" />
            {/* 사선 제목 */}
            <TitleRotate text="available now" color="#151515" />
            <h2 className="text-4xl font-bold">NEW ON MARVEL UNLIMITED</h2>
            <p>Read these plus 30,000+ digital comics for $9.99 a month!</p>
          </div>
          <Link to="https://www.naver.com/">
            <button className="uppercase duration-500 px-10 py-3 border border-white" style={{ clipPath: "polygon(10% 0, 100% 0, 100% 74%, 90% 100%, 0 100%, 0 30%)" }}>
              GET MARVEL UNLIMITED
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
