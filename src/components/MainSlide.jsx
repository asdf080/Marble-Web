import React, { useState } from "react";
import Facebook from "../assets/Facebook";
import Insta from "../assets/Insta";
import Youtube from "../assets/Youtube";
import { testimonials } from "../lib/menus";
import Button from "../components/Button";
import { motion } from "framer-motion";
import NoticeDisney from "../components/NoticeDisney";

const Card = ({ image, title, link, text, logoMax, imgLogo, imgTit, imgNote, selected, setSelected, position }) => {
  const offset = position <= selected ? 0 : 100;
  return (
    <div className="w-full h-full flex justify-center">
      <motion.div
        initial={false}
        style={{ zIndex: position }}
        animate={{ x: `${offset}%` }}
        transition={{
          duration: 0.25,
          ease: "linear",
        }}
        onClick={() => setSelected(position)}
        className="absolute top-0 left-0 w-full min-h-full p-8 flex flex-col justify-center items-center"
      >
        <div className="absolute top-0 left-0 w-full h-full flex justify-center">
          <img className="w-full h-full object-cover object-center" src={image} alt={title} />

          <div className="absolute max-w-7xl w-full h-full flex flex-col text-white space-y-4 justify-center">
            <img src={imgLogo} alt="logo" style={{ maxWidth: `${logoMax}px` }} />
            <h1 className="text-4xl font-bold uppercase max-w-[540px]">{imgTit}</h1>
            <p className="text-xl max-w-[600px]">{imgNote}</p>
            <Button link={link} name={text} />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const SelectedBtns = ({ numTracks, setSelected, selected }) => {
  return (
    <div className="flex space-x-2">
      {numTracks.map((item, index, array) => (
        <button onClick={() => setSelected(index)} key={index} className="h-2 w-full bg-slate-300 relative">
          {selected === index ? (
            <motion.span
              className="absolute top-0 left-0 bg-red-600 w-full h-full"
              initial={{
                width: "0%",
              }}
              animate={{
                width: "100%",
              }}
              transition={{
                duration: 6,
                ease: "easeOut",
              }}
              onAnimationComplete={() => {
                setSelected(selected === array.length - 1 ? 0 : selected + 1);
              }}
            ></motion.span>
          ) : (
            <span
              className="absolute top-0 left-0 bg-red-600"
              style={{
                width: selected > index ? "100%" : "0%",
              }}
            ></span>
          )}
          <p className={`w-full h-16 text-left items-start pt-4 px-1 text-gray-500 ${selected === index && "text-red-600"} uppercase`}>{item.title}</p>
        </button>
      ))}
    </div>
  );
};

export default function MainSlide() {
  const [selected, setSelected] = useState(0);

  return (
    <>
      <NoticeDisney />
      <section className="w-full flex flex-col overflow-hidden">
        {/* 슬라이드 영역 */}
        <div className="relative w-full h-[650px] ">
          {testimonials.map((item, index) => (
            <Card key={index} {...item} selected={selected} setSelected={setSelected} position={index} />
          ))}
        </div>
        {/* 버튼 영역 */}
        <div className="z-10 w-full h-20 hidden justify-center md:flex">
          <div className="max-w-7xl w-full h-full grid grid-cols-4">
            {/* 75% cols-3*/}
            <div className="col-span-3 bg-white -translate-y-8 px-4">
              <SelectedBtns numTracks={testimonials} selected={selected} setSelected={setSelected} />
            </div>
            {/* 25% cols-1*/}
            <div className="col-span-1 flex w-full h-full items-center justify-end space-x-5">
              <Facebook />
              <Youtube />
              <Insta />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
