import ShopsSection from '../shared/ShopsSection';

import teaShopImg from '../../assets/img/TeaShops.jpeg';
import groceryShopImg from '../../assets/img/GroceryShop.jpeg';
import fashionShopImg from '../../assets/img/FashionsShop.jpeg';
import stationaryShopImg from '../../assets/img/StationaryShop.jpeg';
import NavBar from '../shared/header/NavBar';
import ClientLogosSection from '../shared/ClientLogosSection';
import CTASection from '../shared/CtaSection';
import Footer from '../shared/Footer';
//import Comment from '../shared/Comment';


import TalkUs from './Talkus';
//import PricingSection, { PricingPlan } from '../shared/PricingSection';
import { useEffect, useState } from 'react';
//import { motion } from 'framer-motion';
import Setup from './Setup';
interface ShopItem {
  title: string;
  imgSrc: string;
  altText: string;
  description: string;
}
// const staggeredCards = {
//   hidden: {},
//   visible: {
//     transition: { staggerChildren: 0.2 },
//   },
// };

const Service = () => {


  //const themeColor = "#06b453";


  const [, setIsVisible] = useState(false);
  const [, setScrollY] = useState(0);
  const [, setScrolled] = useState(false);
  // const [isYearly, setIsYearly] = useState<boolean>(false);
  //const [isMobile] = useState<boolean>(false);

  // const pricingPlans: PricingPlan[] = [
  //     {
  //       title: "Starter",
  //       subtitle: "For small business",
  //       monthlyPrice: "4,238.44",
  //       yearlyPrice: "50,861.24",
  //       features: [
  //         { name: "Single Machine", included: true },
  //         { name: "Menu management", included: true },
  //         { name: "Sales report & analysis", included: true },
  //         { name: "Marketing support", included: false },
  //         { name: "Daily Profit Report", included: false },
  //         { name: "Free 24/7 support", included: false },
  //       ],
  //     },
  //     {
  //       title: "Basic",
  //       subtitle: "For professionals",
  //       monthlyPrice: "6,833.4",
  //       yearlyPrice: "82,000.77",
  //       features: [
  //         { name: "Double Machine", included: true },
  //         { name: "Menu management", included: true },
  //         { name: "Sales report & analysis", included: true },
  //         { name: "Marketing support", included: true },
  //         { name: "Daily Profit Report", included: true },
  //         { name: "Free 24/7 support", included: false },
  //       ],
  //       popular: true,
  //     },
  //     {
  //       title: "Pro",
  //       subtitle: "For enterprise level",
  //       monthlyPrice: "8,563.37",
  //       yearlyPrice: "102,760.46",
  //       features: [
  //         { name: "Tripple Machine", included: true },
  //         { name: "Menu management", included: true },
  //         { name: "Sales report & analysis", included: true },
  //         { name: "Marketing support", included: true },
  //         { name: "Daily Profit Report", included: true },
  //         { name: "Free 24/7 support", included: true },
  //       ],
  //     },
  //   ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      setScrolled(currentScrollY > 50);
    };

    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    window.addEventListener('scroll', handleScroll);

    const handleClickOutside = () => {
      // Placeholder for dropdown close logic
      console.warn('Click outside detected - dropdown should close');
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
      clearTimeout(timer);
    };
  }, []);

  // const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10); // Add border when scrolling
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const shops: ShopItem[] = [
    {
      title: "Restaurants Shops",
      imgSrc: teaShopImg,
      altText: "Restaurants & Tea Shops",
      description: "Discover local flavors and cozy atmospheres",
    },
    {
      title: "Grocery Shop",
      imgSrc: groceryShopImg,
      altText: "Grocery Shop",
      description: "Fresh produce and everyday essentials",
    },
    {
      title: "Clothing Shop",
      imgSrc: fashionShopImg,
      altText: "Clothing & Fashions Shop",
      description: "Stay trendy with the latest styles",
    },
    {
      title: "Stationary Shop",
      imgSrc: stationaryShopImg,
      altText: "Stationary Shop",
      description: "Quality supplies for work and school",
    },
  ];



  return (
    <>
      <NavBar></NavBar>

      <Setup />

      <ShopsSection shops={shops}></ShopsSection>

      <TalkUs></TalkUs>


      <ClientLogosSection />

      <CTASection product="V11-Tech" siteIndex="/" />

      <Footer></Footer>
    </>
  );
};

export default Service;