import type { AxiosResponse } from "axios";

// Shared
import { baseApi } from "@/shared/api";

import { TDto } from "../model/types";

export const paintingsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getPaintings: build.query<{ data: TDto[]; totalCount: number }, object>({
      query: (filters) => ({
        url: "/paintings",
        method: "get",
        params: filters,
      }),
      transformResponse: (response: TDto[], meta: AxiosResponse) => {
        return {
          data: response,
          totalCount: +meta.headers["x-total-count"],
        };
      },
    }),
  }),
});

export const { useGetPaintingsQuery } = paintingsApi;
