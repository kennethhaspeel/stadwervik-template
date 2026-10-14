import axios, { type AxiosInstance } from "axios";

import { GetAccessToken } from "./GetAccessToken";

const createAxiosClient = (): AxiosInstance => {
  return axios.create({
    baseURL: "/api",
  });
};

export const axiosClient = createAxiosClient();
axiosClient.interceptors.request.use(async (config) => {
  const token = await GetAccessToken();
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});
export default axiosClient;
