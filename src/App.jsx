import Banner from "./components/Banner"
import Contents from "./components/Contents"
import NavBar from "./components/NavBar"
import Redirectory from "./components/Redirectory"
import Footer from "./components/Footer"
import MyChatBot from './pages/MyChatBot';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51OeoKWHrpeoNOecSZvpfRjcfWgyMOQpuSF4AJUcYfNIyte8u6FZmni9dh7hjPJxiwDJKizQGn8aWsFdUsuaDbc1N00i08K2sq0');
function App() {

  return (
    <>
      <Banner />
      <NavBar />
      <Redirectory />
      <Elements stripe={stripePromise}>
        <Contents />
      </Elements>
      <MyChatBot />
      <Footer />
    </>
  )
}

export default App

