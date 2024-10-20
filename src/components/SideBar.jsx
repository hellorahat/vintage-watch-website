import { useMediaQuery } from 'react-responsive';
import { Dropdown } from 'bootstrap';

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
    return (
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Dropdown Button
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )

}
export default SideBar