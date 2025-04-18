// src/components/Landing.tsx


import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import NavBar from '../shared/header/NavBar';
import Carousel from './carousel';
import ShopsSection from '../shared/ShopsSection';
import TalkUs from './Talkus';
import PricingSection, { PricingPlan } from '../shared/PricingSection';
import Comment from '../shared/Comment';
import V11QRLanding from './V11tech';
import ClientLogosSection from '../shared/ClientLogosSection';
import CTASection from '../shared/CtaSection';
import Footer from '../shared/Footer';


import teaShopImg from '../../assets/img/TeaShops.jpeg';
import groceryShopImg from '../../assets/img/GroceryShop.jpeg';
import fashionShopImg from '../../assets/img/FashionsShop.jpeg';
import stationaryShopImg from '../../assets/img/StationaryShop.jpeg';

import bhavika from '../../assets/img/clients/Bhavika_LogoF.png';
import buddy_boy from '../../assets/img/clients/thalappakatti.gif';
import iyengar from '../../assets/img/clients/IBS.png';
import pudong_metro from '../../assets/img/clients/Kurunji Metro.png';
import university_logo from '../../assets/img/clients/LOGO_Karaikudi.png';
import together from '../../assets/img/clients/Together_Restaurant - Copy.png';
import heritage from '../../assets/img/clients/thalappakatti.gif';



const staggeredCards = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

interface ShopItem {
  title: string;
  imgSrc: string;
  altText: string;
  description: string;
}

const Landing: React.FC = () => {

  //  this is for Carousel

  const [, setScrolled] = useState(false);
  const [isYearly, setIsYearly] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const togglePricing = () => {
    setIsYearly(!isYearly);
  };

  // Theme colors (if needed for the header or toggle)
  const themeColor = "#06b453";
  const greyText = "#4A5568";

  // Pricing plans data
  const pricingPlans: PricingPlan[] = [
    {
      title: "Starter",
      subtitle: "For small business",
      monthlyPrice: "1,297.48",
      yearlyPrice: "15,569.77",
      features: [
        { name: "Only for one user", included: true },
        { name: "Inventory management", included: true },
        { name: "Sales report & analysis", included: true },
        { name: "Marketing support", included: false },
        { name: "Daily Profit Report", included: false },
        { name: "Free 24/7 support", included: false },
      ],
    },
    {
      title: "Basic",
      subtitle: "For professionals",
      monthlyPrice: "2,162.47",
      yearlyPrice: "25,949.61",
      features: [
        { name: "Two users", included: true },
        { name: "Inventory management", included: true },
        { name: "Sales report & analysis", included: true },
        { name: "Marketing support", included: true },
        { name: "Daily Profit Report", included: true },
        { name: "Free 24/7 support", included: false },
      ],
      popular: true,
    },
    {
      title: "Pro",
      subtitle: "For enterprise level",
      monthlyPrice: "3,027.45",
      yearlyPrice: "36,329.45",
      features: [
        { name: "1 to 3 users", included: true },
        { name: "Inventory management", included: true },
        { name: "Sales report & analysis", included: true },
        { name: "Marketing support", included: true },
        { name: "Daily Profit Report", included: true },
        { name: "Free 24/7 support", included: true },
      ],
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      //setScrollY(currentScrollY);
      setScrolled(currentScrollY > 50);
    };

    const timer = setTimeout(() => {
      //setIsVisible(true);
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
  //end

  const shops: ShopItem[] = [
    {
      title: 'Restaurants',
      imgSrc: teaShopImg,
      altText: 'Restaurants & Tea Shops',
      description: 'Discover local flavors and cozy atmospheres',
    },
    {
      title: 'Grocery Shop',
      imgSrc: groceryShopImg,
      altText: 'Grocery Shop',
      description: 'Fresh produce and everyday essentials',
    },
    {
      title: 'Clothing Shop',
      imgSrc: fashionShopImg,
      altText: 'Clothing & Fashions Shop',
      description: 'Stay trendy with the latest styles',
    },
    {
      title: 'Stationary Shop',
      imgSrc: stationaryShopImg,
      altText: 'Stationary Shop',
      description: 'Quality supplies for work and school',
    },
  ];

  const clientLogos = [
    { src: bhavika, alt: 'Bhavika' },
    { src: buddy_boy, alt: 'Buddy Boy' },
    { src: iyengar, alt: 'Iyengar' },
    { src: pudong_metro, alt: 'Pudong Metro' },
    { src: university_logo, alt: 'University' },
    { src: together, alt: 'Together' },
    { src: heritage, alt: 'Heritage' },
  ];

  return (
    <>
      <NavBar />

      <Carousel />

      <ShopsSection shops={shops} />

      <TalkUs />

      <V11QRLanding />
      
      {/* PricingSection */}
      <section id="pricing" className="py-16 md:py-20 relative overflow-hidden bg">
        <div className="container mx-auto px-4 md:px-6">
          {/* Section Header */}
          <motion.div
            className="text-center mb-12 md:mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.2 } },
            }}
          >
            <motion.p
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 100 } },
              }}
              className="font-semibold text-lg mb-2"
              style={{ color: themeColor }}
            >
              Our Pricing
            </motion.p>
            <motion.h2
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 100, delay: 0.2 } },
              }}
              className="text-3xl md:text-5xl font-extrabold leading-tight text-gray-800 tracking-wide"
            >
              Transparent Pricing Plans, Find the Perfect Fit for Your Needs
            </motion.h2>
          </motion.div>

          {/* Toggle Switch */}
          <motion.div
            className="flex justify-center mb-10 md:mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-4 bg-white rounded-full p-1 shadow-md">
              <span
                className={`text-base md:text-lg ${!isYearly ? 'font-bold' : 'font-medium'}`}
                style={{ color: !isYearly ? themeColor : greyText }}
              >
                Monthly
              </span>
              <div
                className="w-12 md:w-16 h-7 md:h-8 flex items-center rounded-full cursor-pointer"
                style={{ backgroundColor: "#daf7e3" }}
                onClick={togglePricing}
              >
                <motion.div
                  className="w-6 md:w-7 h-6 md:h-7 rounded-full shadow-sm"
                  style={{ backgroundColor: themeColor }}
                  animate={{ x: isYearly ? 24 : 0 }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              </div>
              <span
                className={`text-base md:text-lg ${isYearly ? 'font-bold' : 'font-medium'}`}
                style={{ color: isYearly ? themeColor : greyText }}
              >
                Yearly
              </span>
            </div>
          </motion.div>

          {/* Pricing Cards */}
          <motion.div
            className="flex flex-col md:flex-row justify-center gap-6 md:gap-10"
            variants={staggeredCards}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {pricingPlans.map((plan, index) => (
              <PricingSection key={index} plan={plan} isYearly={isYearly} isMobile={isMobile} />
            ))}
          </motion.div>

          {/* Optional: Blob Animation Styles or any extra styling */}
          <style>{`
          @keyframes blob-animation {
            0% { transform: translate(0px, 0px) scale(1); }
            33% { transform: translate(30px, -50px) scale(1.1); }
            66% { transform: translate(-20px, 20px) scale(0.9); }
            100% { transform: translate(0px, 0px) scale(1); }
          }
          .animate-blob { animation: blob-animation 7s infinite; }
          .animation-delay-2000 { animation-delay: 2s; }
        `}</style>
        </div>
      </section>


      <Comment />

      <ClientLogosSection clientLogos={clientLogos} />

      <CTASection product="V11 QR" siteIndex="/" />

      <Footer />
    </>
  );
};

export default Landing;
