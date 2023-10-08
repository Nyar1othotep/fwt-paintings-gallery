import type { SyntheticEvent } from "react";

import { useImageHandler } from "../../lib";

interface IImage {
  imageUrl: string;
  width: number;
  height: number;
  alt: string;
}

export function Image({ imageUrl, width, height, alt }: IImage) {
  const [imageRef] = useImageHandler(imageUrl);

  const onImageError = (e: SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = "/images/not-found.jpg";
  };

  return (
    <img
      ref={imageRef}
      alt={alt}
      width={`${width}px`}
      height={`${height}px`}
      onError={onImageError}
    />
  );
}
