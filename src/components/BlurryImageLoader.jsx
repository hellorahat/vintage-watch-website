import { useEffect, useState } from "react";
import "../styles/BlurryImageLoader.css"; // Import the CSS for the loader

function BlurryImageLoader({ src, alt }) {
  const [loading, setLoading] = useState(true);
  const [loadPercentage, setLoadPercentage] = useState(0);
  const [imgLoaded, setImgLoaded] = useState(false); // State to track if the image has loaded

  useEffect(() => {
    const img = new Image();
    img.src = src;

    img.onload = () => {
      setImgLoaded(true); // Set imgLoaded to true when the image has loaded

      const intervalDuration = 5000; // 5 seconds
      const intervalStep = 100; // Total steps to reach 100%
      const intervalTime = intervalDuration / intervalStep; // Time for each increment

      // Start the loading percentage increment
      const interval = setInterval(() => {
        setLoadPercentage((prev) => {
          if (prev < 100) {
            return prev + 1; // Increment the load percentage
          } else {
            clearInterval(interval); // Clear the interval if it's complete
            setLoading(false); // Hide loading overlay
            return prev;
          }
        });
      }, intervalTime);
    };

    img.onerror = () => {
      console.error("Failed to load image:", src);
      setImgLoaded(false); // Optionally handle the error state
      setLoading(false); // Hide loading overlay on error
    };

    return () => clearInterval(interval); // Cleanup interval on unmount or change
  }, [src]);

  return (
    <div className="image-container">
      {imgLoaded && ( // Only render the image if it has loaded
        <img
          className="loaded-image"
          src={src}
          alt={alt}
          style={{
            filter: `blur(${scale(loadPercentage, 0, 100, 30, 0)}px)`,
            transition: "filter 0.3s ease", // Smooth transition for blur effect
          }}
        />
      )}
      {loading &&
        !imgLoaded && ( // Show loading overlay only when image is loading
          <div className="loading-container">
            <div className="bg" />
          </div>
        )}
    </div>
  );
}

// Utility function for scaling the blur effect
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

export default BlurryImageLoader;
