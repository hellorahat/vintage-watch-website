import { useMediaQuery } from 'react-responsive';


function ContactUs() {
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
            <h1>Mobile Contact Us</h1>
        </div>
    )
}

function DesktopLayout() {
    return (
        <div>
            <h1>Desktop Contact Us</h1>
        </div>
    )
}


export default ContactUs