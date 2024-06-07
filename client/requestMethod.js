import axios from "axios";

export const publicRequest = axios.create({
  baseURL: process.env.VITE_API_URL,
});
