import { Link } from "react-router-dom";
import "../styles/RedirectoryBar.css";

function Redirectory() {
  return (
    <nav className="redirectory">
      <div className="Rcontainer-fluid">
        <Link to="//" className="btn" activeClassName="active">
          New Arrivals
        </Link>
        <Link to="/catalog" className="btn" activeClassName="active">
          Catalog
        </Link>
        <Link to="/about-us" className="btn" activeClassName="active">
          About Us
        </Link>
        <Link to="/contact-us" className="btn" activeClassName="active">
          Contact Us
        </Link>
      </div>
    </nav>
  );
}

export default Redirectory;
