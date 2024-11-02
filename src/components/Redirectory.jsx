import { NavLink } from "react-router-dom";
import "../styles/RedirectoryBar.css";

function Redirectory() {
  return (
    <nav className="redirectory">
      <div className="Rcontainer-fluid">
        <NavLink to="/" className="btn" activeClassName="active">
          New Arrivals
        </NavLink>
        <NavLink to="/catalog" className="btn" activeClassName="active">
          Catalog
        </NavLink>
        <NavLink to="/about-us" className="btn" activeClassName="active">
          About Us
        </NavLink>
        <NavLink to="/contact-us" className="btn" activeClassName="active">
          Contact Us
        </NavLink>
      </div>
    </nav>
  );
}

export default Redirectory;
