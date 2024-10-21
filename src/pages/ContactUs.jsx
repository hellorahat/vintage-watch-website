import { useMediaQuery } from 'react-responsive';
import '../styles/ContactUs.css'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
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
            <BasicGrid/>
        </div>
     

        
    )
}
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
    boxShadow: 'none',
    ...theme.applyStyles('dark', {
      backgroundColor: '#1A2027',
    }),
  
  }));

 function BasicGrid() {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
        <Grid size = {2}></Grid>
          <Grid size={8}>
            <Item><MapEmbed/ ></Item>
          </Grid>
          <Grid size = {2}></Grid>
          <Grid size = {2}></Grid>
          <Grid size={4}>
            <Item>
                <h5>Address</h5>
                Area 51, Nevada, USA
                <h5>Phone</h5>
                (789)-456-1212
                <h5>Email</h5>
                contact@watchco.com
            </Item>
          </Grid>
          <Grid size={4}>
            <Item>size=4</Item>
          </Grid>
          <Grid size = {2}></Grid>
        </Grid>
      </Box>
    );
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