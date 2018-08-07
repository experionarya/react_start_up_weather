import axios from "axios";

const API_KEY = "73ba4cd49a128058fd9a30a5d53c1253";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = "FETCH_WEATHER";

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city}`;
  console.log(url)
  const request = axios.get(url);
console.log("-------------------", request);
  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
