import { useState, useEffect } from "react";
import Sidebar from "../pages/Sidebar.jsx";
import Watch from "../components/Watch.jsx";
import watchesData from "../components/watches.json";
import "../styles/Catalog.css";
import iconFavorite from '../assets/favorite.svg'
import { loadAllImages, retrieveSource } from "../utility/retrieveSource.jsx";
import { useFavorites } from "../utility/FavoritesContext.jsx";
import { useAlerts } from "../utility/AlertContext.jsx";

function Catalog() {
  const [watches, setWatches] = useState([]);
  const [filteredWatches, setFilteredWatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const { favorites, addFavorite } = useFavorites();
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
              <img
                className="watch-image"
                src={retrieveSource(watch.image)}
                alt={watch.model}
              />
               <div
                className="watch-button"
                onClick={() => addToCart(watch)}
              >
                <svg width="35" height="30" viewBox="0 0 64 61" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.66663 2.66667H13.3333L20.48 38.3733C20.7238 39.6011 21.3917 40.7039 22.3667 41.4888C23.3418 42.2737 24.5618 42.6907 25.8133 42.6667H51.7333C52.9848 42.6907 54.2048 42.2737 55.1798 41.4888C56.1549 40.7039 56.8228 39.6011 57.0666 38.3733L61.3333 16H16M26.6666 56C26.6666 57.4728 25.4727 58.6667 24 58.6667C22.5272 58.6667 21.3333 57.4728 21.3333 56C21.3333 54.5272 22.5272 53.3333 24 53.3333C25.4727 53.3333 26.6666 54.5272 26.6666 56ZM56 56C56 57.4728 54.806 58.6667 53.3333 58.6667C51.8605 58.6667 50.6666 57.4728 50.6666 56C50.6666 54.5272 51.8605 53.3333 53.3333 53.3333C54.806 53.3333 56 54.5272 56 56Z" stroke="#1E1E1E" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
              </div>
              <h5 className="watch-brand">{watch.brand}</h5>
              <h6 className="watch-model">{watch.model}</h6>
              <h4 className="watch-price">${watch.price}</h4>
              <div className="heart-button" onClick={() => {
                const exists = favorites.some(favorite => favorite.id === watch.id);
                if(!exists) addAlert("Added to Favorites!");
                addFavorite(watch);
              }}>
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
