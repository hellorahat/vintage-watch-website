import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/RedirectoryBar.css'
import { NavLink } from 'react-router-dom';
import AccountMenu from '../components/AccountMenu'
import iconSearch from '../assets/search.svg'
import iconAccount from '../assets/account.svg'
import iconFavorite from '../assets/favorite.svg'
import iconCart from '../assets/cart.svg'
import logo from '../assets/Logo.svg'
import '../styles/NavBar.css'



function NavBar() {
    return (
        <>
            <DesktopLayout />
        </>
    );
};

function DesktopLayout() {
    const [isSearchVisible, setSearchVisible] = useState(false);
    const [isAccountVisible, setAccountVisible] = useState(false);

    const handleClickSearch = () => {
        setSearchVisible(prevState => !prevState);
    };
    const handleClickAccount = () => {
        setAccountVisible(prevState => !prevState);
    }

    const renderSearchBar = () => {
        {/* Conditionally render the search bar */ }
        if(isSearchVisible) return (
            <form className="d-flex" role="search">
                <input className="form-control active" type="search" placeholder="Search" aria-label="Search" />
            </form>
        ); else return (
            <form className="d-flex" role="search">
                <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
            </form>
        );
    };
    const renderAccountMenu = () => {
        return isAccountVisible && (
            <AccountMenu />
        )
    }

    return (
        <>
            <nav className="navbar bg-body-tertiary" style={{ backgroundColor: '#EEEEEE' }}>
                <div className="container-fluid">
                    {/* Logo */}
                    <Link to="//" className="navbar-brand">
                
                  
                       <img src={logo} alt="Logo" width="50" height="50" />
                        <span className="custom-text">Vintage Watch Co.</span>
                    </Link>

                    {/* Navigation Buttons */}
                    <div className="d-flex ms-auto"> {/* Use ms-auto for margin start auto to push items to the right */}
                        {renderSearchBar()}
                        <button className="btn" style={{ marginLeft: '8px' }} onClick={handleClickSearch}>
                            <img src={iconSearch} alt="Search" width="30" height="30" />
                        </button>
                        <button className="btn" style={{ marginLeft: '8px' }} onClick={handleClickAccount}>
                            <img src={iconAccount} alt="Account" width="30" height="30" />
                        </button>
                        <Link to="/favorites" className="btn" style={{ marginLeft: '8px' }}>
                            <img src={iconFavorite} alt="Favorite" width="30" height="30" />
                        </Link>
                        <Link to="/cart" className="btn" style={{ marginLeft: '8px' }}>
                            <img src={iconCart} alt="Cart" width="30" height="30" />
                        </Link>
                    </div>
                </div>
            </nav>
            <div className={`account-menu ${isAccountVisible ? 'active' : ''}`}>
                {renderAccountMenu()}
            </div>
            <nav className="redirectory">
                <div className="Rcontainer-fluid">
                    <NavLink to="/" className="btn" activeClassName="active">New Arrivals</NavLink>
                    <NavLink to="/catalog" className="btn" activeClassName="active">Catalog</NavLink>
                    <NavLink to="/about-us" className="btn" activeClassName="active">About Us</NavLink>
                    <NavLink to="/contact-us" className="btn" activeClassName="active">Contact Us</NavLink>
                </div>
            </nav>
        </>
    )
}

export default NavBar