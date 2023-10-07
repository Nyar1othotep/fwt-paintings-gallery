import { TData } from "../model/types";

export const mapPaintings = (data: TData) =>
  data.paintings.map((painting) => ({
    ...painting,
    authorId: data.authors[(painting.authorId as number) - 1].name,
    locationId: data.locations[(painting.locationId as number) - 1].name,
  }));
