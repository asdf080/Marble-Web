import React from "react";
import Layout from "../components/Layout";
import MainSlide from "../components/MainSlide";
import TitleImgBox from "../components/TitleImgBox";
import ListCarousel from "../components/ListCarousel";
import { useInfiniteQuery, useQuery } from "react-query";
import { apiGetComics, apiGetEvents, apiGetCharacters } from "./api";
import TitleRotate from "../components/TitleRotate";
import { SyncLoader } from "react-spinners";
import Button from "../components/Button";
// https://www.npmjs.com/package/react-spinners

export default function MainPage() {
  let lists; // comics fetch 요청한 배열을 받기 위한 변수
  let characters;
  const { data, isLoading } = useQuery(["getComics"], apiGetComics);
  if (!isLoading) {
    lists = data?.data.results;
  }

  const {
    data: dataEvents,
    isLoading: isLoadingEvents,
    fetchNextPage, // 다음 페이지를 불러옴
    hasNextPage, // 다음 페이지 존재여부(boolean)
    isFetchingNextPage, // 다음 페이지 로딩중(boolean)
  } = useInfiniteQuery(
    // 쿼리키, 캐시에 참조하는 레퍼런스
    ["getEvents"],
    // 현재 어떤 페이지에 있는지 확인하는 파라미터(기본값: undefined), api 요청시 기본값으로 넣어서 사용 가능
    ({ pageParam = 0 }) => apiGetEvents({ pageParam }),
    {
      // 다음 페이지(새 데이터)를 불러올 때 마지막 페이지(lastPage)와 전체 페이지(pages)
      getNextPageParam: (lastPage, pages) => {
        const limit = lastPage?.data?.limit;
        const count = lastPage?.data?.count;
        if (count === limit) {
          return pages.length;
        } else return null;
      },
    }
  );

  const { data: dataChar, isLoading: isLoadingChar } = useQuery(["getCharacters", { limit: 20 }], apiGetCharacters);
  if (!isLoadingChar) {
    characters = dataChar?.data.results;
  }
  console.log(`
      ROCKET SCIENCE

            ##
           #  #
          #    #
         #      #
        #   ##   #
       #  #    #  #
       #  #    #   #
     ##     ##     ##
    # #            # #
   #  #            #  #
  #   #            #   #
 #    #            #    #
 #  # #            # #  #
 # #   #          #   # #
 #      # # # # ##      #

         #      #
          #    #
           #  #
            ##

`);

  return (
    <Layout>
      {/* 메인 슬라이드 컴포넌트 */}
      <MainSlide />

      {/* 코믹스 섹션 */}
      <TitleImgBox imgUrl="https://staticg.sportskeeda.com/editor/2023/12/6c1e6-17038758333996-1920.jpg" mainTit="available now" subTit="NEW ON MARVEL UNLIMITED" des="Read these plus 30,000+ digital comics for $9.99 a month!" btnTxt="GET MARVEL UNLIMITED" />
      <ListCarousel lists={lists} />

      {/* 이벤트 섹션 */}
      <section className="w-full flex flex-col justify-center items-center">
        <div className="max-w-7xl w-full grid xl:grid-cols-[7fr_3fr]">
          {/* 왼쪽 */}
          <div className="w-full h-full ">
            <TitleRotate text="the events" color="white" />
            {/* 이벤트 api 불러오기 */}
            <div className="w-full">
              {/* 각 리스트 */}
              {isLoadingEvents ? (
                <div className="w-full flex justify-center">
                  <SyncLoader color="maroon" height={60} width={7} radius={4} />
                </div>
              ) : (
                dataEvents?.pages.map((page) =>
                  page?.data.results.map((item) => (
                    <div key={item.id} className="grid grid-cols-1 grid-rows-2 xl:grid-cols-2 xl:grid-rows-1 py-4 border-b-2 border-gray-400 ml-3">
                      {/* 사진 */}
                      <div className="w-full lg:w-[420px] h-[235px]">
                        <img className="w-full h-full object-cover" src={`${item?.thumbnail.path}.${item?.thumbnail.extension}`} alt="img" />
                      </div>
                      {/* 텍스트 */}
                      <div className="pt-5 px-4">
                        <h4 className="text-2xl font-bold">{item?.title}</h4>
                        <p className="text-lg max-h-[140px] my-3 line-clamp-4">{item?.description}</p>
                        <p className="text-gray-600">{item?.modified.substring(0, 10)}</p>
                      </div>
                    </div>
                  ))
                )
              )}
            </div>
          </div>
          {/* 오른쪽 */}
          <aside className="w-full h-[950px] pl-[60px] hidden xl:block">
            <svg xmlns="http://www.w3.org/2000/svg" width="186" height="55" viewBox="0 0 186 55">
              <path d="M21.4 1L1 21.4V717h264.6l20.4-20.4V1H21.4z" mask="url(#border-line_svg__mask-2)" fill="none" stroke="#c6a972" strokeWidth="3"></path>
            </svg>
            <h3 className="uppercase text-center text-2xl font-bold">the hype box</h3>
            <p className=" text-center mt-2 mb-4">
              Can’t-miss news and updates from <br /> across the Marvel Universe!
            </p>
            {/* 리스트 */}
            <div className="pt-6 pb-8 mx-4 grid grid-cols-[1fr_60%] border-b-2">
              <img className="mt-2" src="https://cdn.marvel.com/content/1x/resurrection_of_magneto_1_cover_card.jpg" alt="img" />
              {/* 텍스트 */}
              <div className="pl-5 font-bold">
                <p className="text-gray-500 mb-1 text-sm">COMICS</p>
                <p>January 24's New Marvel Comics: The Full List</p>
              </div>
            </div>
            {/* 리스트 */}
            <div className="pt-6 pb-8 mx-4 grid grid-cols-[1fr_60%] border-b-2">
              <img className="mt-2" src="https://cdn.marvel.com/content/1x/the_marvels_5.png" alt="img" />
              {/* 텍스트 */}
              <div className="pl-5 font-bold">
                <p className="text-gray-500 mb-1 text-sm">MOVIES</p>
                <p>‘The Marvels’ Lands on Disney+ on February 7</p>
              </div>
            </div>
            {/* 리스트 */}
            <div className="pt-6 pb-8 mx-4 grid grid-cols-[1fr_60%] border-b-2">
              <img className="mt-2" src="https://cdn.marvel.com/content/1x/echo_1_0.png" alt="img" />
              {/* 텍스트 */}
              <div className="pl-5 font-bold">
                <p className="text-gray-500 mb-1 text-sm">TV SHOWS</p>
                <p>‘Echo’: Maya Lopez’s Hero (and Villain) Journey</p>
              </div>
            </div>
            {/* 리스트 */}
            <div className="pt-6 pb-8 mx-4 grid grid-cols-[1fr_60%] border-b-2">
              <img className="mt-2" src="https://cdn.marvel.com/content/1x/echo_mu-crd-1560x876.jpg" alt="img" />
              {/* 텍스트 */}
              <div className="pl-5 font-bold">
                <p className="text-gray-500 mb-1 text-sm">COMICS</p>
                <p>The Comics to Read Ahead of Marvel Studios’ ‘Echo’</p>
              </div>
            </div>
            {/* 리스트 */}
            <div className="pt-6 pb-8 mx-4 grid grid-cols-[1fr_60%]">
              <img className="mt-2" src="https://cdn.marvel.com/content/1x/x-men_33_cover_card.jpg" alt="img" />
              {/* 텍스트 */}
              <div className="pl-5 font-bold">
                <p className="text-gray-500 mb-1 text-sm">COMICS</p>
                <p>April's X-Titles Assemble the Avengers, Bring Back Magneto, & More</p>
              </div>
            </div>
            <div className="w-full flex justify-end">
              <svg xmlns="http://www.w3.org/2000/svg" width="186" height="55" viewBox="0 0 186 55" className="rotate-180">
                <path d="M21.4 1L1 21.4V717h264.6l20.4-20.4V1H21.4z" mask="url(#border-line_svg__mask-2)" fill="none" stroke="#c6a972" strokeWidth="3"></path>
              </svg>
            </div>
          </aside>
        </div>
        <button className="uppercase duration-300 mt-6 mb-20 px-7 py-4 bg-gray-200" style={{ clipPath: "polygon(10% 0, 100% 0, 100% 74%, 90% 100%, 0 100%, 0 30%)" }} onClick={() => fetchNextPage()}>
          {isFetchingNextPage ? (
            <div className="w-full flex justify-center px-4 py-1">
              <SyncLoader color="maroon" height={60} width={7} radius={4} />
            </div>
          ) : hasNextPage ? (
            "load more"
          ) : (
            "nothing to load"
          )}
        </button>
      </section>

      {/* 캐릭터 섹션 */}
      <TitleImgBox imgUrl="https://bleedingfool.com/wp-content/uploads/2023/12/marvel-mutts.jpg" mainTit="on sale 1/31" subTit="NEW COMICS THIS WEEK" des="Check out the newest Marvel comics coming out this week!" btnTxt="print subscription" />
      {isLoadingChar ? (
        <div className="w-full flex justify-center">
          <SyncLoader color="maroon" className="mx-10 my-10" height={60} width={7} radius={4} />
        </div>
      ) : (
        <ListCarousel lists={characters} />
      )}

      {/* 마블 인사이더 */}
      <section className="w-full h-[350px] flex justify-center bg-black">
        <div className="max-w-7xl w-full h-full grid grid-cols-1 md:grid-cols-[4.5fr_5.5fr]">
          {/* 왼쪽 */}
          <div className="w-full h-full bg-[url('https://cdn.marvel.com/content/1x/01-mi-promo-april2020-featured-half-dsk-1140x680_4.jpg')]"></div>
          {/* 오른쪽 */}
          <div className="w-full h-full text-white flex flex-col justify-around items-center">
            <div className=" flex flex-col justify-center items-center">
              <p className="uppercase my-4 tracking-[3px] text-red-500 font-bold">Marvel Insider</p>
              <h4 className="font-bold mb-[10px] text-[26px]">Watch, Earn, Redeem!​</h4>
              <p className="mb-5">Get rewarded for doing what you already do as a fan.​</p>
              <Button name="join now" />
            </div>
            <p className="text-sm">Terms and Conditions Apply.</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
