import { useMediaQuery } from 'react-responsive';
import Image from '../assets/image.jpg'
import { Height } from '@mui/icons-material';
import '../styles/AboutUs.css'
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
        <div className='about'>
           <br/><br/>
            <h1 className='who'>Who We Are</h1>
            <div className='who'>
            Welcome to Vintage Watch Co., where time-honored craftsmanship meets modern elegance. We are passionate collectors and enthusiasts of vintage watches, dedicated to curating a remarkable selection of timepieces that tell a story.
            <br/><br/></div> <br/><br/>
           <div className='bannerBox'>
            <img className="banner" src={Image} alt="img"/>
            </div>
            <br/><br/>
            <h1 className='who'>Our Collection</h1>
            <div className='who'>
            Our carefully curated collection features a diverse range of vintage watches from renowned brands, each with its unique charm and character. Whether you are a seasoned collector or new to the world of vintage watches, we strive to offer a selection that caters to every taste and occasion.
            </div>

        </div>
    )
}


export default AboutUs