const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = "https://gateway.marvel.com:443/v1/public";

// https://tanstack.com/query/latest/docs/react/quick-start

// [GET] Comics 리스트
export async function apiGetComics() {
  return await fetch(`${BASE_URL}/comics?hasDigitalIssue=true&characters=1009224%2C1017577&apikey=${API_KEY}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
}

// [GET] Events 리스트
export async function apiGetEvents() {
  return await fetch(`${BASE_URL}/events?characters=1009189%2C1009224%2C2C1017577&limit=10&apikey=${API_KEY}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
}
