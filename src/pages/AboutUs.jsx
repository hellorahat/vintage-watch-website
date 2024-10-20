import { useMediaQuery } from 'react-responsive';


function AboutUs() {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

    return (
        <>
            {isMobile ? <MobileLayout /> : <DesktopLayout />}
        </>
    )
}

function MobileLayout() {
    return (
        <div>
            <h1>Mobile About Us</h1>
        </div>
    )
}

function DesktopLayout() {
    return (
        <div>
            <h1>Desktop About Us</h1>
        </div>
    )
}


export default AboutUs