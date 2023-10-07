import { baseApi } from "@/shared/api";

import { transformResponse } from "../lib/transformResponse";
import type { TDto, TLocation } from "../model/types";

export const filtersApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAuthors: build.query<TDto[], object>({
      query: () => ({ url: "/authors", method: "get" }),
    }),
    getLocations: build.query<TDto[], object>({
      query: () => ({ url: "/locations", method: "get" }),
      transformResponse: (response: TLocation[]) => transformResponse(response),
    }),
  }),
});

export const { useGetAuthorsQuery, useGetLocationsQuery } = filtersApi;
