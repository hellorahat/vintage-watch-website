import { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import watch1 from "../assets/carouselWatches/cartier.jpg";
import watch2 from "../assets/carouselWatches/omega-watches-hero-1.jpg";
import watch3 from "../assets/carouselWatches/john-torcasio-133Vq4tTpBQ-unsplash.jpg";
import Watch from "../components/Watch.jsx";
import watchesData from "../components/watches.json";
import "../styles/Home.css";
import iconFavorite from "../assets/favorite.svg";
import { Link } from "react-router-dom";
import { loadAllImages, retrieveSource } from "../utility/retrieveSource.jsx";
import { useFavorites } from "../utility/FavoritesContext.jsx";
import { useAlerts } from "../utility/AlertContext.jsx";
import "../styles/Product.css";
import { useCart } from "../utility/CartContext.jsx";

function Home() {
  const [watches, setWatches] = useState([]);
  const [filteredWatches, setFilteredWatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const targetDate = "2024-11-03";
  const { favorites, addFavorite } = useFavorites();
  const { addAlert } = useAlerts();
  const { addCart } = useCart();

  useEffect(() => {
    const watchInstances = watchesData.map((item) => new Watch(item));
    setWatches(watchInstances);
    const filteredWatches = watchInstances.filter(
      (watch) => watch.DateAdded === targetDate
    );
    setFilteredWatches(filteredWatches);

    const fetchImages = async () => {
      await loadAllImages();
      setLoading(false);
    };
    fetchImages();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="home_container">
        <div className="carousel">
          <Carousel data-bs-theme="dark">
            <Carousel.Item>
              <img className="d-block w-100" src={watch1} alt="First slide" />
              <Carousel.Caption>
                <Link to="/catalog" className="watch-caption">
                  Cartier
                </Link>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={watch2} alt="Second slide" />
              <Carousel.Caption>
                <Link to="/catalog" className="watch-caption">
                  Omega
                </Link>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={watch3} alt="Third slide" />
              <Carousel.Caption>
                <Link to="/catalog" className="watch-caption">
                  Rolex
                </Link>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
        <hr />
        <div className="watch-list-home">
          {filteredWatches.length > 0 ? (
            filteredWatches.map((watch) => (
              <div key={watch.id} className="watch-card">
                <Link className="product" to={`/product/${watch.id}`}>
                  <img
                    className="watch-image"
                    src={retrieveSource(watch.image)}
                    alt={watch.model}
                  />
                  <h5 className="watch-brand">{watch.brand}</h5>
                  <h6 className="watch-model">{watch.model}</h6>
                  <h4 className="watch-price">${watch.price}</h4>
                </Link>
                <div
                  className="watch-button"
                  onClick={() => {
                    addAlert("Added to Cart!");
                    addCart(watch);
                  }}
                >
                  {
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 64 61"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.66663 2.66667H13.3333L20.48 38.3733C20.7238 39.6011 21.3917 40.7039 22.3667 41.4888C23.3418 42.2737 24.5618 42.6907 25.8133 42.6667H51.7333C52.9848 42.6907 54.2048 42.2737 55.1798 41.4888C56.1549 40.7039 56.8228 39.6011 57.0666 38.3733L61.3333 16H16M26.6666 56C26.6666 57.4728 25.4727 58.6667 24 58.6667C22.5272 58.6667 21.3333 57.4728 21.3333 56C21.3333 54.5272 22.5272 53.3333 24 53.3333C25.4727 53.3333 26.6666 54.5272 26.6666 56ZM56 56C56 57.4728 54.806 58.6667 53.3333 58.6667C51.8605 58.6667 50.6666 57.4728 50.6666 56C50.6666 54.5272 51.8605 53.3333 53.3333 53.3333C54.806 53.3333 56 54.5272 56 56Z"
                        stroke="#1E1E1E"
                        stroke-width="4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  }
                </div>
                <div
                  className="heart-button"
                  onClick={() => {
                    const exists = favorites.some(
                      (favorite) => favorite.id === watch.id
                    );
                    if (!exists) addAlert("Added to Favorites!");
                    addFavorite(watch);
                  }}
                >
                  <img
                    className="favorite-icon"
                    src={iconFavorite}
                    alt="Favorite"
                  />
                </div>
              </div>
            ))
          ) : (
            <p>No watches found for the selected date.</p>
          )}
        </div>
      </div>
    </>
  );
}

export default Home;
