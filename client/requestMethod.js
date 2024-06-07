import axios from "axios";
import.meta.env.VITE_API_URL;

export const publicRequest = axios.create({
  baseURL: VITE_API_URL,
});
