import { useState, useEffect } from 'react';

function CarouselKDS() {
  const [, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
    const interval = setInterval(() => {
      setAnimate(prev => !prev);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col md:flex-row items-center bg-white min-h-screen">
      {/* Left section with text content */}
      <div className="w-full md:w-1/2 px-6 py-16 md:px-12 md:py-16">
        <h2 className="text-2xl md:text-6xl pt-11 md:pt-0 leading-tight mb-8 text-gray-800 v11-roboto">
          KITCHEN DISPLAY<br />
          SYSTEM INNOVATIVE<br />
          DIGITAL KITCHEN
        </h2>

        <div className="text-base md:text-lg mb-12 text-gray-600">
          <p className="mb-1">WE BUILD PLATFORM TO REDUCE FOR RESTAURANDS,</p>
          <p className="mb-1">CAFE, BUS TICKET, TRAIN TICKET, CINEMA TICKET</p>
          <p className="mb-1">WITH COST-EFFECTIVE SUBSCRIPTION MODEL</p>
          <p>TO BOOST BUSINESS.</p>
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
        <div className="absolute inset-0 rounded-l-full overflow-hidden">
        <img
              src="/assets/img/kdscar.jpg"
              alt="Hand holding two smartphones showing QR code and food ordering app"
              className={`absolute top-0 z-20 object-contain w-full h-full `}
            />
        </div>

        {/* Hand and phones container */}
        <div className="relative h-full flex items-center justify-center overflow-hidden">
          <div
            className="relative"
            style={{ width: '100%', height: '100%', zIndex: 10 }}
          >
            {/* Image from the message - showing hand holding phones with QR code and food app */}

          </div>
        </div>
      </div>
    </div>
  )
}

export default CarouselKDS