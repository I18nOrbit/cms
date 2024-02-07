import axios from "axios";

export const http = axios.create({
  baseURL: process.env.BASE_URL ||
    "https://cms-production-fed2.up.railway.app",
  headers: {
    "Content-Type": "application/json",
  },
});
