import Pagination from "react-js-pagination";
import cn from "classnames";

// Entities
import { selectFilters, setFilters } from "@/entities/filters";

// Shared
import { useAppDispatch, useAppSelector } from "@/shared/lib";

import { ReactComponent as IconArrow } from "../assets/arrow.svg";
import { ReactComponent as IconDoubleArrow } from "../assets/double-arrow.svg";
import styles from "./PagePaginate.module.scss";

interface IPagePaginate {
  totalCount: number;
}

export function PagePaginate({ totalCount }: IPagePaginate) {
  const dispatch = useAppDispatch();
  const { _page, _limit } = useAppSelector(selectFilters);

  const handlePageChange = (value: number): void => {
    dispatch(setFilters({ _page: value }));
  };

  return (
    <section className={styles.root}>
      <Pagination
        // Counts
        activePage={_page}
        itemsCountPerPage={_limit}
        totalItemsCount={totalCount}
        pageRangeDisplayed={3}
        // Classes
        innerClass={styles.list}
        itemClass={styles.item}
        itemClassFirst={styles.firstItem}
        itemClassLast={styles.lastItem}
        linkClass="pagination-text"
        activeClass={styles.active}
        disabledClass={styles.disabled}
        // Icons
        firstPageText={<IconDoubleArrow className={styles.prevSvg} />}
        prevPageText={
          <IconArrow className={cn(styles.arrowSvg, styles.prevSvg)} />
        }
        nextPageText={<IconArrow className={styles.arrowSvg} />}
        lastPageText={<IconDoubleArrow />}
        // Handlers
        onChange={handlePageChange}
      />
    </section>
  );
}
