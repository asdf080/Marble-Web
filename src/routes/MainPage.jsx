import React, { useState } from "react";
import Layout from "../components/Layout";
import MainSlide from "../components/MainSlide";
import TitleImgBox from "../components/TitleImgBox";
import { useQuery } from "react-query";
import { apiGetComics } from "./api";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import useMeasure from "react-use-measure";

const ListItem = ({ item, CARD_WIDTH, CARD_HEIGHT, MARGIN }) => (
  <div className=" shrink-0" style={{ width: CARD_WIDTH, height: CARD_HEIGHT, margin: MARGIN }}>
    {/* 이미지 */}
    <div className="w-full h-[280px]">
      <img className="w-hull h-full object-cover object-center" src={`${item.thumbnail?.path}.${item.thumbnail?.extension}`} alt="comic" />
    </div>
    {/* 타이틀 */}
    <div className="">
      <h2 className="font-semibold">{item.title}</h2>
      <h4 className="text-sm text-gray-500">{item.modified.substr(0, 10)}</h4>
    </div>
  </div>
);

export default function MainPage() {
  let lists;
  const { data, isLoading } = useQuery(["getComics"], apiGetComics);
  if (!isLoading) {
    lists = data?.data.results;
  }
  console.log(data);

  // 모션
  const CARD_WIDTH = 194;
  const CARD_HEIGHT = 350;
  const MARGIN = 8;
  const CARD_SIZE = CARD_WIDTH + MARGIN + 8;
  const BREAKPOINT = {
    sm: 640,
    lg: 1024,
  };

  const [ref, { width }] = useMeasure();
  const [offset, setOffset] = useState(0);

  const CARD_BUFFER = width > BREAKPOINT.lg ? 3 : width > BREAKPOINT.lg ? 2 : 1;

  const CAN_SHIFT_LEFT = offset < 0;
  const CAN_SHIFT_RIGHT = Math.abs(offset) > CARD_SIZE * (lists?.length - CARD_BUFFER);

  const shiftLeft = () => {
    if (!CAN_SHIFT_LEFT) return;
    setOffset((pv) => (pv += CARD_SIZE));
  };
  const shiftRight = () => {
    if (!CAN_SHIFT_RIGHT) return;
    setOffset((pv) => (pv -= CARD_SIZE));
  };

  return (
    <>
      <Layout>
        <MainSlide />
        {/* 코믹스 섹션 */}

        {/* 이미지로 된 타이틀 */}
        <TitleImgBox imgUrl="https://assets-prd.ignimgs.com/2023/11/03/themarvels-blogroll-1699047196961.jpg" />

        {/* 코믹스 리스트 */}
        <section className="w-full flex justify-center">
          <div ref={ref} className="relative max-w-7xl w-full overflow-hidden">
            <motion.div animate={{ x: offset }} className="w-full flex">
              {lists?.map((item, index) => (
                <ListItem CARD_WIDTH={CARD_WIDTH} CARD_HEIGHT={CARD_HEIGHT} MARGIN={MARGIN} item={item} key={index} />
              ))}
            </motion.div>

            {/* 왼쪽 버튼 */}
            <motion.button
              initial={false}
              animate={{
                x: CAN_SHIFT_LEFT ? "0%" : "-100%",
              }}
              onClick={shiftLeft}
              className="absolute left-0 top-[35%] bg-slate-500/50 duration-100 p-3  pl-2 text-4xl text-white hover:pl-3"
            >
              <FaChevronLeft />
            </motion.button>
            {/* 오른쪽 버튼 */}
            <motion.button
              initial={false}
              animate={{
                x: CAN_SHIFT_RIGHT ? "0%" : "100%",
              }}
              onClick={shiftRight}
              className="absolute right-0 top-[40%] w-12 h-14 bg-slate-500/50 p-2 text-4xl text-white hover:pb-4 rounded-lg duration-300"
            >
              <FaChevronRight />
            </motion.button>
          </div>
        </section>
      </Layout>
    </>
  );
}
