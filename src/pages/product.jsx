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

      <h2>{watch.brand}</h2>
      <h3>{watch.model}</h3>
      <table id="product-details">
        <tr>
          <td>
            <p>Price: ${watch.price}</p>
          </td>
        </tr>
        <tr>
          <td>
            <p>Release Date: {watch.release}</p>
          </td>
        </tr>
        <tr>
          <td>
            <p>Type: {watch.type}</p>
          </td>
        </tr>
        <tr>
          <td>
            <p>Diameter: {watch.diameter}</p>
          </td>
        </tr>
        <tr>
          <td>
            <p>Shape: {watch.shape}</p>
          </td>
        </tr>
        <tr>
          <td>
            <p>Description: {watch.description}</p>
          </td>
        </tr>
      </table>
    </div>
  );
}
export default Product;
