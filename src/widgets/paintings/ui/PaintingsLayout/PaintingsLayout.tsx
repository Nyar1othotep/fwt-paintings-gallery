// Entities
import { useGetPaintingsQuery, mapPaintings } from "@/entities/paintings";
import {
  selectFilters,
  useGetAuthorsQuery,
  useGetLocationsQuery,
} from "@/entities/filters";
import { PagePaginate } from "@/features/pagination";

// Shared
import { useAppSelector } from "@/shared/lib";
import { Spinner } from "@/shared/ui";

import { PaintingsList } from "../PaintingsList/PaintingsList";

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
    return <div>Упс... Что-то пошло не так. Перезагрузите страницу</div>;

  if (Array.isArray(paintings) && paintings.length === 0)
    return <div>Данных нет. Попробуйте ввести другие фильтры.</div>;

  if (isPSuccess && isASuccess && isLSuccess) {
    const mappedPaintings = mapPaintings({
      paintings: paintings.data,
      authors,
      locations,
    });

    return (
      <>
        <PaintingsList paintings={mappedPaintings} />
        <PagePaginate totalCount={paintings.totalCount} />
      </>
    );
  }
}
