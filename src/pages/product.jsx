import { useMediaQuery } from 'react-responsive';


function product() {
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
            <h1>Mobile Home</h1>
        </div>
    )
}

function DesktopLayout() {
    return (
        <div>
            <h1>Desktop product page</h1>
            hello
        </div>
    )
}


export default product