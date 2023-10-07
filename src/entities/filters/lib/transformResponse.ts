import type { TLocation } from "../model/types";

export const transformResponse = (response: TLocation[]) =>
  response.map((location) => ({
    id: location.id,
    name: location.location,
  }));
