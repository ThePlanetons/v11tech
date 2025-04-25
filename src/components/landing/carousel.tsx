import { useState, useEffect } from 'react';

export default function MobileQROrderingSystem() {
  const [animate, setAnimate] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [textElements, setTextElements] = useState({
    heading1: false,
    heading2: false,
    heading3: false,
    paragraph1: false,
    paragraph2: false,
    paragraph3: false,
    paragraph4: false,
    button: false
  });
  
  useEffect(() => {
    // Start phone animation
    setAnimate(true);
    const phoneInterval = setInterval(() => {
      setAnimate(prev => !prev);
    }, 1000);
    
    // Initial page load animation
    setLoaded(true);
    
    // Staggered text animations
    const delays = {
      heading1: 300,
      heading2: 500,
      heading3: 700,
      paragraph1: 900,
      paragraph2: 1100,
      paragraph3: 1300,
      paragraph4: 1500,
      button: 1800
    };
    
    Object.keys(delays).forEach((key: string) => {
      setTimeout(() => {
        setTextElements(prev => ({
          ...prev,
          [key]: true
        }));
      }, delays[key as keyof typeof delays]);
    });
    
    return () => clearInterval(phoneInterval);
  }, []);

  return (
    <div className="flex flex-col md:flex-row items-center bg-white min-h-screen overflow-hidden">
      {/* Left section with text content */}
      <div className={`w-full md:w-1/2 px-6 py-16 md:px-12 md:py-16 transition-all duration-1000 ease-out ${loaded ? 'opacity-100' : 'opacity-0'}`}>
        <div className="mb-8 text-2xl md:text-6xl leading-tight text-gray-800 v11-roboto">
          <div className="overflow-hidden mb-2">
            <div className={`transition-all duration-700 ${textElements.heading1 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'}`}>
              INNOVATIVE MOBILE
            </div>
          </div>
          <div className="overflow-hidden mb-2">
            <div className={`transition-all duration-700 ${textElements.heading2 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'}`}>
              ORDERING SYSTEM
            </div>
          </div>
          <div className="overflow-hidden">
            <div className={`transition-all duration-700 ${textElements.heading3 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'}`}>
              THROUGH QR CODE
            </div>
          </div>
        </div>

        <div className="text-base md:text-lg mb-12 text-gray-600">
          <div className="overflow-hidden">
            <p className={`mb-1 transition-all duration-500 ${textElements.paragraph1 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
              WE BUILD A PLATFORM FOR SMALL BUSINESS OWNERS,
            </p>
          </div>
          <div className="overflow-hidden">
            <p className={`mb-1 transition-all duration-500 ${textElements.paragraph2 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
              HOUSEWIVES, AND STUDENTS TO RUN BUSINESS WITH A
            </p>
          </div>
          <div className="overflow-hidden">
            <p className={`mb-1 transition-all duration-500 ${textElements.paragraph3 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
              COST-EFFECTIVE SUBSCRIPTION MODEL TO BOOST YOUR
            </p>
          </div>
          <div className="overflow-hidden">
            <p className={`transition-all duration-500 ${textElements.paragraph4 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
              OVERALL REVENUE.
            </p>
          </div>
        </div>

        <div className="overflow-hidden">
          <button 
            className={`bg-green-500 overflow-hidden transition-all duration-500 hover:bg-green-600 hover:shadow-lg hover:scale-105 transform text-white py-3 px-8 rounded-md flex items-center font-medium ${textElements.button ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-90'}`}
          >
            Get Started
            <svg className={`ml-2 w-4 h-4 transition-transform duration-300 ${textElements.button ? 'translate-x-0' : '-translate-x-4'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>

      {/* Right section with green background and phones */}
      <div className={`w-full md:w-1/2 relative h-96 md:h-screen transition-all duration-1000 ease-out ${loaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
        {/* Green circle background that fills the right side */}
        <div className={`absolute inset-0 bg-green-500 rounded-l-full transition-all duration-1000 ${loaded ? 'scale-100' : 'scale-90'}`}></div>

        {/* Hand and phones container */}
        <div className="relative h-full flex items-center justify-center overflow-hidden">
          <div
            className={`relative transition-all duration-1000 delay-300 ${loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
            style={{ width: '100%', height: '100%', zIndex: 10 }}
          >
            {/* Image from the message - showing hand holding phones with QR code and food app */}
            <img
              src="/assets/img/mobile1.png"
              alt="Hand holding two smartphones showing QR code and food ordering app"
              className={`absolute top-0 left-16 md:left-36 z-20 object-contain w-full h-full transition-transform ${animate ? 'translate-y-0' : 'translate-y-4'} duration-1000 ease-in-out`}
            />

            <img
              src="/assets/img/mobile2.png"
              alt="Hand holding two smartphones showing QR code and food ordering app"
              className={`absolute top-0 left-16 md:left-36 z-10 object-contain w-full h-full transition-transform ${animate ? 'translate-y-0' : 'translate-y-2'} duration-1000 ease-in-out`}
            />
          </div>
          <img
            src="/assets/img/hand.png"
            alt="Hand holding two smartphones showing QR code and food ordering app"
            className={`absolute top-0 left-16 md:left-36 z-0 object-contain w-full h-full transition-all duration-1000 delay-500 ${loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
          />
        </div>
      </div>
    </div>
  );
}