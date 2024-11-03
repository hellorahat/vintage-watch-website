import { useMediaQuery } from "react-responsive";
import stats from "../assets/about-us.jpg";
import newImage from "../assets/newImage.jpg"; // Import the image directly
import "../styles/AboutUs.css";
import BlurryImageLoader from "../components/BlurryImageLoader";

function AboutUs() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return <>{isMobile ? <MobileLayout /> : <DesktopLayout />}</>;
}

function MobileLayout() {
  return (
    <div>
      <h1>Mobile About Us</h1>
    </div>
  );
}

function DesktopLayout() {
  return (
    <div>
      <br/><br/>
      <h1 className="who">Who We Are</h1>
      
      <div className="who">
        Welcome to Vintage Watch Co., where time-honored craftsmanship meets
        modern elegance. We are passionate collectors and enthusiasts of vintage
        watches, dedicated to curating a remarkable selection of timepieces that
        tell a story.
        <br />
        <br />
      </div>
      <div className="bannerBox">
        <img className="banner" src={stats} alt="About Us Banner" />
      </div>
      <br />
      <br />
      <h1 className="who">Our Collection</h1>
     
      <div className="who">
        Our carefully curated collection features a diverse range of vintage
        watches from renowned brands, each with its unique charm and character.
        Whether you are a seasoned collector or new to the world of vintage
        watches, we strive to offer a selection that caters to every taste and
        occasion.
      </div>
      <br />
      <br />
      <div>
        <BlurryImageLoader
          src={newImage} // Use the imported image directly
          alt="Vintage Watch" // Updated alt text
        />
      </div>
    </div>
    
  );
}

export default AboutUs;
