// src/components/LazyImage.tsx
import { useEffect, useRef, useState } from "react";

interface LazyImageProps
  extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
}

const LazyImage = ({ src, alt, ...rest }: LazyImageProps) => {
  const imgRef = useRef<HTMLImageElement | null>(null);
  const [loadedSrc, setLoadedSrc] = useState<string | null>(null);

  useEffect(() => {
    const imgEl = imgRef.current;
    if (!imgEl) return;

    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setLoadedSrc(src);
              obs.unobserve(entry.target);
            }
          });
        },
        {
          rootMargin: "50px 0px",
          threshold: 0.01,
        }
      );

      observer.observe(imgEl);
      return () => observer.disconnect();
    } else {
      // Fallback: just load it
      setLoadedSrc(src);
    }
  }, [src]);

  return (
    <img
      ref={imgRef}
      src={
        loadedSrc ??
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E"
      }
      alt={alt}
      className={`lazy ${loadedSrc ? "lazy-loaded" : ""} ${
        rest.className ?? ""
      }`.trim()}
      {...rest}
    />
  );
};

export default LazyImage;
