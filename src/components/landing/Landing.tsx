import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

import NavigationBar from '../shared/NavigationBar';
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

function Landing() {
  // const [, setScrolled] = useState(false);
  const scrolledRef = useRef(false);

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


  // Theme colors (if needed for the header or toggle)
  const themeColor = "#06b453";

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
      scrolledRef.current = currentScrollY > 50;
      // setScrolled(currentScrollY > 50);
      //setScrollY(currentScrollY);
    };

    const timer = setTimeout(() => {
      //setIsVisible(true);
    }, 300);

    window.addEventListener('scroll', handleScroll);

    // const handleClickOutside = () => {
    //   // Placeholder for dropdown close logic
    //   console.warn('Click outside detected - dropdown should close');
    // };

    // document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      // document.removeEventListener('mousedown', handleClickOutside);
      clearTimeout(timer);
    };
  }, []);

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

  return (
    <>
       {/* 🛠 Reset Popup Button for Testing */}
  {/* <button
    onClick={() => {
      localStorage.removeItem('hasVisited');
      window.location.reload();
    }}
    className="fixed bottom-4 right-4 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg shadow-lg z-50"
  >
    Reset Popup
  </button> */}

      <NavigationBar />

      <Carousel />

      <ShopsSection shops={shops} />

      <TalkUs />

      <V11QRLanding />

      {/* PricingSection */}
      <section id="pricing" className="py-9 md:py-20 relative overflow-hidden bg">
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
              className="text-3xl md:text-5xl font-extrabold leading-tight text-gray-800 v11-roboto tracking-wide "
            >
              Transparent Pricing Plans, Find the Perfect <br />Fit for Your Needs
            </motion.h2>
          </motion.div>

          {/* Toggle Switch */}
          <div className="flex justify-center mb-10 md:mb-12">
            <div className="flex rounded-full overflow-hidden border border-gray-200 shadow-sm">
              <button
                className={`px-8 py-3 text-base md:text-lg font-medium transition-colors duration-300 ${!isYearly
                  ? 'bg-green-500 text-white'
                  : 'bg-gray-100 text-gray-400'
                  }`}
                onClick={() => setIsYearly(false)}
              >
                Monthly
              </button>
              <button
                className={`px-8 py-3 text-base md:text-lg font-medium transition-colors duration-300 ${isYearly
                  ? 'bg-green-500 text-white'
                  : 'bg-gray-100 text-gray-400'
                  }`}
                onClick={() => setIsYearly(true)}
              >
                Yearly
              </button>
            </div>
          </div>

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

      <ClientLogosSection />

      <CTASection product="V11-QR" siteIndex="/" />

      <Footer />
    </>
  )
}

export default Landing