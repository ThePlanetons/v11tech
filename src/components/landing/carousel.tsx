import React, { useEffect, useState } from 'react';

interface HeroSectionProps {
  isVisible: boolean;
  scrollY: number;
}

const Carousel: React.FC<HeroSectionProps> = ({ isVisible, scrollY }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = '/path/to/your/phones-image.png'; // Replace with your actual image path
    img.onload = () => setImageLoaded(true);
  }, []);

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
        </div>
      </div>

      {/* Image Content - Right Side */}
      <div 
        className={`w-full md:w-1/2 mt-10 md:mt-0 transition-all duration-1000 transform ${
          isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
        }`}
        style={{
          transform: isVisible
            ? `translateY(${scrollY * 0.05}px) rotate(${scrollY * 0.01}deg)`
            : 'translateY(0) rotate(0)',
        }}
      >
        <div className="relative h-96 md:h-auto flex justify-center items-center">
          {/* Hand with phones - use your actual image */}
          <div 
            className={`relative transition-all duration-700 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              transform: isVisible
                ? `translateY(${scrollY * -0.03}px)`
                : 'translateY(0)',
            }}
          >
            <img 
              src="/path/to/your/phones-image.png" // Replace with your actual image path
              alt="Mobile ordering app on smartphones"
              className="w-full max-w-md mx-auto object-contain"
              onLoad={() => setImageLoaded(true)}
            />
          </div>
          
          {/* Optional floating elements */}
          <div 
            className="absolute -top-10 -right-5 w-20 h-20 bg-green-500 rounded-full opacity-20"
            style={{
              transform: `translateY(${scrollY * 0.1}px)`,
            }}
          ></div>
          <div 
            className="absolute -bottom-5 -left-5 w-12 h-12 bg-green-500 rounded-full opacity-20"
            style={{
              transform: `translateY(${scrollY * -0.08}px)`,
            }}
          ></div>
        </div>
      </div>
    </main>
  );
};

export default Carousel;