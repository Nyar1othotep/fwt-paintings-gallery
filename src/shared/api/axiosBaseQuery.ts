import type { BaseQueryFn } from "@reduxjs/toolkit/dist/query/baseQueryTypes";

import type { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import axios from "axios";

export const axiosBaseQuery =
  (
    { baseUrl }: { baseUrl: string } = { baseUrl: "" },
  ): BaseQueryFn<
    {
      url: string;
      method: AxiosRequestConfig["method"];
      data?: AxiosRequestConfig["data"];
      params?: AxiosRequestConfig["params"];
    },
    unknown,
    unknown
  > =>
  async ({ url, method, data, params }) => {
    try {
      const response: AxiosResponse = await axios({
        url: baseUrl + url,
        method,
        data,
        params,
      });

      return {
        data: response.data,
        meta: {
          headers: response.headers,
        },
      };
    } catch (axiosError) {
      const err = axiosError as AxiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };
