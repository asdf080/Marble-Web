import React, { useEffect } from "react";
import Layout from "../components/Layout";
import MainSlide from "../components/MainSlide";
import TitleImgBox from "../components/TitleImgBox";
import Layout7 from "../components/Layout7";
import { useQuery } from "react-query";
import { apiGetComics } from "./api";

export default function MainPage() {
  //const qeury = useQuery(["getComics"], apiGetComics);
  //console.log(qeury);

  return (
    <>
      <Layout>
        <MainSlide />
        {/* 코믹스 섹션 */}
        <section className="w-full">
          {/* 이미지로 된 타이틀 */}
          <TitleImgBox imgUrl="https://assets-prd.ignimgs.com/2023/11/03/themarvels-blogroll-1699047196961.jpg" />
          {/* 코믹스 리스트 */}
          <Layout7>
            <div className="w-full h-60 bg-red-300"></div>
          </Layout7>
        </section>
      </Layout>
    </>
  );
}
