import { useState, useEffect, useRef } from 'react';

export default function MobileQROrderingSystem() {
  // For phone animations
  const [phoneAnimation, setPhoneAnimation] = useState(false);
  
  // For text content animations
  const [textVisible, setTextVisible] = useState(false);
  const [buttonVisible, setButtonVisible] = useState(false);
  
  // Reference for intersection observer
  const sectionRef = useRef(null);
  
  useEffect(() => {
    // Start animations when component mounts
    setTextVisible(true);
    
    // Stagger animations for a nicer effect
    const buttonTimer = setTimeout(() => {
      setButtonVisible(true);
    }, 600);
    
    // Start phone animation after a short delay
    const phoneTimer = setTimeout(() => {
      setPhoneAnimation(true);
      
      // Set up gentle bobbing animation that doesn't hurt performance
      const interval = setInterval(() => {
        setPhoneAnimation(prev => !prev);
      }, 2000); // Slower animation for better performance
      
      return () => clearInterval(interval);
    }, 300);
    
    // Set up intersection observer for on-screen animations
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          // Start animations when element comes into view
          setTextVisible(true);
          setTimeout(() => setButtonVisible(true), 600);
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      clearTimeout(buttonTimer);
      clearTimeout(phoneTimer);
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  return (
    <div ref={sectionRef} className="flex flex-col md:flex-row items-center bg-white min-h-screen">
      {/* Left section with text content */}
      <div className="w-full md:w-1/2 px-6 py-16 md:px-12 md:py-16 overflow-hidden">
        <h2 
          className={`text-2xl md:text-6xl leading-tight mb-8 text-gray-800 transform transition-all duration-700 ${
            textVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
          }`}
        >
          INNOVATIVE MOBILE<br />
          ORDERING SYSTEM<br />
          THROUGH QR CODE
        </h2>

        <div 
          className={`text-base md:text-lg mb-12 text-gray-600 transform transition-all duration-700 delay-200 ${
            textVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
          }`}
        >
          <p className="mb-1">WE BUILD A PLATFORM FOR SMALL BUSINESS OWNERS,</p>
          <p className="mb-1">HOUSEWIVES, AND STUDENTS TO RUN BUSINESS WITH A</p>
          <p className="mb-1">COST-EFFECTIVE SUBSCRIPTION MODEL TO BOOST YOUR</p>
          <p>OVERALL REVENUE.</p>
        </div>

        <button 
          className={`bg-green-500 overflow-hidden transition-all duration-500 hover:bg-green-600 hover:shadow-lg text-white py-3 px-8 rounded-md flex items-center font-medium transform ${
            buttonVisible ? 'translate-y-0 opacity-100 hover:scale-105 hover:-translate-y-1' : 'translate-y-8 opacity-0'
          }`}
        >
          Get Started
          <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>

      {/* Right section with green background and phones */}
      <div className="w-full md:w-1/2 relative h-96 md:h-screen">
        {/* Green circle background with animation */}
        <div 
          className={`absolute inset-0 bg-green-500 rounded-l-full transform transition-all duration-1000 ${
            textVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-90'
          }`}
        ></div>

        {/* Hand and phones container */}
        <div className="relative h-full flex items-center justify-center overflow-hidden">
          <div
            className="relative"
            style={{ width: '100%', height: '100%', zIndex: 10 }}
          >
            {/* Images with optimized loading */}
            <img
              src="/assets/img/mobile1.png"
              alt="Smartphone showing QR code interface"
              loading="lazy"
              width="320"
              height="640"
              className={`absolute top-0 left-16 md:left-36 z-20 object-contain w-full h-full transition-transform duration-1000 ease-in-out ${
                phoneAnimation ? 'translate-y-0' : 'translate-y-4'
              }`}
            />

            <img
              src="/assets/img/mobile2.png"
              alt="Smartphone showing food ordering app"
              loading="lazy" 
              width="320"
              height="640"
              className={`absolute top-0 left-16 md:left-36 z-10 object-contain w-full h-full transition-transform duration-1000 ease-in-out ${
                phoneAnimation ? 'translate-y-0' : 'translate-y-2'
              }`}
            />
          </div>
          <img
            src="/assets/img/hand.png"
            alt="Hand holding smartphones"
            loading="lazy"
            width="500" 
            height="700"
            className={`absolute top-0 left-16 md:left-36 z-0 object-contain w-full h-full transform transition-all duration-1000 ${
              textVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          />
        </div>
      </div>
    </div>
  );
}