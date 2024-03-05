import { BASE_URL } from "@/constants/baseUrl";
import axios from "axios";

const axiosClient = axios.create({
  baseURL: `${BASE_URL}`,
  withCredentials: true,
  headers: { "Content-Type": "application/json" },
  adapter: ["xhr", "http", "https"],
});

export default axiosClient;
