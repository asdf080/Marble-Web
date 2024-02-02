import React from "react";
import Layout from "../components/Layout";
import TitleRotate from "../components/TitleRotate";
import { apiGetComicsMutts, apiGetComicsSpi } from "./api";
import { useQuery } from "react-query";
import { SyncLoader } from "react-spinners";
import { Link } from "react-router-dom";

export default function Comics() {
  let mutts;
  let spi;
  const { data: dataMutts, isLoading: isLoadingMutts } = useQuery(["getComicsMutts"], apiGetComicsMutts);
  if (!isLoadingMutts) {
    mutts = dataMutts?.data.results;
  }
  const { data: dataSpi, isLoading: isLoadingSpi } = useQuery(["getComicsSpi"], apiGetComicsSpi);
  if (!isLoadingSpi) {
    spi = dataSpi?.data.results;
  }
  return (
    <Layout>
      {/* 메인배경 */}
      <section className="relative w-full h-[580px]">
        <img className="w-full h-full object-cover" src="https://static1.colliderimages.com/wordpress/wp-content/uploads/2022/06/marvels-goodest-boys-feature.jpg" alt="img" />
        <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>
        <div className="absolute top-1/3 translate-x-1/2 text-white">
          <h1 className="text-5xl font-semibold py-2 uppercase">
            enjoy the MARVEL COMICS <br />
            NEW IN UNLIMITED!
          </h1>
          <button className="uppercase duration-500 px-10 py-2 my-2 border border-white" style={{ clipPath: "polygon(10% 0, 100% 0, 100% 74%, 90% 100%, 0 100%, 0 30%)" }}>
            READ MORE
          </button>
        </div>
      </section>
      {/* 내용 */}
      <section className="w-full flex justify-center">
        <div className="max-w-7xl w-full py-4 mt-4">
          {/* 내용1 */}
          <TitleRotate text="MARVEL MUTTS" color="white" />
          <article className="w-full grid grid-cols-5 gap-4 py-4 mb-24">
            {isLoadingMutts ? (
              <div className="flex justify-center mt-8 mb-16 col-span-5">
                <SyncLoader color="maroon" height={60} width={7} radius={4} />
              </div>
            ) : (
              mutts?.slice(0, 5).map((item, index, arr) => (
                <Link key={index} to={`/comics/${item.id}`} state={{ comics: arr }}>
                  <div className="w-[224px] h-[450px] group">
                    <div className="shadow-2xl will-change-transform duration-300 group-hover:-translate-y-3">
                      <img className="w-full h-[336px] shadow-md" src={`${item.thumbnail?.path}.${item.thumbnail?.extension}`} alt="img" />
                    </div>
                    <div className="font-bold text-lg mt-5">{item.title}</div>
                    <p className=" line-clamp-2">{item.textObjects?.[0].text}</p>
                  </div>
                </Link>
              ))
            )}
          </article>
          {/* 배너 */}
          <TitleRotate text="NEW IN MARVEL UNLIMITED" color="white" />
          <Link to="/">
            <div className="w-full border-t-2 border-b-2 mt-6 flex justify-center items-center">
              <img src="https://cdn.marvel.com/u/prod/marvel/images/mu/web/2021/mu-promo-callout-thin.jpg" alt="img" className="w-[360px] h-[70px] object-cover" />
              <div className="w-full flex justify-around items-center font-bold">
                <p className="text-xl text-red-500">MARVEL UNLIMITED</p>
                <p className="mx-4 text-lg">
                  Want to read all these digital comics? Get instant <br /> access to all these and more!
                </p>
                <p className="ml-4 text-xl text-red-500">Join now</p>
              </div>
            </div>
            <div className="w-full text-center text-gray-500 text-sm mt-1 mb-20">Restrictions Apply.</div>
          </Link>
          {/* 내용2 */}
          <TitleRotate text="NEW SPIDERS" color="white" />
          <article className="w-full grid grid-cols-5 gap-4 py-4">
            {isLoadingSpi ? (
              <div className="flex justify-center mt-8 mb-16 col-span-5">
                <SyncLoader color="maroon" height={60} width={7} radius={4} />
              </div>
            ) : (
              spi?.slice(0, 5).map((item, index, arr) => (
                <Link key={index} to={`/comics/${item.id}`} state={{ comics: arr }}>
                  <div className="w-[224px] h-[450px] group cursor-pointer">
                    <div className="shadow-2xl will-change-transform duration-300 group-hover:-translate-y-3">
                      <img className="w-full h-[336px] shadow-md" src={`${item.thumbnail?.path}.${item.thumbnail?.extension}`} alt="img" />
                    </div>
                    <div className="font-bold text-lg mt-5">{item.title}</div>
                  </div>
                </Link>
              ))
            )}
          </article>
        </div>
      </section>
    </Layout>
  );
}
