import axios from "axios";

export const http = axios.create({
  baseURL: process.env.BASE_URL || "http://localhost:3333",
  headers: {
    "Content-Type": "application/json",
  },
});
