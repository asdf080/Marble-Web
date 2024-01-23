import React from "react";
import footLogo from "../assets/footLogo1.png";
import Facebook from "../assets/Facebook";
import Insta from "../assets/Insta";
import Tumb from "../assets/Tumb";
import Youtube from "../assets/Youtube";
import Snap from "../assets/Snap";
import Pint from "../assets/Pint";

export default function Footer() {
  return (
    <footer className="w-full h-[320px] bg-main-dark flex justify-center text-white pt-20 pb-[30px] ">
      <div className="w-full h-full flex justify-center space-x-12">
        {/* 로고 */}
        <div className="flex space-x-8">
          <div>
            <img className="h-[124px]" src={footLogo} alt="logo" />
          </div>
          {/* about */}
          <div className=" leading-8">
            <p>ABOUT MARVEL</p>
            <p>HELP/FAQS</p>
            <p>CAREERS</p>
            <p>INTERNSHIPS</p>
          </div>
          <div className=" leading-8">
            <p>ADVERTISING</p>
            <p>DISNEY+</p>
            <p>MARVELHQ.COM</p>
            <p>DIGITAL COMICS</p>
          </div>
        </div>
        {/* 광고 */}
        <div className="space-y-8">
          {/* 위 */}
          <div className="flex space-x-6 items-center">
            {/* 이미지 */}
            <img className="w-[55px] h-6" src="https://cdn.marvel.com/content/1x/marvel_insider-topnav-logo-large2x.png" alt="img" />
            {/* 내용 */}
            <div>
              <h4 className="font-semibold">MARVEL INSIDER</h4>
              <p className="text-gray-400">Get Rewarded for Being a Marvel Fan</p>
            </div>
          </div>
          {/* 아래 */}
          <div className="flex space-x-6 items-center">
            {/* 이미지 */}
            <img className="w-[55px] h-6" src="https://cdn.marvel.com/content/1x/mu-logo-w-nav-2x-2021-02.png" alt="img" />
            {/* 내용 */}
            <div>
              <h4 className="font-semibold">MARVEL UNLIMITED</h4>
              <p className="text-gray-400">Access Over 30,000+ Digital Comics</p>
            </div>
          </div>
        </div>
        {/* sns */}
        <div className="space-y-6">
          <h4 className="font-semibold">FOLLOW MARVEL</h4>
          <div className="grid grid-cols-4 grid-rows-2 gap-y-6 gap-x-6">
            <p>
              <Facebook />
            </p>
            <p>
              <Insta />
            </p>
            <p>
              <Tumb />
            </p>
            <p>
              <Youtube />
            </p>
            <p>
              <Snap />
            </p>
            <p>
              <Pint />
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
