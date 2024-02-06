import React from "react";

const MENUS = [
  { img: "https://i.annihil.us/u/prod/marvel/i/mg/6/80/5269608c1be7a.jpg", title: "Captain Marvel" },
  { img: "https://i.annihil.us/u/prod/marvel/i/mg/3/50/537ba56d31087.jpg", title: "Captain America" },
  { img: "https://i.annihil.us/u/prod/marvel/i/mg/9/90/5261a86cacb99.jpg", title: "Deadpool" },
  { img: "https://i.annihil.us/u/prod/marvel/i/mg/c/90/54edf8eb8f102.jpg", title: "Spider-Gwen" },
  { img: "https://i.annihil.us/u/prod/marvel/i/mg/9/20/5102c774ebae7.jpg", title: "Avengers" },
];

export default function CharaCompo() {
  return (
    <div className="w-full flex justify-center text-black">
      <div className="max-w-7xl w-full py-10 flex flex-col items-center space-y-8">
        <h2 className="uppercase font-bold text-2xl">trending in the universe</h2>
        <div className="flex space-x-4">
          {MENUS.map((item, index) => (
            <div key={index} className="flex flex-col w-44 space-y-3">
              <img src={item.img} alt="img" />
              <h3 className="px-2">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
