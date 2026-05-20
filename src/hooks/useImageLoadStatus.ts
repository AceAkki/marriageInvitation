import { useEffect } from "react";

const useImageLoadStatus = (ref: React.RefObject<HTMLDivElement>) => {
  useEffect(() => {
    console.log(ref.current);
    if (ref.current !== null) {
      const container: React.RefObject<HTMLDivElement> = ref.current;
      Promise.all(
        Array.from(container.querySelectorAll("img")).map(
          (img: HTMLImageElement): Promise<boolean> => {
            return new Promise((resolve) => {
              if (img.complete) {
                resolve(true);
              } else {
                img.onload = () => resolve(true);
                img.onerror = () => resolve(false);
              }
              // setTimeout(() => {
              // }, 2000);
            });
          },
        ),
      ).then((values) => {
        console.log(values);
        !values.includes(false) ? setImgStatus(true) : setImgStatus(false);
      });
    }
  }, [ref, imgStatus]);
};
