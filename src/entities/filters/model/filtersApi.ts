import { baseApi } from "shared/api";

export const filtersApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAuthors: build.query({
      query: () => ({ url: "/authors", method: "get" }),
    }),
    getLocations: build.query({
      query: () => ({ url: "/locations", method: "get" }),
    }),
  }),
});

export const { useGetAuthorsQuery, useGetLocationsQuery } = filtersApi;
