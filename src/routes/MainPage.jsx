import React from "react";
import Layout from "../components/Layout";
import MainSlide from "../components/MainSlide";
import TitleImgBox from "../components/TitleImgBox";

export default function MainPage() {
  return (
    <>
      <Layout>
        <MainSlide />
        {/* 코믹스 섹션 */}
        <section className="w-full">
          {/* 이미지로 된 타이틀 */}
          <TitleImgBox imgUrl="https://assets-prd.ignimgs.com/2023/11/03/themarvels-blogroll-1699047196961.jpg" />
          {/* 코믹스 리스트 */}
        </section>
      </Layout>
    </>
  );
}
