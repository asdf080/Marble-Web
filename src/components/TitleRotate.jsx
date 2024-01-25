import React from "react";

export default function TitleRotate({ text, color = "none" }) {
  return (
    <div className="relative w-80 h-20 flex items-center">
      {/* 텍스트 */}
      <span className="uppercase tracking-[.2em] font-bold text-lg" style={{ background: color }}>
        {text}
      </span>
      {/* 사선 */}
      <div className="absolute top-[40px] left-0 w-[100px] h-[2px] bg-[#c6a972] -rotate-45 -z-10"></div>
    </div>
  );
}
