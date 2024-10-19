import { useMediaQuery } from 'react-responsive';


function Catalog() {
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
            <h1>Mobile Catalog</h1>
        </div>
    )
}

function DesktopLayout() {
    return (
        <div>
            <h1>Desktop Catalog</h1>
        </div>
    )
}


export default Catalog