import { useState } from "react";
import { Link } from "react-router-dom";
import AccountMenu from "../components/AccountMenu";
import { UserProvider } from "../utility/UserContext";
import iconSearch from "../assets/search.svg";
import iconAccount from "../assets/account.svg";
import iconFavorite from "../assets/favorite.svg";
import iconCart from "../assets/cart.svg";
import logo from "../assets/Logo.svg";
import "../styles/NavBar.css";

function NavBar() {
  return (
    <>
      <DesktopLayout />
    </>
  );
}

function DesktopLayout() {
  const [isSearchVisible, setSearchVisible] = useState(false);
  const [isAccountVisible, setAccountVisible] = useState(false);

  const handleClickSearch = () => {
    setSearchVisible((prevState) => !prevState);
  };
  const handleClickAccount = () => {
    setAccountVisible((prevState) => !prevState);
  };

  const renderSearchBar = () => {
    if (isSearchVisible)
      return (
        <form className="d-flex" role="search">
          <input
            className="form-control active"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
        </form>
      );
    else
      return (
        <form className="d-flex" role="search">
          <input
            className="form-control"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
        </form>
      );
  };
  const renderAccountMenu = () => {
    return (
      isAccountVisible && (
        <UserProvider>
          <AccountMenu />
        </UserProvider>
      )
    );
  };

  return (
    <>
      <nav
        className="navbar bg-body-tertiary fixed-top"
        style={{ top: "30px", backgroundColor: "#EEEEEE" }}
      >
        <div className="container-fluid">
          <Link to="//" className="navbar-brand">
            <img src={logo} alt="Logo" width="50" height="50" />
            <span className="custom-text">Vintage Watch Co.</span>
          </Link>

          <div className="d-flex ms-auto">
            {renderSearchBar()}
            <button
              id="main-nav-button"
              className="btn"
              style={{ marginLeft: "8px" }}
              onClick={handleClickSearch}
            >
              <img src={iconSearch} alt="Search" width="30" height="30" />
            </button>
            <button
              id="main-nav-button"
              className="btn"
              style={{ marginLeft: "8px" }}
              onClick={handleClickAccount}
            >
              <img src={iconAccount} alt="Account" width="30" height="30" />
            </button>
            <Link
              to="/favorites"
              id="main-nav-button"
              className="btn"
              style={{ marginLeft: "8px" }}
            >
              <img src={iconFavorite} alt="Favorite" width="30" height="30" />
            </Link>
            <Link
              to="/cart"
              id="main-nav-button"
              className="btn"
              style={{ marginLeft: "8px" }}
            >
              <img src={iconCart} alt="Cart" width="30" height="30" />
            </Link>
          </div>
        </div>
      </nav>
      <div className={`account-menu ${isAccountVisible ? "active" : ""}`}>
        {renderAccountMenu()}
      </div>
    </>
  );
}

export default NavBar;
