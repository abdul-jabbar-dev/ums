import { authKey } from "@/constance/storageKey";
import { getLocalStorage } from "@/utils/local.store";
import axios from "axios";

const axiosInstance = axios.create();
axiosInstance.defaults.headers.post["Content-Type"] = "application/json";
axiosInstance.defaults.headers["accept"] = "application/json";
axiosInstance.defaults.timeout = 60000;

// Add a request interceptor
axiosInstance.interceptors.request.use(
  function (config) {
    const token = getLocalStorage(authKey);
    if (token) {
      config.headers.Authorization = token;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  function (response): any {
    return { data: response?.data?.data, meta: response?.data.meta };
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default axiosInstance;
