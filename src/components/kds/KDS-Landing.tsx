import { useEffect, useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import NavigationBar from '../shared/NavigationBar';
import ClientLogosSection from '../shared/ClientLogosSection';
import CTASection from '../shared/CtaSection';
import Footer from '../shared/Footer';
import Comment from '../shared/Comment';
import TalkUs from './Talkus';
import CarouselKDS from './Carousel-KDS';
import PricingSection, { PricingPlan } from '../shared/PricingSection';

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

const KDSLanding = () => {
  const [isYearly, setIsYearly] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [userCurrency, setUserCurrency] = useState('INR');
  const [conversionRate, setConversionRate] = useState(1);
  const [, setScrollY] = useState(0);
  const [, setScrolled] = useState(false);
  const [, setIsVisible] = useState(false);

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

  const pricingPlans: PricingPlan[] = [
    {
      title: "Starter",
      subtitle: "For small business",
      monthlyPrice: "4238.44",
      yearlyPrice: "50861.24",
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
      monthlyPrice: "6833.4",
      yearlyPrice: "82000.77",
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
      monthlyPrice: "8563.37",
      yearlyPrice: "102760.46",
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

  const adjustedPlans = useMemo(() => {
    return pricingPlans.map(plan => ({
      ...plan,
      monthlyPrice: formatCurrency(parseFloat(plan.monthlyPrice) * conversionRate, userCurrency),
      yearlyPrice: formatCurrency(parseFloat(plan.yearlyPrice) * conversionRate, userCurrency),
    }));
  }, [conversionRate, userCurrency]);

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

  return (
    <>
      <NavigationBar />
      <CarouselKDS />
      <TalkUs />

      {/* PricingSection */}
      <section id="pricing" className="py-9 md:py-20 relative overflow-hidden bg">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div className="text-center mb-12 md:mb-16" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggeredCards}>
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

          <div className="flex justify-center mb-10 md:mb-12">
            <div className="flex rounded-full overflow-hidden border border-gray-200 shadow-sm">
              <button
                className={`px-8 py-3 text-base md:text-lg font-medium transition-colors duration-300 ${!isYearly ? 'bg-green-500 text-white' : 'bg-gray-100 text-gray-400'}`}
                onClick={() => setIsYearly(false)}
              >
                Monthly
              </button>
              <button
                className={`px-8 py-3 text-base md:text-lg font-medium transition-colors duration-300 ${isYearly ? 'bg-green-500 text-white' : 'bg-gray-100 text-gray-400'}`}
                onClick={() => setIsYearly(true)}
              >
                Yearly
              </button>
            </div>
          </div>

          <motion.div
            className="flex flex-col md:flex-row justify-center gap-6 md:gap-10"
            variants={staggeredCards}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {adjustedPlans.map((plan, index) => (
              <PricingSection key={index} plan={plan} isYearly={isYearly} isMobile={isMobile} />
            ))}
          </motion.div>

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
      <CTASection product="V11-KDS" siteIndex="/" />
      <Footer />
    </>
  );
};

export default KDSLanding;
