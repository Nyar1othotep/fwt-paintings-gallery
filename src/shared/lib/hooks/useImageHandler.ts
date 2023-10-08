import { useEffect, useRef } from "react";

export const useImageHandler = (imageUrl: string) => {
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const imageElement = imageRef.current;

    if (imageElement) {
      imageElement.src = imageUrl;

      return () => {
        imageElement.src = "";
      };
    }

    return undefined;
  }, [imageUrl]);

  return [imageRef];
};
