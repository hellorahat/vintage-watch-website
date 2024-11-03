import { useEffect, useState } from "react";
import "../styles/BlurryImageLoader.css"; // Import the CSS for the loader

function BlurryImageLoader({ src, alt }) {
  const [loading, setLoading] = useState(true);
  const [loadPercentage, setLoadPercentage] = useState(0);

  useEffect(() => {
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
          return prev;
        }
      });
    }, intervalTime);

    const img = new Image();
    img.src = src;

    // On image load, clear the loading state after the increment is complete
    img.onload = () => {
      setTimeout(() => setLoading(false), 1000); // Delay for 1 second before hiding the loading overlay
    };

    // Cleanup interval on unmount or change
    return () => clearInterval(interval);
  }, [src]);

  return (
    <div className="image-container">
      <img
        className="loaded-image"
        src={src}
        alt={alt}
        style={{
          filter: `blur(${scale(loadPercentage, 0, 100, 30, 0)}px)`,
          transition: "filter 0.3s ease", // Smooth transition for blur effect
        }}
      />
      {loading && (
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
