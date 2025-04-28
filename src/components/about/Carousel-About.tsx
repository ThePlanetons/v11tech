import { useState, useEffect } from 'react';
//import { Smartphone, QrCode, ChevronLeft, ChevronRight } from 'lucide-react';

function CarouselAbout() {
  const [, setAnimate] = useState(false);
  const [, setIsVisible] = useState(false);
  const [, setCurrentSlide] = useState(0);

  // Carousel data
  const carouselItems = [
    {
      title: "Mobile QR Ordering",
      description: "Scan, order and pay from your table without waiting in line",
      image: "/assets/img/about.jpg"
    },
  ];

  useEffect(() => {
    setAnimate(true);
    setIsVisible(true);

    const interval = setInterval(() => {
      setAnimate(prev => !prev);
    }, 3000);

    // Auto-rotate carousel
    const carouselInterval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % carouselItems.length);
    }, 5000);

    return () => {
      clearInterval(interval);
      clearInterval(carouselInterval);
    };
  }, []);

  // const nextSlide = () => {
  //   setCurrentSlide(prev => (prev + 1) % carouselItems.length);
  // };

  // const prevSlide = () => {
  //   setCurrentSlide(prev => (prev - 1 + carouselItems.length) % carouselItems.length);
  // };

  return (
    <div className="flex flex-col md:flex-row items-center bg-white min-h-screen overflow-hidden">
      {/* Left section with text content */}
      <div className="w-full md:w-1/2 px-6 py-16 md:px-12 md:py-16">
        <h2 className="text-2xl md:text-6xl pt-11 md:pt-0 leading-tight mb-8 text-gray-800 v11-roboto">
          WE BUILD SOFTWARE<br />
          FOR SMALL AND<br />
          MEDIUM ENTERPRISES
        </h2>

        <div className="text-xs md:text-lg mb-12 text-gray-600">
          <p className="mb-1">our vision is to build software for people to use our system</p>
          <p className="mb-1">for day-to-day operations, with powerful features</p>
          <p className="mb-1">and a user-friendly interface</p>
          <p></p>
        </div>

        <button className="bg-green-500 overflow-hidden transition-all duration-300 hover:bg-green-500 hover:shadow-lg hover:scale-105 transform hover:-translate-y-1 text-white py-3 px-8 rounded-md flex items-center font-medium">
          Get Started
          <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>

      {/* Right section with carousel and phones */}
      <div className="w-full md:top-20 left-20 md:w-1/2 relative  md:h-screen overflow-hidden">
        <img
          src="/assets/img/about.jpg"
          alt="about"
          className="w-3/4 object-cover"
        />
      </div>
    </div>
  )
}

export default CarouselAbout