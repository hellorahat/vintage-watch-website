import React, { useEffect, useState } from "react";
import watchesData from "../components/watches.json";
import "../styles/Product.css";
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
      <img
        src={retrieveSource(watch.image)}
        alt={watch.model}
        className="product-image"
        style={{ height: "350px", width: "350px" }}
      />
      <hr />
      <h2 className="text-brand">{watch.brand}</h2>
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
      <button
        className="mb-3 btn btn-success"
        variant="contained"
        color="success"
        style={{
          marginLeft: "225px",
          paddingLeft: "100px",
          paddingRight: "100px",
        }}
      >
        Add to Cart
      </button>
    </div>
  );
}
export default Product;
