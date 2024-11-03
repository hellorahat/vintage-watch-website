import { useState, useEffect } from "react";
import Sidebar from "../pages/Sidebar.jsx";
import Watch from "../components/Watch.jsx";
import watchesData from "../components/watches.json";
import "../styles/Catalog.css";
import { firestore } from "../../firebase";
import { doc, setDoc, collection } from "firebase/firestore";
import { loadAllImages, retrieveSource } from "../utility/retrieveSource.jsx";
import { useFavorites } from "../utility/addToFavorites.jsx";

function Catalog() {
  const [watches, setWatches] = useState([]);
  const [filteredWatches, setFilteredWatches] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const watchInstances = watchesData.map((item) => new Watch(item));
    setWatches(watchInstances);
    setFilteredWatches(watchInstances);
    const fetchImages = async () => {
      await loadAllImages();
      setLoading(false);
    };
    fetchImages();
  }, []);

  const addToFavorites = async (watch) => {
    try {
      const favoritesRef = doc(collection(firestore, "favorites"), watch.id);
      await setDoc(favoritesRef, {
        brand: watch.brand,
        model: watch.model,
        image: watch.image,
        price: watch.price,
      });
      alert(`${watch.model} added to favorites!`);
    } catch (error) {
      console.error("Error adding to favorites:", error);
    }
  };

  const handleFilterChange = (selectedFilters) => {
    let filtered = watches;
    if (selectedFilters.type.length) {
      filtered = filtered.filter((watch) =>
        selectedFilters.type.includes(watch.type)
      );
    }
    if (selectedFilters.brand.length) {
      filtered = filtered.filter((watch) =>
        selectedFilters.brand.includes(watch.brand)
      );
    }
    if (selectedFilters.model.length) {
      filtered = filtered.filter((watch) =>
        selectedFilters.model.includes(watch.model)
      );
    }
    if (selectedFilters.color.length) {
      filtered = filtered.filter((watch) =>
        selectedFilters.color.includes(watch.color)
      );
    }
    if (selectedFilters.releaseDate.length) {
      filtered = filtered.filter((watch) =>
        selectedFilters.releaseDate.includes(watch.releaseDate)
      );
    }
    if (selectedFilters.diameter.length) {
      filtered = filtered.filter((watch) =>
        selectedFilters.diameter.includes(watch.diameter)
      );
    }
    if (selectedFilters.shape.length) {
      filtered = filtered.filter((watch) =>
        selectedFilters.shape.includes(watch.shape)
      );
    }
    setFilteredWatches(filtered);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="catalog-container">
      <Sidebar onFilterChange={handleFilterChange} />
      <div className="watch-list">
        {filteredWatches.length > 0 ? (
          filteredWatches.map((watch) => (
            <div key={watch.id} className="watch-card">
              {console.log(retrieveSource(watch.image))}
              <img
                className="watch-image"
                src={retrieveSource(watch.image)}
                alt={watch.model}
              />
              <h5 className="watch-brand">{watch.brand}</h5>
              <h6 className="watch-model">{watch.model}</h6>
              <h4 className="watch-price">${watch.price}</h4>
              <div
                className="like-button"
                onClick={() => addToFavorites(watch)}
              >
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 60 53"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M53.5733 6.29333C52.2113 4.93068 50.5942 3.84972 48.8143 3.11222C47.0344 2.37473 45.1266 1.99513 43.2 1.99513C41.2734 1.99513 39.3656 2.37473 37.5857 3.11222C35.8058 3.84972 34.1887 4.93068 32.8267 6.29333L30 9.12L27.1733 6.29333C24.4221 3.54216 20.6907 1.99656 16.8 1.99656C12.9092 1.99656 9.17784 3.54216 6.42666 6.29333C3.67548 9.04451 2.12988 12.7759 2.12988 16.6667C2.12988 20.5574 3.67548 24.2888 6.42666 27.04L30 50.6133L53.5733 27.04C54.936 25.678 56.0169 24.0608 56.7544 22.2809C57.4919 20.5011 57.8715 18.5933 57.8715 16.6667C57.8715 14.74 57.4919 12.8323 56.7544 11.0524C56.0169 9.2725 54.936 7.65535 53.5733 6.29333Z"
                    stroke="#1E1E1E"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          ))
        ) : (
          <p>No watches found with the selected filters.</p>
        )}
      </div>
    </div>
  );
}

export default Catalog;
