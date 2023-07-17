import axios from "axios";
import { BASE_URL } from "@/constants";

export const axiosInstanceTasks = axios.create({
  baseURL: BASE_URL
});
