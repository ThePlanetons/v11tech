// HeroSection.tsx
import React from 'react';

interface HeroSectionProps {
  isVisible: boolean;
  scrollY: number;
}

const Carousel: React.FC<HeroSectionProps> = ({ isVisible, scrollY }) => {
  return (
    <main className="relative z-10 pb-30 flex-grow flex flex-col md:flex-row items-center justify-center px-4 text-center md:text-left pt-20 md:pt-40">
      {/* Text Content */}
      <div
        className={`w-full md:w-1/2 transition-all duration-700 transform ${
          isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
        }`}
        style={{
          transform: isVisible
            ? `translateY(${scrollY * -0.15}px)`
            : 'translateY(0)',
        }}
      >
        <h2 className="text-3xl md:text-6xl font-bold mb-6 px-4 md:pl-20 text-white tracking-wide leading-tight">
          <span className="bg-clip-text text-gray-800 v11-roboto tracking-wide">
            Innovative Mobile Ordering system through QR Code
          </span>
        </h2>
        <p className="text-base md:text-xl text-gray-800 px-4 md:pl-20 max-w-xl mx-auto md:mx-0 mb-8">
          We build a platform for small business owners, housewives, and students to run business with a
          cost-effective subscription model to boost your overall revenue.
        </p>
        <div className="px-4 md:pl-20 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <button className="bg-green-500 font-semibold px-6 py-3 rounded-lg hover:bg-green-600 transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center">
            <span className="text-white">Get Started</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              viewBox="0 0 20 20"
              fill="white"
            >
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          {/* <button className="border-2 border-green-500 text-black font-semibold px-6 py-3 rounded-lg hover:bg-green-500 hover:text-white transition-all duration-300 hover:shadow-lg">
            Learn More
          </button> */}
        </div>
      </div>

      {/* Image & Mockup */}
      <div
        className={`w-full md:w-1/2 mt-12 md:mt-0 transition-all duration-700 delay-300 transform ${
          isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
        }`}
        style={{
          transform: isVisible
            ? `translateY(${scrollY * -0.1}px)`
            : 'translateY(0)',
        }}
      >
        <div className="relative mx-auto w-full max-w-xs md:max-w-md">
          {/* Phone Frame */}
          <div className="relative p-2 bg-black rounded-3xl shadow-2xl animate-float overflow-hidden">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-gray-800 to-gray-900"></div>
            <div className="absolute inset-1 bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 rounded-2xl opacity-20"></div>
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 md:w-24 h-4 md:h-6 bg-black rounded-b-xl z-30"></div>
            <div className="relative w-full pt-6 md:pt-8 pb-2 px-2 rounded-2xl overflow-hidden z-20 bg-white">
              <img
                src="/assets/img/Product1.png"
                alt="Mobile food ordering app interface"
                className="w-full h-auto rounded-xl shadow-md"
              />
              <div className="absolute top-8 md:top-10 left-0 right-0 flex justify-between items-center px-4">
                <div className="flex items-center space-x-2">
                  <div className="w-1 h-1 md:w-2 md:h-2 rounded-full bg-green-500"></div>
                  <span className="text-xs font-medium text-black">10:30</span>
                </div>
                <div className="flex space-x-1">
                  <div className="w-1 h-1 md:w-2 md:h-2 rounded-full bg-green-500"></div>
                  <div className="w-1 h-1 md:w-2 md:h-2 rounded-full bg-green-500"></div>
                  <div className="w-1 h-1 md:w-2 md:h-2 rounded-full bg-green-500"></div>
                </div>
              </div>
              <div className="mx-auto mt-2 w-16 md:w-24 h-1 bg-gray-300 rounded-full"></div>
            </div>
          </div>

          {/* Floating Elements */}
          <div className="absolute -top-6 -right-6 w-12 h-12 md:w-16 md:h-16 bg-green-500 rounded-full shadow-lg flex items-center justify-center text-white font-bold transform rotate-12 z-30">
            <span className="text-xs md:text-sm">QR</span>
          </div>
          <div className="absolute -bottom-4 -left-4 w-14 h-14 md:w-20 md:h-20 bg-blue-500 rounded-full shadow-lg flex items-center justify-center text-white font-bold transform rotate-12 z-30">
            <span className="text-xs md:text-sm">
              Order<br />Now
            </span>
          </div>
          <div className="absolute top-1/2 -right-8 md:-right-12 w-16 h-16 md:w-24 md:h-24 bg-gray-200 rounded-full blur-xl opacity-30"></div>
          <div className="absolute bottom-1/4 -left-8 md:-left-16 w-20 h-20 md:w-32 md:h-32 bg-green-300 rounded-full blur-xl opacity-20"></div>
          <div className="absolute inset-x-8 md:inset-x-12 top-10 h-16 md:h-24 bg-white opacity-10 transform -rotate-45 blur-md"></div>
        </div>
      </div>
    </main>
  );
};

export default Carousel;
