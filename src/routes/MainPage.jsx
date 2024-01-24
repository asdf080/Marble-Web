import React, { useState } from "react";
import Layout from "../components/Layout";
import NoticeDisney from "../components/NoticeDisney";
import { testimonials } from "../lib/menus";
import Button from "../components/Button";
import { motion } from "framer-motion";
import Facebook from "../assets/Facebook";
import Insta from "../assets/Insta";
import Youtube from "../assets/Youtube";

const Card = ({ img, title, btnName, link, selected, setSelected, position }) => {
  const offset = position <= selected ? 0 : 100;
  return (
    <div className="w-full h-full flex justify-center relative">
      <motion.div
        initial={false}
        animate={{ x: `${offset}` }}
        transition={{
          duration: 0.25,
          ease: "easeOut",
        }}
        style={{ zIndex: position }}
        onClick={() => setSelected(position)}
        className="w-full h-full absolute top-0 left-0 flex justify-center"
      >
        <img className="w-full h-full object-cover" src={img} alt={title} />
      </motion.div>
      <div className="absolute max-w-7xl w-full h-full flex flex-col justify-center text-white px-6 space-y-5">
        <h2 className="text-4xl font-bold uppercase">{title}</h2>
        <div className="text-xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit. </div>
        <div>
          <Button name={btnName} link={link} />
        </div>
      </div>
    </div>
  );
};

const SelectedBtns = ({ numTracks, selected, setSelected }) => {
  return (
    <div className="flex space-x-2">
      {numTracks.map((item, index, arr) => (
        <button onClick={() => setSelected(index)} key={index} className="h-2 w-full bg-slate-300 relative">
          {selected === index ? (
            <motion.span
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 5, ease: "linear" }}
              onAnimationComplete={() => {
                setSelected(selected === arr.length - 1 ? 0 : selected + 1);
              }}
              className="absolute top-0 left-0 bg-red-600 w-full h-full"
            >
              <p className={`w-full h-16 text-left items-start pt-4 px-2 uppercase text-red-600`}>{item.title}</p>
            </motion.span>
          ) : (
            <span className="absolute top-0 left-0 bg-red-500" style={{ width: selected > index ? "100%" : "0" }}></span>
          )}
          <p className={`w-full h-16 text-left items-start pt-4 px-2 text-gray-500 uppercase`}>{item.title}</p>
        </button>
      ))}
    </div>
  );
};

export default function MainPage() {
  const [selected, setSelected] = useState(0);

  return (
    <>
      <Layout>
        <NoticeDisney />
        {/* 메인 슬라이드*/}
        <section className="w-full flex flex-col">
          {/* 슬라이드 영역 */}
          <div className="w-full h-[580px] overflow-hidden">
            {testimonials.map((item, index) => (
              <Card key={index} {...item} selected={selected} setSelected={setSelected} position={index} />
            ))}
          </div>
          {/* 버튼 영역 */}
          <div className="w-full h-20 flex justify-center">
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
      </Layout>
    </>
  );
}
