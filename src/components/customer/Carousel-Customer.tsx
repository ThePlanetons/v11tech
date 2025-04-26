import { useState, useEffect } from 'react';
//import { Smartphone, QrCode } from 'lucide-react';

function CarouselCustomer() {
  const [, setAnimate] = useState(false);
  const [, setIsVisible] = useState(false);

  useEffect(() => {
    setAnimate(true);
    setIsVisible(true);

    const interval = setInterval(() => {
      setAnimate(prev => !prev);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col md:flex-row items-center bg-white min-h-screen overflow-hidden">
      {/* Left section with text content */}
      <div className="w-full md:w-1/2 px-6 py-16 md:px-12 md:py-16">
        <h2 className="text-3xl md:text-6xl pt-11 md:pt-0 leading-tight mb-8 text-gray-800 v11-roboto">
          CUSTOMERS<br />
        </h2>

        <div className="text-base md:text-lg mb-12 text-gray-600">
          <p className="mb-1">SOFTWARE DEVELOPMENT, IT CONSULTING,</p>
          <p className="mb-1">PRODUCT LABLE DESIGNING,</p>
          <p className="mb-1">DIGITAL MARKETTING GOOGLE ADS</p>
          <p className="mb-1">FACEBOOK ADS, INSTA ADS.</p>
        </div>

        <button className=" bg-green-500 overflow-hidden transition-all duration-300 hover:bg-green-500 hover:shadow-lg hover:scale-105 transform hover:-translate-y-1 text-white  py-3 px-8 rounded-md flex items-center font-medium ">
          Get Started
          <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>

      {/* Right section with green background and phones */}
      <div className="w-full md:w-1/2 relative md:h-auto overflow-hidden">
        <img
          src="/assets/img/customers.jpg"
          alt="about"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  )
}

export default CarouselCustomer