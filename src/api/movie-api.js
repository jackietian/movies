import { url, apiKey } from "./omdb-api";
import axios from "axios";

export const fetchMovies = query =>
  axios.get(url, { params: { apiKey, ...query } });
