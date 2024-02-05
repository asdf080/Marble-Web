import qs from "qs";

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
// [GET] Comics mutts 리스트
export async function apiGetComicsMutts() {
  try {
    return await fetch(`${BASE_URL}/comics?titleStartsWith=Marvel%20Mutts&apikey=${API_KEY}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
  } catch (err) {
    console.error(err);
  }
}
// [GET] Comics spiderman 리스트
export async function apiGetComicsSpi() {
  try {
    return await fetch(`${BASE_URL}/comics?titleStartsWith=Spi&orderBy=-modified&apikey=${API_KEY}`, {
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
    return await fetch(`${BASE_URL}/events?orderBy=-startDate&limit=10&apikey=${API_KEY}`, {
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

// params: id
// [GET] Characters 디테일
export async function apiGetCharactersDetail({ queryKey }) {
  try {
    return await fetch(`${BASE_URL}/characters/${queryKey[1].id}?apikey=${API_KEY}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
  } catch (err) {
    console.error(err);
  }
}

export async function apiPostMail(data) {
  try {
    return await fetch("https://script.google.com/macros/s/AKfycbxXxNboj8sywKXdcMWR6xaHTYGG_To3BDG-MEDexDVnZzRzthK5S7MAaQH-Y6R0TnQ/exec", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: qs.stringify(data),
    }).then((res) => res.json());
  } catch (e) {
    console.error(e);
  }
}
