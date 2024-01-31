import React from "react";
import Layout from "../components/Layout";
import TitleRotate from "../components/TitleRotate";
import { useQuery } from "react-query";
import { apiGetCharacters } from "./api";
import { SyncLoader } from "react-spinners";

export default function Characters() {
  let characters;
  const { data, isLoading } = useQuery(["getCharacters", { limit: 12 }], apiGetCharacters);
  if (!isLoading) {
    characters = data?.data.results;
  }
  return (
    <Layout>
      {/* 메인배경 */}
      <section className="relative w-full h-[400px]">
        <img className="w-full h-full object-cover" src="https://cdn.marvel.com/content/1x/characters_art_mas_dsk_01.jpg" alt="img" />
        <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 text-white text-center">
          <h1 className="text-5xl font-semibold py-2">MARVEL CHARACTERS</h1>
          <p>Get hooked on a hearty helping of heroes and villains from the humble House of Ideas!</p>
        </div>
      </section>
      {/* 내용 */}
      <section className="w-full flex justify-center">
        <div className="max-w-7xl w-full py-4">
          {/* 제목 */}
          <TitleRotate text="FEATURED CHARACTERS" color="white" />
          {/* 리스트 */}
          <div className="grid grid-cols-6 gap-4 py-4">
            {isLoading ? (
              <div className="flex justify-center mt-8 mb-16 col-span-6">
                <SyncLoader color="maroon" height={60} width={7} radius={4} />
              </div>
            ) : (
              characters?.map((item, index) => (
                <div key={index} className="h-[340px] group cursor-pointer">
                  <div style={{ clipPath: "polygon(100% 0, 100% 91%, 87% 100%, 0 100%, 0 0)" }} className="w-full h-full flex flex-col bg-red-500">
                    {/* 이미지 */}
                    <div className="w-full h-[60%] overflow-hidden">
                      <img className="w-full h-full object-cover group-hover:scale-110 duration-300 will-change-transform" src={`${item.thumbnail?.path}.${item.thumbnail?.extension}`} alt="img" />
                    </div>
                    {/* 타이틀 */}
                    <div className="relative w-full h-[40%] text-white flex items-end">
                      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-evenly py-2 p-4">
                        <h2 className="font-bold">{item?.name}</h2>
                        <p className="line-clamp-2 text-sm">{item?.description}</p>
                      </div>
                      {/* 호버시 움직이는 부분 */}
                      <div className="w-full h-[95%] bg-main-dark group-hover:h-0 duration-300"></div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
}
