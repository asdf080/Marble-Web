import React from "react";
import disney from "../assets/disneybtn.png";

export default function NoticeDisney() {
  return (
    <a href="https://www.disneyplus.com/ko-kr/series/details/4unBxmuv2B8B?cid=DTCI-Synergy-Marvel-Site-Acquisition-Originals-US-Marvel-Echo-EN-NavPipe-Marvel_NavPipe_Echo-NA" target="_blank">
      <div className="w-full h-10 bg-[#151515] text-white flex justify-center items-center uppercase space-x-3">
        <span className="text-[14px] ">stream echo on</span>
        <img className="h-10" src={disney} alt="디즈니로고" />
      </div>
    </a>
  );
}
