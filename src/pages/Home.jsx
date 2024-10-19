import { useMediaQuery } from 'react-responsive';


function Home() {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

    return (
        <>
            {isMobile ? <MobileLayout /> : <DesktopLayout />}
        </>
    )
}

function MobileLayout() {
    <div>
        <h1>Mobile Home</h1>
    </div>
}

function DesktopLayout() {
    <div>
        <h1>Desktop Home</h1>
    </div>
}


export default Home