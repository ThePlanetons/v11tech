import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
// import Razorpay from 'razorpay'; // Optional for types, but we'll use window.Razorpay


export interface Feature {
  name: string;
  included: boolean;
}

export interface PricingPlan {
  title: string
  subtitle: string
  monthlyPriceINR: number    // new: raw INR
  yearlyPriceINR: number     // new: raw INR
  monthlyPrice: string       // formatted string for display
  yearlyPrice: string
  features: Feature[]
  popular?: boolean
}


interface PricingCardProps {
  plan: PricingPlan;
  isYearly: boolean;
  isMobile: boolean;
}

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const pricingCardVariant = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
  hover: {
    y: -10,
    boxShadow: '0 20px 30px rgba(6, 180, 83, 0.2)',
    transition: { duration: 0.3 },
  },
};



const PricingCard: React.FC<PricingCardProps> = ({ plan, isYearly, isMobile }) => {
  const [expandedFeatures, setExpandedFeatures] = useState<boolean>(!isMobile);
  // const themeColor = '#06b453';
  // const themeColorLight = '#daf7e3';
  // const greyText = '#4A5568';


  const handlePayment = () => {
    const rawPrice = isYearly ? plan.yearlyPriceINR : plan.monthlyPriceINR;
    const amount = rawPrice * 100;
    
    if (!(window as any).Razorpay) {
      alert('Razorpay SDK failed to load. Please check your internet connection.');
      return;
    }

    const options = {
      key: 'rzp_live_nejqX35sR3t8v4', // ✅ Your public Razorpay key (safe for frontend)
      amount: amount,
      currency: 'INR',
      name: 'V11Tech',
      description: `${plan.title} Plan`,
      image: '/assets/img/Logo_Last.png', // optional
      handler: function (response: any) {
        alert('Payment successful! Payment ID: ' + response.razorpay_payment_id);
        // You can trigger a confirmation email via third-party service (like EmailJS) here
      },
      prefill: {
        name: '',
        email: '',
        contact: '',
      },
      notes: {
        plan_type: plan.title,
      },
      theme: {
        color: themeColor,
      },
    };

    const rzp = new (window as any).Razorpay(options);
    rzp.open();
  };


  // Update mobile specific state when viewport changes if needed
  useEffect(() => {
    if (!isMobile) {
      setExpandedFeatures(true);
    }
  }, [isMobile]);

  const themeColor = '#06b453'; // primary green
  const themeColorLight = '#daf7e3'; // soft green
  const greyText = '#4A5568';

  const toggleFeatures = () => {
    setExpandedFeatures(!expandedFeatures);
  };

  return (
    <motion.div
      className={`bg-white rounded-3xl overflow-hidden w-full md:w-80 relative mb-6 md:mb-0 ${plan.popular ? 'shadow-xl border-2 md:scale-105 z-10' : 'shadow-lg'
        }`}
      style={{ borderColor: plan.popular ? themeColor : 'transparent' }}
      variants={pricingCardVariant}
      whileHover="hover"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
    >
      {plan.popular && (
        <div
          className="absolute top-0 right-0 text-white text-xs font-semibold px-3 py-1 rounded-bl-xl"
          style={{ backgroundColor: themeColor }}
        >
          Most Popular
        </div>
      )}
      <div className="p-6 md:p-10">
        <div className="flex items-center mb-5 md:mb-6">
          <div
            className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full"
            style={{ backgroundColor: themeColorLight, color: themeColor }}
          >
            {/* Example icons can be replaced or extended based on plan data */}
            {plan.title === 'Starter' && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 md:h-7 md:w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            )}
            {plan.title === 'Basic' && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 md:h-7 md:w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                />
              </svg>
            )}
            {plan.title === 'Pro' && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 md:h-7 md:w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                />
              </svg>
            )}
          </div>
          <div className="ml-4 md:ml-5">
            <h3 className="text-xl md:text-2xl font-bold" style={{ color: themeColor }}>
              {plan.title}
            </h3>
            <p className="text-sm md:text-base font-medium" style={{ color: greyText }}>
              {plan.subtitle}
            </p>
          </div>
        </div>
        <div className="h-0.5 mb-5 md:mb-6" style={{ backgroundColor: themeColorLight }}></div>
        <div className="mb-6 md:mb-8">
          <p className="text-xs md:text-sm mb-1" style={{ color: greyText }}>
            
          </p>
          <h3
            className="text-4xl md:text-5xl font-extrabold flex items-baseline"
            style={{ color: themeColor }}
          >
            {isYearly ? plan.yearlyPrice : plan.monthlyPrice}
            <span className="text-lg md:text-xl ml-1 md:ml-2" style={{ color: greyText }}>
              / {isYearly ? 'year' : 'month'}
            </span>
          </h3>
        </div>

        {/* Features Section */}
        <div>
          {isMobile && (
            <button
              className="w-full py-3 mt-2 mb-4 text-center rounded-xl font-semibold md:hidden flex items-center justify-center transition-all duration-300 hover:opacity-90 active:scale-95"
              onClick={toggleFeatures}
              style={{
                backgroundColor: themeColorLight,
                color: themeColor,
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
              }}
            >
              {!expandedFeatures ? 'Hide Features' : 'Show Features'}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2 transition-transform duration-300 ease-in-out"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                style={{
                  transform: expandedFeatures ? 'rotate(0deg)' : 'rotate(1800deg)'
                }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          )}

          <div className={`${isMobile && expandedFeatures ? 'hidden' : ''} md:block`}>
            <ul className="space-y-3 md:space-y-4 mb-6 md:mb-10">
              {plan.features.map((feature, idx) => (
                <motion.li
                  key={idx}
                  variants={fadeInUp}
                  className="flex items-center text-base md:text-lg"
                  style={{ color: feature.included ? themeColor : greyText }}
                >
                  {feature.included ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 md:h-6 md:w-6 mr-2 md:mr-3 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      style={{ color: themeColor }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 md:h-6 md:w-6 mr-2 md:mr-3 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      style={{ color: greyText }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  )}
                  {feature.name}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <motion.div className="px-6 pb-6 md:px-10 md:pb-10" whileHover={{ scale: 1.05 }} transition={{ type: 'spring', stiffness: 400, damping: 10 }}>
        <button
          onClick={handlePayment}
          className="block w-full py-3 md:py-4 text-center rounded-xl font-semibold transition-colors duration-300"
          style={{
            backgroundColor: plan.popular ? themeColor : 'white',
            border: `2px solid ${themeColor}`,
            color: plan.popular ? 'white' : themeColor,
          }}
        >
          Buy Now
        </button>
      </motion.div>
    </motion.div>
  );
};

export default PricingCard;
