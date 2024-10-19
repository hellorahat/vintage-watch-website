import { useMediaQuery } from 'react-responsive';

import logo from './assets/Logo.svg'
import iconSearch from './assets/search.svg'
import iconAccount from './assets/account.svg'
import iconFavorite from './assets/favorite.svg'
import iconCart from './assets/cart.svg'
import './styles/NavBar.css'

function NavBar() {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });


    return (
        <>
            {isMobile ? <MobileLayout /> : <DesktopLayout />}
        </>
    )
}

function MobileLayout() {
    return (
        <h1>Mobile Layout</h1>
    )
}

function DesktopLayout() {
    return (
        <>
            <nav className="navbar bg-body-tertiary" style={{backgroundColor: '#EEEEEE'}}>
                <div className="container-fluid">
                    {/* Logo */}
                    <a className="navbar-brand" href="#">
                        <img src={logo} alt="Logo" width="50" height="50" />
                        <span className="custom-text">Vintage Watch Co.</span>
                    </a>

                    {/* Navigation Buttons */}
                    <div className="d-flex ms-auto"> {/* Use ms-auto for margin start auto to push items to the right */}
                        <button className="btn" style={{ marginLeft: '8px' }}>
                            <img src={iconSearch} alt="Search" width="30" height="30" />
                        </button>
                        <button className="btn" style={{ marginLeft: '8px' }}>
                            <img src={iconAccount} alt="Account" width="30" height="30" />
                        </button>
                        <button className="btn" style={{ marginLeft: '8px' }}>
                            <img src={iconFavorite} alt="Favorite" width="30" height="30" />
                        </button>
                        <button className="btn" style={{ marginLeft: '8px' }}>
                            <img src={iconCart} alt="Cart" width="30" height="30" />
                        </button>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar