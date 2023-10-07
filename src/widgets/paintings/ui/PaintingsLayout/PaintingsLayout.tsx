// Entities
import { useGetPaintingsQuery, mapPaintings } from "@/entities/paintings";
import {
  selectFilters,
  useGetAuthorsQuery,
  useGetLocationsQuery,
} from "@/entities/filters";

// Shared
import { useAppSelector } from "@/shared/lib";

import { PaintingsList } from "../PaintingsList/PaintingsList";

export function PaintingsLayout() {
  const filters = useAppSelector(selectFilters);
  const { data: paintings, isSuccess: isPSuccess } =
    useGetPaintingsQuery(filters);
  const { data: authors, isSuccess: isASuccess } = useGetAuthorsQuery({});
  const { data: locations, isSuccess: isLSuccess } = useGetLocationsQuery({});

  if (isPSuccess && isASuccess && isLSuccess) {
    const mappedPaintings = mapPaintings({
      paintings: paintings.data,
      authors,
      locations,
    });

    return <PaintingsList paintings={mappedPaintings} />;
  }
}
