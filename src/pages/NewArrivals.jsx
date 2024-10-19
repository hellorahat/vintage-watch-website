import { useMediaQuery } from 'react-responsive';


function NewArrivals() {
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
            <h1>Mobile New Arrivals</h1>
        </div>
    )
}

function DesktopLayout() {
    return (
        <div>
            <h1>Desktop New Arrivals</h1>
        </div>
    )
}


export default NewArrivals