import './App.css'
//// import { motion } from "framer-motion";
import PricingSection from './components/landing/box';
import ShopsSection from './components/landing/ShopsSection';
import './App.css';
import TestimonialCarousel from './components/landing/carousel';
import V11QRLanding from './components/landing/V11tech';
import HomePage from './components/landing/header/Home';
import TalkUs from './components/landing/Talkus';
import Footer from './components/landing/Footer';
// import HeroSection from './demo';
//import { 
function App() {
  

  return (
    <><HomePage></HomePage><ShopsSection></ShopsSection><TalkUs></TalkUs><PricingSection></PricingSection><TestimonialCarousel></TestimonialCarousel><V11QRLanding/><Footer></Footer></>
  
  
  )
}

export default App
