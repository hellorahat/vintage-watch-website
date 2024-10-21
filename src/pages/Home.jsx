import { useMediaQuery } from 'react-responsive';
import Carousel from 'react-bootstrap/Carousel';
import watch1 from '../assets/pexels-ferarcosn-190819.jpg'
import watch2 from '../assets/pexels-jatin-anand-33853-125779.jpg'
import watch3 from '../assets/pexels-joey-nguy-n-1056657-2113994.jpg'
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
                            src={watch1}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={watch2}
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item >
                        <img
                            className="d-block w-100"
                            src={watch3}
                            alt="Third slide" 
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