import { axiosBaseQuery } from "@/helpers/axios/axiosBaseQuery";
import { baseUrl } from "@/helpers/config";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: axiosBaseQuery({ baseUrl: baseUrl() }),
  endpoints: (builder) => ({}),
  tagTypes: ["user"],
});
