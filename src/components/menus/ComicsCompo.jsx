import React from "react";

const MENUS = [
  { img: "https://i.annihil.us/u/prod/marvel/i/mg/3/a0/6537eb74d5270.jpg", title: "Marvel Mutts #2", desc: "Leader of the Pack" },
  { img: "https://i.annihil.us/u/prod/marvel/i/mg/c/70/6557e6a2c2dbf.jpg", title: "Marvel Mutts #3", desc: "From the Rainbow Bridge in Asgard to the Little White Chapel in Las Vegas" },
  { img: "https://i.annihil.us/u/prod/marvel/i/mg/6/20/659dd0d00a655.jpg", title: "Spider Man #21", desc: "Rats may have a different plan for him!" },
  { img: "http://i.annihil.us/u/prod/marvel/i/mg/5/e0/659dd0d00a651.jpg", title: "Spider Man #22", desc: "A relentless infestation of terrifyingly organized rats has even the Maggia henchmen" },
  { img: "https://cdn.marvel.com/u/prod/marvel/i/mg/5/60/65a02c83d101c/portrait_uncanny.jpg", title: "Alligator Loki #35", desc: "Penciler: Robert Quinn" },
];

export default function ComicsCompo() {
  return (
    <div className="w-full flex justify-center text-black">
      <div className="max-w-7xl w-full py-10 flex flex-col items-center space-y-8">
        <h2 className="uppercase font-bold text-2xl">see comics with marvel's animal</h2>
        <div className="flex space-x-4">
          {MENUS.map((item, index) => (
            <div key={index} className="flex flex-col w-44 space-y-3">
              <img src={item.img} alt="img" />
              <div className="px-2">
                <h3>{item.title}</h3>
                <p className="text-sm text-gray-700 line-clamp-2">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
