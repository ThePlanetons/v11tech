// HomePage.tsx
// import React, { useEffect, useState, useRef } from 'react';
import React, { useState, useRef } from 'react';
import NavigationBar from './Navigation';
//import HeroSection from './HeroSection';

const NavBar: React.FC = () => {
  const productsDropdownRef = useRef<HTMLDivElement>(null);

  const [scrolled] = useState(false);
  // const [scrolled, setScrolled] = useState(false);
  //const [isVisible, setIsVisible] = useState(false);
  //const [scrollY, setScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);

  //const parallaxRef = useRef<HTMLDivElement>(null);

  const products = [
    { name: 'V11-QR', image: '/assets/img/v11-qr.jpeg', link: 'products/qr-ordering' },
    { name: 'V11-KDS', image: '/assets/img/v11-kds.png', link: 'products/kds' },
    { name: 'V11-Kiosk', image: '/assets/img/v11-kiosk.png', link: 'products/kiosk' },
    { name: 'V11-Conect', image: '/assets/img/v11-conect.png', link: 'qr-ordering' },
    { name: 'V11-Queueing System', image: '/assets/img/v11-queue.png', link: 'qr-ordering' },
    { name: 'V11-Ticket System', image: '/assets/img/v11-ticket.png', link: 'qr-ordering' }
  ];

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const currentScrollY = window.scrollY;
  //     //setScrollY(currentScrollY);
  //     setScrolled(currentScrollY > 50);
  //   };

  //   // Animation delay on load
  //   const timer = setTimeout(() => {
  //     //setIsVisible(true);
  //   }, 300);

  //   window.addEventListener('scroll', handleScroll);

  //   // Close products dropdown when clicking outside the navigation area
  //   const handleClickOutside = () => {
  //     // Here you might check if the click target is outside your dropdown ref.
  //     // In this example, we simply close the dropdown.
  //     // setProductsDropdownOpen(false);
  //   };

  //   document.addEventListener('mousedown', handleClickOutside);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //     document.removeEventListener('mousedown', handleClickOutside);
  //     clearTimeout(timer);
  //   };
  // }, []);

   const toggleMobileMenu = () => {
     setMobileMenuOpen(!mobileMenuOpen);
   };

  const toggleProductsDropdown = (e: React.MouseEvent) => {
     e.preventDefault();
     console.log(e)
     setProductsDropdownOpen(!productsDropdownOpen);
   };

  return (
    <div className=" flex flex-col bg-gra text-black relative overflow-hidden">
      {/* Parallax Background */}
      {/* <div
        ref={parallaxRef}
        className="fixed top-0 left-0 w-full h-full bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 z-0"
        style={{
          backgroundImage: "url('/assets/img/pattern-bg.png')",
          backgroundSize: 'cover',
          transform: `translateY(${scrollY * 0.5}px)`
        }}
      >
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-green-500 opacity-10 blur-xl"></div>
        <div className="absolute bottom-40 right-20 w-96 h-96 rounded-full bg-blue-500 opacity-10 blur-xl"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 rounded-full bg-purple-500 opacity-10 blur-xl"></div>
        <div className="absolute top-1/2 left-1/4 w-48 h-48 rounded-full bg-yellow-400 opacity-10 blur-xl"></div>
      </div> */}

      {/* Navigation */}
      <NavigationBar
        ref={productsDropdownRef}
        scrolled={scrolled}
        mobileMenuOpen={mobileMenuOpen}
        productsDropdownOpen={productsDropdownOpen}
        toggleMobileMenu={toggleMobileMenu}
        toggleProductsDropdown={toggleProductsDropdown}
        setProductsDropdownOpen={setProductsDropdownOpen}
        products={products}
      />

      {/* Hero Section */}
    {/* <HeroSection isVisible={isVisible} scrollY={scrollY} /> */}

      {/* Embedded CSS for Animations */}
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0px) rotate(0deg); }
            25% { transform: translateY(-8px) rotate(0.5deg); }
            50% { transform: translateY(-12px) rotate(0deg); }
            75% { transform: translateY(-8px) rotate(-0.5deg); }
            100% { transform: translateY(0px) rotate(0deg); }
          }
          .animate-float {
            animation: float 8s ease-in-out infinite;
          }
          @keyframes pulse-glow {
            0%, 100% { opacity: 0.3; }
            50% { opacity: 0.6; }
          }
          .animate-glow {
            animation: pulse-glow 4s ease-in-out infinite;
          }
          .delay-50 { transition-delay: 50ms; }
          .delay-100 { transition-delay: 100ms; }
          .delay-150 { transition-delay: 150ms; }
          .delay-200 { transition-delay: 200ms; }
          .delay-250 { transition-delay: 250ms; }
          .delay-300 { transition-delay: 300ms; }
          @media (max-width: 640px) {
            .animate-float {
              animation: none;
            }
          }
        `}
      </style>
    </div>
  );
};

export default NavBar