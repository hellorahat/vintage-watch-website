import { useMediaQuery } from 'react-responsive';
import '../styles/RedirectoryBar.css'
import { NavLink } from 'react-router-dom';

function RedirectoryBar() {

    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });


    return (
        <>
            {isMobile ? <MobileLayout /> : <DesktopLayout />}
        </>
    );
};

function MobileLayout() {
    return (
        <h1>Mobile Redirectory Bar</h1>
    );
};

function DesktopLayout() {

    return (
        <>
            <nav className="redirectory">
                <div className="container-fluid">
                    <NavLink to="/" className="btn" activeClassName="active">New Arrivals</NavLink>
                    <NavLink to="/Catalog" className="btn" activeClassName="active">Catalog</NavLink>
                    <NavLink to="/about-us" className="btn" activeClassName="active">About Us</NavLink>
                    <NavLink to="/contact-us" className="btn" activeClassName="active">Contact Us</NavLink>
                </div>
            </nav>
        </>
    )
}

export default RedirectoryBar