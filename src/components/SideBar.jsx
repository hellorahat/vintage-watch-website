import { useMediaQuery } from 'react-responsive';
import { useState, useEffect, useRef } from 'react';
import "../styles/SideBar.css"

function SideBar() {

    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });


    return (
        <>
            {isMobile ? <MobileLayout /> : <DesktopLayout />}
        </>
    );

};

function MobileLayout() {
    return (
        <h1>Mobile NavBar</h1>
    );
};

function DesktopLayout() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="sidebar">
            <ul>
                <li>
                    <button onClick={toggleDropdown}>
                        Type of Watch
                        {isOpen ? <span className="arrow up" /> : <span className="arrow down" />}
                    </button>
                    {isOpen && (
                        <ul className="dropdown">
                            <li>Product 1</li>
                            <li>Product 2</li>
                        </ul>
                    )}
                </li>
            </ul>
        </div>
    );
};

export default SideBar