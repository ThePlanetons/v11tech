import { useEffect, useState } from 'react';
import NavigationBar from '../shared/NavigationBar';
import { Instagram, Facebook, Linkedin } from 'lucide-react'


export default function ComingSoonPage() {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  // Set launch date to 30 days from now
  useEffect(() => {
    const launchDate = new Date();
    launchDate.setDate(launchDate.getDate() + 30);

    const timer = setInterval(() => {
      const now = new Date();
      const difference = launchDate.getTime() - now.getTime();

      if (difference <= 0) {
        clearInterval(timer);
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setCountdown({ days, hours, minutes, seconds });
    }, 1000);

    // Handle scroll for parallax effect
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    // Fade in animation on page load
    setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => {
      clearInterval(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const formatNumber = (num: number) => {
    return num < 10 ? `0${num}` : num;
  };

  return (
    <div className="relative">
      <NavigationBar />

      {/* Hero section with parallax background */}
      <div
        className="relative h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0  bg-opacity-50" />

        {/* Content */}
        <div
          className={`relative z-10 text-center px-4 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
          style={{
            transform: `translateY(${scrollY * 0.15}px)`
          }}
        >
          <h1 className="text-5xl font-bold text-white mb-6">Coming Soon</h1>
          <p className="text-xl text-white mb-10">
            We're working hard to bring you something amazing. Stay tuned!
          </p>

          {/* Countdown */}
          <div className="flex justify-center space-x-6 sm:space-x-10">
            {[
              { value: formatNumber(countdown.days), label: "Days" },
              { value: formatNumber(countdown.hours), label: "Hours" },
              { value: formatNumber(countdown.minutes), label: "Minutes" },
              { value: formatNumber(countdown.seconds), label: "Seconds" }
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg w-20 h-20 flex items-center justify-center border border-white border-opacity-30">
                  <span className="text-3xl font-bold text-black">{item.value}</span>
                </div>
                <span className="mt-2 text-sm font-medium text-white">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>


      {/* Footer */}
      <div
        className="relative py-16 bg-gray-900 overflow-hidden"
        style={{
          backgroundImage: "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div
          className="max-w-md mx-auto text-center px-4 relative z-10"
          style={{
            transform: `translateY(${(scrollY - 1000) * 0.05}px)`
          }}
        >
          <h2 className="text-2xl font-bold text-white mb-4">Stay in Touch</h2>
          <p className="text-white mb-6">
            We'll notify you when we launch. Follow our journey.
          </p>
          <div className="flex justify-center space-x-4">
            <div className="w-12 h-12 rounded-full bg-green-500 bg-opacity-20 flex items-center justify-center">
              <a href="https://www.instagram.com/v11tech/" target="_blank" className="rounded-full p-1 md:p-2 transform transition-all hover:scale-110 duration-200">
                <Instagram size={24} className="md:w-8 md:h-8 text-white" />
              </a>            </div>
            <div className="w-12 h-12 rounded-full bg-green-500 bg-opacity-20 flex items-center justify-center">
              <a href="https://www.facebook.com/v11tech/" target="_blank" className="rounded-full p-1 md:p-2 transform transition-all hover:scale-110 duration-200">
                <Facebook size={24} className="md:w-8 md:h-8 text-white" />
              </a>
            </div>
            <div className="w-12 h-12 rounded-full bg-green-500 bg-opacity-20 flex items-center justify-center">
              <a href="https://www.linkedin.com/company/v11-tech/about/?viewAsMember=true" target="_blank" className="rounded-full p-1 md:p-2 transform transition-all hover:scale-110 duration-200">
                <Linkedin size={24} className="md:w-8 md:h-8 text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
