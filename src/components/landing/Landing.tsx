import { useEffect, useState, useMemo } from 'react';
import { motion } from 'framer-motion';

import NavigationBar from '../shared/NavigationBar';
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
import CarouselLanding from './CarouselLanding';

const formatCurrency = (amount: number, currency: string) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    maximumFractionDigits: 2,
  }).format(amount);
};

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
  const [isYearly, setIsYearly] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [userCurrency, setUserCurrency] = useState('INR');
  const [conversionRate, setConversionRate] = useState(1);

  useEffect(() => {
    document.title = "QR Ordering - V11 TECH - Point of Sale";
  }, []);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
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

  const pricingPlans: PricingPlan[] = [
    {
      title: "Starter",
      subtitle: "For small business",
      monthlyPrice: "1297.48",
      yearlyPrice: "15569.77",
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
      monthlyPrice: "2162.47",
      yearlyPrice: "25949.61",
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
      monthlyPrice: "3027.45",
      yearlyPrice: "36329.45",
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

  const adjustedPlans = useMemo(() => {
    return pricingPlans.map(plan => ({
      ...plan,
      monthlyPrice: formatCurrency(parseFloat(plan.monthlyPrice) * conversionRate, userCurrency),
      yearlyPrice: formatCurrency(parseFloat(plan.yearlyPrice) * conversionRate, userCurrency),
    }));
  }, [conversionRate, userCurrency]);

  const themeColor = "#06b453";

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
      <NavigationBar />
      <CarouselLanding />
      <ShopsSection shops={shops} />
      <TalkUs />
      <V11QRLanding />

      <section id="pricing" className="py-8 md:py-20 relative overflow-hidden bg">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div className="text-center mb-10 md:mb-12" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggeredCards}>
            <motion.p className="font-semibold text-4xl md:text-5xl mb-4" style={{ color: themeColor }}>
              Our Pricing
            </motion.p>
            <motion.h2 className="text-3xl md:text-5xl font-extrabold leading-tight text-gray-800 tracking-wide">
              Transparent Pricing Plans, Find the Perfect <br /> Fit for Your Needs
            </motion.h2>
          </motion.div>

          <div className="flex justify-center mb-10 md:mb-12">
            <div className="flex rounded-full overflow-hidden border border-gray-200 shadow-sm">
              <button className={`px-8 py-3 text-base md:text-lg font-medium ${!isYearly ? 'bg-green-500 text-white' : 'bg-gray-100 text-gray-400'}`} onClick={() => setIsYearly(false)}>
                Monthly
              </button>
              <button className={`px-8 py-3 text-base md:text-lg font-medium ${isYearly ? 'bg-green-500 text-white' : 'bg-gray-100 text-gray-400'}`} onClick={() => setIsYearly(true)}>
                Yearly
              </button>
            </div>
          </div>

          <motion.div className="flex flex-col md:flex-row justify-center gap-6 md:gap-10" variants={staggeredCards} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {adjustedPlans.map((plan, index) => (
              <PricingSection key={index} plan={plan} isYearly={isYearly} isMobile={isMobile} />
            ))}
          </motion.div>
        </div>
      </section>

      <Comment />
      <ClientLogosSection />
      <CTASection product="V11-QR" siteIndex="/" />
      <Footer />
    </>
  );
}

export default Landing;