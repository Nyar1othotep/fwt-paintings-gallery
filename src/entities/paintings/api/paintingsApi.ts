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
    }),
  }),
});

export const { useGetPaintingsQuery } = paintingsApi;
