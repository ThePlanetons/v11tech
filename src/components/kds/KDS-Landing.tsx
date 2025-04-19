//import ShopsSection from '../shared/ShopsSection';

// import teaShopImg from '../../assets/img/TeaShops.jpeg';
// import groceryShopImg from '../../assets/img/GroceryShop.jpeg';
// import fashionShopImg from '../../assets/img/FashionsShop.jpeg';
// import stationaryShopImg from '../../assets/img/StationaryShop.jpeg';
import NavBar from '../shared/header/NavBar';
import ClientLogosSection from '../shared/ClientLogosSection';
import CTASection from '../shared/CtaSection';
import Footer from '../shared/Footer';
import Comment from '../shared/Comment';
import TalkUs from './Talkus';
import PricingSection, { PricingPlan } from '../shared/PricingSection';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
// interface ShopItem {
//   title: string;
//   imgSrc: string;
//   altText: string;
//   description: string;
// }
const staggeredCards = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const KDSLanding = () => {

       
    const themeColor = "#06b453";

    
      const [, setIsVisible] = useState(false);
      const [, setScrollY] = useState(0);
      const [, setScrolled] = useState(false);
    const [isYearly, setIsYearly] = useState<boolean>(false);
    const [isMobile] = useState<boolean>(false);

    const pricingPlans: PricingPlan[] = [
        {
          title: "Starter",
          subtitle: "For small business",
          monthlyPrice: "4,238.44",
          yearlyPrice: "50,861.24",
          features: [
            { name: "Only for one user", included: true },
            { name: "Menu management", included: true },
            { name: "Sales report & analysis", included: true },
            { name: "Marketing support", included: false },
            { name: "Daily Profit Report", included: false },
            { name: "Free 24/7 support", included: false },
          ],
        },
        {
          title: "Basic",
          subtitle: "For professionals",
          monthlyPrice: "6,833.4",
          yearlyPrice: "82,000.77",
          features: [
            { name: "Two users", included: true },
            { name: "Menu management", included: true },
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
          monthlyPrice: "8,563.37",
          yearlyPrice: "102,760.46",
          features: [
            { name: "1 to 3 users", included: true },
            { name: "Menu management", included: true },
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

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setScrolled(window.scrollY > 10); // Add border when scrolling
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  // const shops: ShopItem[] = [
  //   {
  //     title: "Restaurants & Tea Shops",
  //     imgSrc: teaShopImg,
  //     altText: "Restaurants & Tea Shops",
  //     description: "Discover local flavors and cozy atmospheres",
  //   },
  //   {
  //     title: "Grocery Shop",
  //     imgSrc: groceryShopImg,
  //     altText: "Grocery Shop",
  //     description: "Fresh produce and everyday essentials",
  //   },
  //   {
  //     title: "Clothing & Fashions Shop",
  //     imgSrc: fashionShopImg,
  //     altText: "Clothing & Fashions Shop",
  //     description: "Stay trendy with the latest styles",
  //   },
  //   {
  //     title: "Stationary Shop",
  //     imgSrc: stationaryShopImg,
  //     altText: "Stationary Shop",
  //     description: "Quality supplies for work and school",
  //   },
  // ];




  return (
    <>
      <NavBar></NavBar>
      
      {/* <ShopsSection shops={shops}></ShopsSection> */}

      <TalkUs></TalkUs>

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
              className="text-3xl md:text-5xl font-extrabold leading-tight text-gray-800 v11-roboto tracking-wide"
            >
              Transparent Pricing Plans, Find the Perfect Fit for Your Needs
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
      

      <Comment/>

      <ClientLogosSection  />

      <CTASection product="V11 KDS" siteIndex="/" />
      
      <Footer></Footer>
    </>
  );
};

export default KDSLanding;