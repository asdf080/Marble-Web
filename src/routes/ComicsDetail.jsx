import React, { useState } from "react";
import Layout from "../components/Layout";
import { Link, useLocation, useParams } from "react-router-dom";
import { MdOutlineArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { AnimatePresence, motion } from "framer-motion";

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
      {/* 본문 위 */}
      <div
        className="relative w-full flex justify-center py-16 bg-no-repeat"
        style={{
          backgroundImage: `url(${item?.thumbnail.path}.${item?.thumbnail.extension})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* 필터처리 */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/90 backdrop-blur-lg"></div>

        <div className="z-10 max-w-7xl w-full h-full grid grid-cols-[1fr_2fr]">
          {/* 왼쪽 */}
          <div className="w-full h-full flex">
            <img className="w-[85%] aspect-[2/3] object-cover" src={`${item?.thumbnail.path}.${item?.thumbnail.extension}`} alt="character_image" />
          </div>
          {/* 오른쪽 */}
          <div className="w-full h-full flex flex-col text-white space-y-8 mt-4">
            <h1 className="text-3xl font-semibold scale-y-110">{/* {item?.name} */}</h1>
            <div>
              <h2 className="text-2xl font-semibold">Published</h2>
              <p className="text-lg">{/* {item?.modified?.substr(0, 10)} */}</p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold">Comics</h2>
              {/* {item?.comics?.items.slice(0, 4).map((item, index) => (
                  <p className="text-lg" key={index}>
                    {item.name}
                  </p>
                ))} */}
            </div>
            <div>
              <h2 className="text-2xl font-semibold">Description</h2>
              <p className="text-lg">{/* {item?.description || "-"} */}</p>
            </div>
          </div>
        </div>
      </div>
      {/* 본문 아래 */}
    </Layout>
  );
}
