const API_KEY = import.meta.env.VITE_API_KEY;

// [GET] Comics 리스트
export async function apiGetComics() {
  return await fetch(`https://gateway.marvel.com:443/v1/public/comics?apikey=${API_KEY}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
}
