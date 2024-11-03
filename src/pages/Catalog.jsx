import { useState, useEffect } from "react";
import Sidebar from "../pages/Sidebar.jsx";
import Watch from "../components/Watch.jsx";
import watchesData from "../components/watches.json";
import "../styles/Catalog.css";
import { loadAllImages, retrieveSource } from "../utility/retrieveSource.jsx";
import { useFavorites } from "../utility/FavoritesContext.jsx";
import iconFavorite from "../assets/favorite.svg";
import { useAlerts } from "../utility/AlertContext.jsx";

function Catalog() {
  const [watches, setWatches] = useState([]);
  const [filteredWatches, setFilteredWatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addFavorite } = useFavorites();
  const { addAlert } = useAlerts();

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
              <div className="heart-button" onClick={() => addFavorite(watch)}>
                <img
                  className="favorite-icon"
                  src={iconFavorite}
                  alt="Favorite"
                />
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
