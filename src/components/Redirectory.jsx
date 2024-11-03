import { Link, useLocation } from "react-router-dom";
import "../styles/RedirectoryBar.css";

function Redirectory() {
  const location = useLocation();

  return (
    <nav className="redirectory">
      <div className="Rcontainer-fluid">
        <Link
          to="//"
          className={`btn ${location.pathname === "/" ? "active" : ""}`}
        >
          New Arrivals
        </Link>
        <Link
          to="/catalog"
          className={`btn ${location.pathname === "/catalog" ? "active" : ""}`}
        >
          Catalog
        </Link>
        <Link
          to="/about-us"
          className={`btn ${location.pathname === "/about-us" ? "active" : ""}`}
        >
          About Us
        </Link>
        <Link
          to="/contact-us"
          className={`btn ${
            location.pathname === "/contact-us" ? "active" : ""
          }`}
        >
          Contact Us
        </Link>
      </div>
    </nav>
  );
}

export default Redirectory;
