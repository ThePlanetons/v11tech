import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface PricingPlan {
  title: string;
  subtitle: string;
  monthlyPrice: string;
  yearlyPrice: string;
  features: {
    name: string;
    included: boolean;
  }[];
  popular?: boolean;
}

const PricingSection: React.FC = () => {
  const [isYearly, setIsYearly] = useState<boolean>(false);

  const togglePricing = (): void => {
    setIsYearly(!isYearly);
  };

  // Theme colors
  const themeColor = "#06b453"; // primary green
  const themeColorLight = "#daf7e3"; // soft green
  const greyText = "#4A5568"; // grey for secondary text

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

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const staggeredCards = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const pricingCardVariant = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    hover: {
      y: -10,
      boxShadow: `0 20px 30px rgba(6, 180, 83, 0.2)`,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <section
      id="pricing"
      className="py-20 relative overflow-hidden bg-gradient-to-br from-green-200 to-green-100"
    >
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-green-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
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
              visible: {
                opacity: 1,
                x: 0,
                transition: { type: 'spring', stiffness: 100 }
              }
            }}
            className="font-semibold text-lg mb-2 text-black"
          >
            Our Pricing
          </motion.p>
          <motion.h2
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { type: 'spring', stiffness: 100, delay: 0.2 }
              }
            }}
            className="text-4xl md:text-5xl font-extrabold leading-tight text-black"
          >
            Transparent Plans for Every Need Transparent Pricing Plans, Find the
            Perfect Fit for Your Needs
          </motion.h2>
        </motion.div>

        {/* Toggle Switch */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center space-x-4 bg-white rounded-full p-1 shadow-md">
            <span
              className={`text-lg ${!isYearly ? "font-bold" : "font-medium"}`}
              style={{ color: !isYearly ? themeColor : greyText }}
            >
              Monthly
            </span>
            <div
              className="w-16 h-8 flex items-center rounded-full cursor-pointer"
              style={{ backgroundColor: themeColorLight }}
              onClick={togglePricing}
            >
              <motion.div
                className="w-7 h-7 rounded-full shadow-sm"
                style={{ backgroundColor: themeColor }}
                animate={{ x: isYearly ? 32 : 0 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            </div>
            <span
              className={`text-lg ${isYearly ? "font-bold" : "font-medium"}`}
              style={{ color: isYearly ? themeColor : greyText }}
            >
              Yearly
            </span>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          className="flex flex-col md:flex-row justify-center gap-10"
          variants={staggeredCards}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              className={`bg-white rounded-3xl overflow-hidden w-full md:w-80 relative ${
                plan.popular ? "shadow-2xl border-2 md:scale-105 z-10" : "shadow-lg"
              }`}
              style={{ borderColor: plan.popular ? themeColor : "transparent" }}
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
              <div className="p-10">
                <div className="flex items-center mb-6">
                  <div
                    className="w-14 h-14 flex items-center justify-center rounded-full"
                    style={{ backgroundColor: themeColorLight, color: themeColor }}
                  >
                    {index === 0 && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-7 w-7"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    )}
                    {index === 1 && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-7 w-7"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                      </svg>
                    )}
                    {index === 2 && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-7 w-7"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                      </svg>
                    )}
                  </div>
                  <div className="ml-5">
                    <h3 className="text-2xl font-bold" style={{ color: themeColor }}>
                      {plan.title}
                    </h3>
                    <p className="text-base font-medium" style={{ color: greyText }}>
                      {plan.subtitle}
                    </p>
                  </div>
                </div>
                <div className="h-0.5 mb-6" style={{ backgroundColor: themeColorLight }}></div>
                <div className="mb-8">
                  <p className="text-sm mb-1" style={{ color: greyText }}>INR</p>
                  <h3 className="text-5xl font-extrabold flex items-baseline" style={{ color: themeColor }}>
                    {isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                    <span className="text-xl ml-2" style={{ color: greyText }}>
                      / {isYearly ? "year" : "month"}
                    </span>
                  </h3>
                </div>
                <ul className="space-y-4 mb-10">
                  {plan.features.map((feature, featureIndex) => (
                    <motion.li
                      key={featureIndex}
                      variants={fadeInUp}
                      className="flex items-center text-lg"
                      style={{ color: feature.included ? themeColor : greyText }}
                    >
                      {feature.included ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 mr-3"
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
                          className="h-6 w-6 mr-3"
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
              <motion.div
                className="px-10 pb-10"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <a
                  href="https://v11tech.com/book-a-demo"
                  className="block w-full py-4 text-center rounded-xl font-semibold transition-colors duration-300"
                  style={{
                    backgroundColor: plan.popular ? themeColor : "white",
                    border: `2px solid ${themeColor}`,
                    color: plan.popular ? "white" : themeColor,
                  }}
                >
                  Buy Now
                </a>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Blob Animation Styles */}
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
  );
};

export default PricingSection;

