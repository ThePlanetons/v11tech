import { useState, useEffect } from 'react';

export default function MobileQROrderingSystem() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
    const interval = setInterval(() => {
      setAnimate(prev => !prev);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col md:flex-row items-center bg-white min-h-screen">
      {/* Left section with text content */}
      <div className="w-full md:w-1/2 px-6 py-12 md:px-12 md:py-16">
        <h1 className="text-5xl md:text-6xl  leading-tight mb-8 text-gray-800 v11-roboto tracking-wide">
          INNOVATIVE MOBILE<br />
          ORDERING SYSTEM<br />
          THROUGH QR CODE
        </h1>

        <div className="text-base md:text-lg mb-12 text-gray-600">
          <p className="mb-1">WE BUILD A PLATFORM FOR SMALL BUSINESS OWNERS,</p>
          <p className="mb-1">HOUSEWIVES, AND STUDENTS TO RUN BUSINESS WITH A</p>
          <p className="mb-1">COST-EFFECTIVE SUBSCRIPTION MODEL TO BOOST YOUR</p>
          <p>OVERALL REVENUE.</p>
        </div>

        <button className="bg-green-500 hover:bg-green-600 hover:scale-110 text-white py-3 px-8 rounded-md flex items-center font-medium ">
          Get Started
          <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>

      {/* Right section with green background and phones */}
      <div className="w-full md:w-1/2 relative h-96 md:h-screen">
        {/* Green circle background that fills the right side */}
        <div className="absolute inset-0 bg-green-500 rounded-l-full"></div>

        {/* Hand and phones container */}
        <div className="relative h-full flex items-center justify-center">
          <div 
            className={`relative ${animate ? 'translate-y-0' : 'translate-y-1'} transition-all duration-1000 ease-in-out overflow-hidden`}
            style={{ width: '100%', height: '100%', zIndex: 10 }}
          >
            {/* Image from the message - showing hand holding phones with QR code and food app */}
            <img 
              src="/assets/img/ui.png" 
              alt="Hand holding two smartphones showing QR code and food ordering app" 
              className="object-contain w-full h-full "
            />
          </div>
        </div>
      </div>
    </div>
  );
}