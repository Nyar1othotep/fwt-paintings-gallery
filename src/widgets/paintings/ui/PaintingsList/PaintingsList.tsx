// Entities
import { PaintingCard, type TDto } from "@/entities/paintings";

import styles from "./PaintingsList.module.scss";

interface IPaintingsList {
  paintings: TDto[];
}

export function PaintingsList({ paintings }: IPaintingsList) {
  return (
    <section className={styles.root}>
      <ul className={styles.list}>
        {paintings.map(
          ({ id, authorId, created, imageUrl, locationId, name }) => (
            <PaintingCard
              key={id}
              authorId={authorId}
              created={created}
              imageUrl={imageUrl}
              locationId={locationId}
              name={name}
            />
          ),
        )}
      </ul>
    </section>
  );
}
