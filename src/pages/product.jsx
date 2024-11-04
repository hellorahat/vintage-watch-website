import React, { useEffect, useState } from "react";
import watchesData from "../components/watches.json"; // Adjust path as necessary
import "../styles/Product.css"; // Create a CSS file for styling
import { retrieveSource } from "../utility/retrieveSource.jsx";

function Product() {
  const currentUrl = window.location.href;
  const id = currentUrl.split("/")[5];
  const [watch, setWatch] = useState(null);
  useEffect(() => {
    const foundWatch = watchesData.find((watch) => watch.id === id);
    setWatch(foundWatch);
    console.log(foundWatch);
    console.log(id);
  }, [id]);

  if (!watch) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-page">
      <h1>Product</h1>
      <hr />
      <img
        src={retrieveSource(watch.image)}
        alt={watch.model}
        className="product-image"
      />
      <div className="product-details">
        <h2>{watch.brand}</h2>
        <h3>{watch.model}</h3>
        <p>Price: ${watch.price}</p>
        <p>Release Date: {watch.releaseDate}</p>
        <p>Type: {watch.type}</p>
        <p>Diameter: {watch.diameter}</p>
        <p>Shape: {watch.shape}</p>
        <p>Description: {watch.description}</p>
      </div>
    </div>
  );
}
export default Product;
