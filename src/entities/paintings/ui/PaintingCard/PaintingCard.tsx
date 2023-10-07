import type { TDto } from "../../model/types";
import styles from "./PaintingCard.module.scss";

export function PaintingCard({
  authorId,
  created,
  imageUrl,
  locationId,
  name,
}: TDto) {
  return (
    <li className={styles.root}>
      <div className={styles.img}>
        <img src={imageUrl} alt={name} width="360px" height="275px" />
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
