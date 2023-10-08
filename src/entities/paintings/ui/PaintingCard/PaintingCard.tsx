import { useInView } from "react-intersection-observer";

// Shared
import { IMAGE_CDN_URL } from "@/shared/config";
import { Image } from "@/shared/ui";

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
          <Image
            imageUrl={`${IMAGE_CDN_URL + imageUrl}?tr=w-360,h-275`}
            alt={name}
            width={360}
            height={275}
          />
        )}
      </div>
      <div className={styles.content}>
        <h1 className="text-collapse">{name}</h1>
        <ul className={styles.list}>
          <li>
            <div className="subtitle">Author:</div>
            <span className="text-collapse">{authorId}</span>
          </li>
          <li>
            <div className="subtitle">Created:</div>
            <span className="text-collapse">{created}</span>
          </li>
          <li>
            <div className="subtitle">Location:</div>
            <span className="text-collapse">{locationId}</span>
          </li>
        </ul>
      </div>
    </li>
  );
}
