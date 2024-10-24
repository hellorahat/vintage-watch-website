import { useMediaQuery } from 'react-responsive';
import watch from '../assets/casio.jpg';
import * as React from 'react';
import Button from '@mui/material/Button';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import '../styles/Product.css';
function Product() {
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
             <h1>Watch Information</h1>
      {/*    <h1>Watch Information</h1>
                   <img src= {watch} alt='casio'/>
            <hr/>
           <div className='description'>
                watch description
            </div>
            <div className='namePrice'>
              Brand<br/>
              Watch Name<br/>
              $ XXX.XX
            <Button variant="outlined" endIcon={<AddShoppingCartIcon />}>
            Add To Cart
            </Button>
            </div>
            <table>
                <tr><td>Type of watch</td></tr>
                <tr><td>Brand</td></tr>
                <tr><td>Model</td></tr>
               
            </table> */}
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
   
    ...theme.applyStyles('dark', {
      backgroundColor: '#1A2027',
    }),
  
  }));

function BasicGrid() {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
        <Grid size = {2}></Grid>
          <Grid size={4}>
            <Item><img src= {watch} alt='casio'/></Item>
          </Grid>
          <Grid size={4}>
            <Item>     
                Brand<br/>
                Watch Name<br/>
                $ XXX.XX<br/>
                <Button variant="outlined" endIcon={<AddShoppingCartIcon />}>
                Add To Cart
                </Button>
            </Item>
          </Grid>

          <Grid size = {2}></Grid>
          <Grid size = {2}></Grid>
          <Grid size={4}>
            <Item>
            <hr/>
            watch description
            </Item>
          </Grid>
          <Grid size={4}>
            <Item>
            <table> 
                <tr><td>Type of watch</td></tr>
                <tr><td>Brand</td></tr>
                <tr><td>Model</td></tr>      
            </table>
            </Item>
          </Grid>
          <Grid size = {2}></Grid>
        </Grid>
      </Box>
    );
  }

export default Product