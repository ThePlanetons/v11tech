//import ShopsSection from '../shared/ShopsSection';

// import teaShopImg from '../../assets/img/TeaShops.jpeg';
// import groceryShopImg from '../../assets/img/GroceryShop.jpeg';
// import fashionShopImg from '../../assets/img/FashionsShop.jpeg';
// import stationaryShopImg from '../../assets/img/StationaryShop.jpeg';
import NavigationBar from '../shared/NavigationBar';
import ClientLogosSection from '../shared/ClientLogosSection';
import CTASection from '../shared/CtaSection';
import Footer from '../shared/Footer';
import Comment from '../shared/Comment';

import TalkUs from './Talkus';
import PricingSection, { PricingPlan } from '../shared/PricingSection';
import { useEffect, useState  } from 'react';
import { motion } from 'framer-motion';
//import Setup from './Setup';
import CarouselKIOSK from './Carousel-KIOSK';
import ServiceFeatures from './ServiceFeatures';
import axios from 'axios';

interface Subscription {
  id: number;
  name: string;
  product: string;
  plan_a: string;
  price_a: number;
  plan_b: string;
  price_b: number;
  plan_c: string;
  price_c: number;
  status: number;
  created_at: string;
  updated_at: string | null;
}

const formatCurrency = (amount: number, currency: string) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    maximumFractionDigits: 2,
  }).format(amount);
};
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

const KIOSKLanding = () => {
  const [isYearly, setIsYearly] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [userCurrency, setUserCurrency] = useState('INR');
  const [conversionRate, setConversionRate] = useState(1);
  const [, setScrollY] = useState(0);
  const [, setScrolled] = useState(false);
  const [, setIsVisible] = useState(false);

  const [subscriptions, setSubscriptions] = useState<Subscription[]>([]);
  const [exchangeRate, setExchangeRate] = useState<number | null>(null);
  const [adjustedPlans, setAdjustedPlans] = useState<PricingPlan[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const VITE_API_BASE_URL = import.meta.env.VITE_VITE_API_BASE_URL;

  useEffect(() => {
    const fetchSubscriptions = async () => {
      try {
        const response = await axios.post(VITE_API_BASE_URL + 'subscriptions', {
          product: 'V11-Kiosk',
        });
        setSubscriptions(response.data);
      } catch (error) {
        console.error('Error fetching subscriptions:', error);
      }
    };

    const fetchExchangeRate = async () => {
      try {
        const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
        const data = await response.json();
        setExchangeRate(data.rates.INR);
      } catch (error) {
        console.error('Error fetching exchange rate:', error);
      }
    };

    Promise.all([fetchSubscriptions(), fetchExchangeRate()]).finally(() => {
      // Nothing here; actual loading completion is handled in second useEffect
    });
  }, []);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    document.title = "Kitchen Display System(KDS) - V11 TECH - Point of Sale";
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const fetchCurrency = async () => {
      try {
        const geoRes = await fetch('https://ipapi.co/json/');
        const geoData = await geoRes.json();
        const currency = geoData.currency || 'INR';
        setUserCurrency(currency);

        if (currency !== 'INR') {
          const exRes = await fetch('https://api.exchangerate-api.com/v4/latest/INR');
          const exData = await exRes.json();
          const rate = exData.rates[currency] || 1;
          setConversionRate(rate);
        }
      } catch (error) {
        console.error('Failed to fetch currency info', error);
      }
    };

    fetchCurrency();
  }, []);

  useEffect(() => {
    if (
      subscriptions.length > 0 &&
      exchangeRate !== null &&
      conversionRate !== null &&
      userCurrency
    ) {
      const price = (subscriptions[0]?.price_a ?? 0) * exchangeRate;
      const price1 = (subscriptions[0]?.price_b ?? 0) * exchangeRate;
      const price2 = (subscriptions[0]?.price_c ?? 0) * exchangeRate;

  const pricingPlans: PricingPlan[] = [
    {
      title: "Starter",
      subtitle: "For small business",
      monthlyPriceINR: price,
      yearlyPriceINR: price * 12,
      monthlyPrice: price.toString(),
      yearlyPrice: (price * 12).toString(),
      features: [
        { name: "Single Machine", included: true },
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
      monthlyPriceINR: price1,
      yearlyPriceINR: price1 * 12,
      monthlyPrice: price1.toString(),
      yearlyPrice: (price1 * 12).toString(),
      features: [
        { name: "Double Machine", included: true },
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
      monthlyPriceINR: price2,
      yearlyPriceINR: price2 * 12,
      monthlyPrice: price2.toString(),
      yearlyPrice: (price2 * 12).toString(),
      features: [
        { name: "Tripple Machine", included: true },
        { name: "Menu management", included: true },
        { name: "Sales report & analysis", included: true },
        { name: "Marketing support", included: true },
        { name: "Daily Profit Report", included: true },
        { name: "Free 24/7 support", included: true },
      ],
    },
  ];
    const adjusted = pricingPlans.map(plan => ({
        ...plan,
        monthlyPrice: formatCurrency(parseFloat(plan.monthlyPrice) * conversionRate, userCurrency),
        yearlyPrice: formatCurrency(parseFloat(plan.yearlyPrice) * conversionRate, userCurrency),
      }));

      setAdjustedPlans(adjusted);
      setIsLoading(false);
    }
  }, [subscriptions, exchangeRate, conversionRate, userCurrency]);

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
const themeColor = "#06b453";
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
      <NavigationBar></NavigationBar>

      <CarouselKIOSK></CarouselKIOSK>
      {/* <ShopsSection shops={shops}></ShopsSection> */}

      <ServiceFeatures></ServiceFeatures>

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
             <motion.p className="font-semibold text-4xl md:text-5xl mb-4 v11-roboto tracking-wide" style={{ color: themeColor }}>
              Our Pricing
            </motion.p>
            <motion.h2 className="text-3xl md:text-5xl font-extrabold leading-tight text-gray-800 tracking-wide v11-roboto">
              Transparent Pricing Plans, Find the Perfect <br /> Fit for Your Needs
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
          {isLoading ? (
            <div className="flex justify-center items-center h-screen">
              <div className="loader">Loading...</div>
            </div>
          ) : (
            <motion.div className="flex flex-col md:flex-row justify-center gap-6 md:gap-10" variants={staggeredCards} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              {adjustedPlans.map((plan: PricingPlan, index: number) => (
                <PricingSection key={index} plan={plan} isYearly={isYearly} isMobile={isMobile} />
              ))}
            </motion.div>
          )}

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

      <CTASection product="V11-KIOSK" siteIndex="/" />

      <Footer></Footer>
    </>
  );
};

export default KIOSKLanding;