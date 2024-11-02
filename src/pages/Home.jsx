import { useMediaQuery } from "react-responsive";
import Carousel from "react-bootstrap/Carousel";
import watch1 from "../assets/carouselWatches/cartier.jpg";
import watch2 from "../assets/carouselWatches/omega-watches-hero-1.jpg";
import watch3 from "../assets/carouselWatches/john-torcasio-133Vq4tTpBQ-unsplash.jpg";
import "../styles/Carousel.css";
import "../styles/Home.css";

import { Link } from "react-router-dom";

function Home() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return <>{isMobile ? <MobileLayout /> : <DesktopLayout />}</>;
}

function MobileLayout() {
  return (
    <div>
      <h1>Mobile Home</h1>
    </div>
  );
}

function DesktopLayout() {
  return (
    <>
      <div>
        <Link to="/clock">
          test
          <br />
        </Link>
        <Link to="/product">test2</Link>
      </div>
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
      </div>
    </>
  );
}

export default Home;
