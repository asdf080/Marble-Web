import React from "react";
import Layout from "../components/Layout";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { apiGetCharactersDetail } from "./api";
import { SyncLoader } from "react-spinners";

export default function CharactersDetail() {
  let detail;
  const { id } = useParams();
  const { data, isLoading } = useQuery(["getCharactersDetail", { id }], apiGetCharactersDetail);
  if (!isLoading) detail = data?.data.results[0];
  return (
    <Layout>
      {/* 위 */}
      <div
        className="relative w-full flex justify-center py-16 object-cover object-top"
        style={{
          backgroundImage: "url('https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/62D6598A98D947B4418FA801AB7C7BC7789E7DD15D5F1378787D52A85B17D841/scale?width=2880&aspectRatio=1.78&format=jpeg')",
        }}
      >
        {/* 필터처리 */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/80 backdrop-blur-lg"></div>
        {isLoading ? (
          <div className="z-10 max-w-7xl w-full h-full flex justify-center items-center">
            <SyncLoader color="maroon" height={60} width={7} radius={4} />
          </div>
        ) : (
          <div className="z-10 max-w-7xl w-full h-full grid grid-cols-[1fr_2fr]">
            {/* 왼쪽 */}
            <div className="w-full h-full flex">
              <img className="w-[85%] aspect-[2/3] object-cover" src={`${detail?.thumbnail.path}.${detail?.thumbnail.extension}`} alt="character_image" />
            </div>
            {/* 오른쪽 */}
            <div className="w-full h-full flex flex-col text-white space-y-8 mt-4">
              <h1 className="text-3xl font-semibold scale-y-110">{detail?.name}</h1>
              <div>
                <h2 className="text-2xl font-semibold">Published</h2>
                <p className="text-lg">{detail?.modified?.substr(0, 10)}</p>
              </div>
              <div>
                <h2 className="text-2xl font-semibold">Comics</h2>
                {detail?.comics?.items.slice(0, 4).map((item, index) => (
                  <p className="text-lg" key={index}>
                    {item.name}
                  </p>
                ))}
              </div>
              <div>
                <h2 className="text-2xl font-semibold">Description</h2>
                <p className="text-lg">{detail?.description || "-"}</p>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* 아래 */}
      <div className="w-full flex justify-center py-10">
        <div className="max-w-7xl w-full">
          <h3 className="text-3xl uppercase font-semibold py-6">more information</h3>
          {detail?.urls?.map((item, index) => (
            <Link to={item.url} key={index}>
              <button className="border-2 border-black px-10 py-3 text-2xl my-2 mx-5 hover:bg-black hover:text-white duration-200 capitalize">{item.type}</button>
            </Link>
          ))}
          <div className="w-full pt-16 flex gap-32 ml-3">
            <div>
              <h3 className="text-[28px] mb-2">Events</h3>
              <ul>
                {detail?.events?.items?.slice(0, 6).map((item, index) => (
                  <li key={index} className="text-lg ml-2">
                    {item.name}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-[28px] mb-2">Series</h3>
              <ul>
                {detail?.series?.items?.slice(0, 6).map((item, index) => (
                  <li key={index} className="text-lg ml-2">
                    {item.name}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-[28px] mb-2">Stories</h3>
              <ul>
                {detail?.stories?.items?.slice(0, 6).map((item, index) => (
                  <li key={index} className="text-lg ml-2">
                    {item.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <Link to="/characters">
            <button className="mt-40 border-2 border-black px-16 py-4 text-3xl hover:bg-black hover:text-white duration-200 uppercase rounded-full">back to characters lists</button>
          </Link>
        </div>
      </div>
    </Layout>
  );
}
