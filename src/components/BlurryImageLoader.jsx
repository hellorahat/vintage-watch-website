import { useEffect, useState } from "react";
import "../styles/BlurryImageLoader.css";

function BlurryImageLoader({ src, alt }) {
  const [loading, setLoading] = useState(true);
  const [loadPercentage, setLoadPercentage] = useState(0);
  const [imgSrc, setImgSrc] = useState(null);

  useEffect(() => {
    const img = new Image();
    img.src = src;

    img.onload = () => {
      setImgSrc(src);
      const intervalDuration = 2500;
      const intervalStep = 100;
      const intervalTime = intervalDuration / intervalStep;

      const interval = setInterval(() => {
        setLoadPercentage((prev) => {
          if (prev < 100) {
            return prev + 1;
          } else {
            clearInterval(interval);
            setLoading(false);
            return prev;
          }
        });
      }, intervalTime);
    };

    img.onerror = () => {
      console.error("Failed to load image:", src);
      setLoading(false);
    };

    return () => {
      setImgSrc(null);
      setLoading(true);
    };
  }, [src]);

  return (
    <div className="image-container">
      {imgSrc && (
        <img
          className="loaded-image"
          src={imgSrc}
          alt={alt}
          style={{
            filter: `blur(${scale(loadPercentage, 0, 100, 30, 0)}px)`,
            transition: "filter 0.3s ease",
          }}
        />
      )}
      {loading && !imgSrc && (
        <div className="loading-container">
          <div className="bg" />
        </div>
      )}
    </div>
  );
}

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

export default BlurryImageLoader;
