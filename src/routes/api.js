const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = "https://gateway.marvel.com:443/v1/public";

// https://tanstack.com/query/latest/docs/react/quick-start

// [GET] Comics 리스트
export async function apiGetComics() {
  try {
    return await fetch(`${BASE_URL}/comics?hasDigitalIssue=true&characters=1009224%2C1017577&apikey=${API_KEY}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
  } catch (err) {
    console.error(err);
  }
}

// [GET] Events 리스트
export async function apiGetEvents() {
  try {
    return await fetch(`${BASE_URL}/events?characters=1009189%2C1009224%2C2C1017577&limit=10&apikey=${API_KEY}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
  } catch (err) {
    console.error(err);
  }
}

// [GET] Characters 리스트
export async function apiGetCharacters({ queryKey }) {
  try {
    return await fetch(`${BASE_URL}/characters?modifiedSince=2020-03-10&orderBy=modified&limit=${queryKey[1].limit}&apikey=${API_KEY}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
  } catch (err) {
    console.error(err);
  }
}
