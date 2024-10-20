import { useMediaQuery } from 'react-responsive';
import Carousel from 'react-bootstrap/Carousel';
import '../styles/Carousel.css'

function Home() {
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
        <><div>
            <h1>Desktop Home</h1>
        </div>
            <div className="carousel">
                <Carousel data-bs-theme="dark">
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="src/assets/pexels-ferarcosn-190819.jpg"
                            alt="First slide"
                            height="450"
                            width="1400"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="src/assets/pexels-jatin-anand-33853-125779.jpg"
                            alt="Second slide"
                            height="450"
                            width="1400"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="src/assets/pexels-joey-nguy-n-1056657-2113994.jpg"
                            alt="Third slide"
                            height="450"
                            width="1500"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
            <div>

            </div>
        </>
    )
}


export default Home