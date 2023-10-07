import type { TLocation } from "../model/types";

export const mapLocations = (response: TLocation[]) =>
  response.map((location) => ({
    id: location.id,
    name: location.location,
  }));
