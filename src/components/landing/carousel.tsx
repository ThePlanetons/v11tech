import { useState, useEffect } from 'react';

export default function MobileQROrderingSystem() {
  const [animate, setAnimate] = useState(false);

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
        <h2 className="text-2xl md:text-6xl  leading-tight mb-8 text-gray-800 v11-roboto">
          INNOVATIVE MOBILE<br />
          ORDERING SYSTEM<br />
          THROUGH QR CODE
        </h2>

        <div className="text-xs md:text-lg mb-12 text-gray-600">
          <p className="mb-1">we build a platform for small business owners, housewives,</p>
          <p className="mb-1">and students to run businesses with a cost-effective</p>
          <p className="mb-1">subscription  model to boost their overall revenue.</p>
          <p></p>
        </div>

        <button className=" bg-green-500 overflow-hidden transition-all duration-300 hover:bg-green-500 hover:shadow-lg hover:scale-105 transform hover:-translate-y-1 text-white  py-3 px-8 rounded-md flex items-center font-medium ">
          Get Started
          <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>

      {/* Right section with green background and phones */}
      <div className="w-full md:w-1/2 relative h-96 md:h-185">
        {/* Green circle background that fills the right side */}
        <div className="absolute inset-0 bg-green-500 rounded-l-full"></div>

        {/* Hand and phones container */}
        <div className="relative h-full flex items-center justify-center overflow-hidden">
          <div
            className="relative"
            style={{ width: '100%', height: '100%', zIndex: 10 }}
          >
            {/* Image from the message - showing hand holding phones with QR code and food app */}
            <img
              src="/assets/img/mobile1.png"
              alt="Hand holding two smartphones showing QR code and food ordering app"
              className={`absolute top-0 left-16 md:left-36 z-20 object-contain w-full h-full  ${animate ? 'translate-y-0' : 'translate-y-4'}  duration-1000 ease-in-out`}
            />

            <img
              src="/assets/img/mobile2.png"
              alt="Hand holding two smartphones showing QR code and food ordering app"
              className={`absolute top-0 left-16 md:left-36 z-10 object-contain w-full h-full  ${animate ? 'translate-y-0' : 'translate-y-2 '}  duration-1000 ease-in-out`}
            />

          </div>
          <img
            src="/assets/img/hand.png"
            alt="Hand holding two smartphones showing QR code and food ordering app"
            className="absolute top-0 left-16 md:left-36 z-0 object-contain w-full h-full "
          />
        </div>
      </div>
    </div>
  );
}