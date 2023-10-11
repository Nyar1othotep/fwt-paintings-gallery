// Features
import {
  selectFilters,
  useGetAuthorsQuery,
  useGetLocationsQuery,
} from "@/features/filters";

// Entities
import { useGetPaintingsQuery, mapPaintings } from "@/entities/paintings";

// Shared
import { useAppSelector } from "@/shared/lib";
import { Spinner } from "@/shared/ui";

import { PaintingsList } from "../PaintingsList/PaintingsList";
import { PaintingsPaginate } from "../PaintingsPaginate/PaintingsPaginate";

export function PaintingsLayout() {
  const filters = useAppSelector(selectFilters);
  const {
    data: paintings,
    isSuccess: isPSuccess,
    isFetching,
    isError,
  } = useGetPaintingsQuery(filters);
  const { data: authors, isSuccess: isASuccess } = useGetAuthorsQuery({});
  const { data: locations, isSuccess: isLSuccess } = useGetLocationsQuery({});

  if (isFetching) {
    return <Spinner />;
  }

  if (isError)
    return <div>Oops... Something went wrong. Please, reload the page.</div>;

  if (paintings && paintings.data.length === 0)
    return <div>There are no results found. Please try another search.</div>;

  if (!isPSuccess || !isASuccess || !isLSuccess) {
    return null;
  }

  return (
    <>
      <PaintingsList
        paintings={mapPaintings({
          paintings: paintings.data,
          authors,
          locations,
        })}
      />
      <PaintingsPaginate totalCount={paintings.totalCount} />
    </>
  );
}
