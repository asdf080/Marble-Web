import React, { useState } from "react";
import Layout from "../components/Layout";
import { Link, useLocation, useParams } from "react-router-dom";
import { MdOutlineArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { AnimatePresence, motion } from "framer-motion";
import TitleRotate from "./../components/TitleRotate";

export default function ComicsDetail() {
  const [prevOpen, setPrevOpen] = useState(false);
  const [nextOpen, setNextOpen] = useState(false);

  const {
    state: { comics },
  } = useLocation();
  const { id } = useParams();

  const item = comics?.find((comic) => +comic.id === +id);
  const index = comics?.indexOf(item);
  const next = index > 0 ? comics[index - 1] : comics[comics?.length - 1];
  const prev = index < comics?.length - 1 ? comics[index + 1] : 0;
  console.log(item);

  return (
    <Layout>
      {/* 화살표 버튼 */}
      <div className="w-full h-[42px] bg-[#151515] flex justify-center py-2">
        <div className="uppercase text-sm font-semibold text-white grid grid-cols-2 gap-10">
          {/* 이전 버튼 */}
          <Link to={`/comics/${prev?.id}`} state={{ comics }}>
            <div onMouseEnter={() => setPrevOpen(true)} onMouseLeave={() => setPrevOpen(false)} className="relative">
              <div className="flex h-full items-center cursor-pointer">
                <MdOutlineArrowBackIos size="20" />
                <span>prev</span>
              </div>
              {prevOpen && (
                <AnimatePresence>
                  <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 15 }} transition={{ duration: 0.3, ease: "easeOut" }} className="absolute top-8 right-0 bg-gray-600 w-40 h-72 p-2 z-20">
                    <img src={`${prev?.thumbnail?.path}.${prev.thumbnail?.extension}`} alt="prevImg" className="w-full h-56 object-cover" />
                    <h4 className="p-2 text-center">{prev?.title?.substr(0, 28)}</h4>
                  </motion.div>
                </AnimatePresence>
              )}
            </div>
          </Link>
          {/* 다음 버튼 */}
          <Link to={`/comics/${next?.id}`} state={{ comics }}>
            <div onMouseEnter={() => setNextOpen(true)} onMouseLeave={() => setNextOpen(false)} className="relative">
              <div className="flex h-full items-center">
                <span>next</span>
                <MdArrowForwardIos size="20" />
              </div>
              {nextOpen && (
                <AnimatePresence>
                  <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 15 }} transition={{ duration: 0.3, ease: "easeOut" }} className="absolute top-8 left-0 bg-gray-600 w-40 h-72 p-2 z-20">
                    <img src={`${next?.thumbnail?.path}.${next.thumbnail?.extension}`} alt="nextImg" className="w-full h-56 object-cover" />
                    <h4 className="p-2 text-center">{next?.title?.substr(0, 28)}</h4>
                  </motion.div>
                </AnimatePresence>
              )}
            </div>
          </Link>
        </div>
      </div>
      {/* 본문: 위 */}
      <div
        className="relative w-full flex justify-center py-16 bg-no-repeat"
        style={{
          backgroundImage: `url(${item?.thumbnail.path}.${item?.thumbnail.extension})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* 필터 */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/90 backdrop-blur-lg"></div>

        <div className="z-10 max-w-7xl w-full h-full grid grid-cols-[1fr_2fr]">
          {/* 왼쪽: 이미지 */}
          <div className="w-full h-full flex">
            <img className="w-[85%] aspect-[2/3] object-cover" src={`${item?.thumbnail.path}.${item?.thumbnail.extension}`} alt="character_image" />
          </div>
          {/* 오른쪽: 텍스트 */}
          <div className="w-full h-full flex flex-col text-white space-y-8 mt-4">
            <h1 className="text-3xl font-semibold scale-y-110">{item?.title}</h1>
            <div>
              <h2 className="text-2xl font-semibold">Published</h2>
              <p className="text-lg">{item?.modified?.substr(0, 10)}</p>
            </div>
            <div className="flex gap-40">
              <div>
                <h2 className="text-2xl font-semibold capitalize">{item?.creators?.items?.[1].role}</h2>
                <p className="text-lg">{item?.creators?.items?.[1].name || "-"}</p>
              </div>
              <div>
                <h2 className="text-2xl font-semibold capitalize">{item?.creators?.items?.[0].role}</h2>
                <p className="text-lg">{item?.creators?.items?.[0].name || "-"}</p>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-semibold capitalize">{item?.creators?.items?.[2].role}</h2>
              <p className="text-lg">{item?.creators?.items?.[2].name || "-"}</p>
            </div>
            <div>
              <p className="text-xl pr-16 mt-4">{item?.textObjects?.[0].text || "-"}</p>
            </div>
          </div>
        </div>
      </div>
      {/* 본문: 아래 */}
      <div className="w-full bg-main-dark flex justify-center py-16">
        <div className="max-w-7xl w-full text-white px-6">
          <h3 className="uppercase text-2xl font-semibold mb-10">more details</h3>
          <div className="flex gap-40 text-[19px]">
            <div>
              <h4 className="uppercase font-bold mb-4 spacing">informaion</h4>
              <div>
                <span className="uppercase font-bold text-gray-200">format: </span>
                <span>{item.format}</span>
              </div>
              <div>
                <span className="uppercase font-bold text-gray-200">prices: </span>
                <span>{item.prices?.[0].price || "-"}</span>
              </div>
              <div>
                <span className="uppercase font-bold text-gray-200">upc: </span>
                <span>{item.upc}</span>
              </div>
              <div>
                <span className="uppercase font-bold text-gray-200">FOC Date: </span>
                <span>{item.dates?.[2].date.substr(0, 10)}</span>
              </div>
              <div>
                <span className="uppercase font-bold text-gray-200">Unlimited Date: </span>
                <span>{item.dates?.[1].date.substr(0, 10)}</span>
              </div>
            </div>
            <div>
              <h4 className="uppercase font-bold mb-4 spacing">staff</h4>
              <div>
                <span className="uppercase font-bold text-gray-200">{item?.creators?.items?.[1].role}: </span>
                <span>{item?.creators?.items?.[1].name || "-"}</span>
              </div>
              <div>
                <span className="uppercase font-bold text-gray-200">{item?.creators?.items?.[0].role}: </span>
                <span>{item?.creators?.items?.[0].name || "-"}</span>
              </div>
              <div>
                <span className="uppercase font-bold text-gray-200">{item?.creators?.items?.[2].role}: </span>
                <span>{item?.creators?.items?.[2].name || "-"}</span>
              </div>
              <div>
                <span className="uppercase font-bold text-gray-200">{item?.creators?.items?.[3].role}: </span>
                <span>{item?.creators?.items?.[3].name || "-"}</span>
              </div>
              <div>
                <span className="uppercase font-bold text-gray-200">{item?.creators?.items?.[4].role}: </span>
                <span>{item?.creators?.items?.[4].name || "-"}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center py-16">
        <div className="max-w-7xl w-full">
          <TitleRotate text={`WRITER's other works`} color="white" />
        </div>
      </div>
    </Layout>
  );
}
