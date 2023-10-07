import { useInView } from "react-intersection-observer";

import { useBreakpoint } from "../../lib/useBreakpoint";
import type { TDto } from "../../model/types";
import styles from "./PaintingCard.module.scss";

export function PaintingCard({
  authorId,
  created,
  imageUrl,
  locationId,
  name,
}: TDto) {
  const [isSmallView] = useBreakpoint(767);
  const { ref, inView } = useInView({
    rootMargin: isSmallView ? "800px" : "400px",
    threshold: 0,
    triggerOnce: true,
  });

  return (
    <li ref={ref} className={styles.root}>
      <div className={styles.img}>
        {inView && (
          <img src={imageUrl} alt={name} width="360px" height="275px" />
        )}
      </div>
      <div className={styles.content}>
        <h1 className="text-collapse">{name}</h1>
        <ul className={styles.list}>
          <li>
            <h3>Author:</h3>
            <span className="text-collapse">{authorId}</span>
          </li>
          <li>
            <h3>Created:</h3>
            <span className="text-collapse">{created}</span>
          </li>
          <li>
            <h3>Location:</h3>
            <span className="text-collapse">{locationId}</span>
          </li>
        </ul>
      </div>
    </li>
  );
}
