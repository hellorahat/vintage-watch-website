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
    <div>
        <h1>Mobile New Arrivals</h1>
    </div>
}

function DesktopLayout() {
    <div>
        <h1>Desktop New Arrivals</h1>
    </div>
}


export default NewArrivals