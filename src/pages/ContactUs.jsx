import { useMediaQuery } from 'react-responsive';
import '../styles/ContactUs.css'

function ContactUs() {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

    return (
        <>
         <DesktopLayout />
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
            <MapEmbed />
            <div className = 'info-container'>
                <div>
                    <h5>Address</h5>
                    Area 51, Nevada, USA
                </div>
                <div>
                    <h5>Phone</h5>
                    123-456-7898
                </div>
                <div>
                    <h5>Email</h5>
                    contact@watchplace.com
                </div>
                
            </div>

        </div>
     

        
    )
}

const MapEmbed = () => {
    return (
      <div className='iframe-container'>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4571218.407668804!2d-116.53207951523764!3d37.70602464623362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80b81baaba3e8c81%3A0x970427e38e6237ae!2sArea%2051%2C%20NV!5e0!3m2!1sen!2sus!4v1729478924549!5m2!1sen!2sus" 
      width="1200" 
      height="450" 
      allowfullscreen="" 
      loading="lazy" 
      referrerpolicy="no-referrer-when-downgrade"
     >
      </iframe>
      </div>

      
    );
  };


export default ContactUs