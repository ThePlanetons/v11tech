import React, { useEffect, useState, useRef } from 'react';

const HomePage: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [scrollY, setScrollY] = useState(0);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const parallaxRef = useRef<HTMLDivElement>(null);

    // Handle scroll effects
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setScrollY(currentScrollY);

            if (currentScrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        // Animation on load
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 300);

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            clearTimeout(timer);
        };
    }, []);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <div className="min-h-screen flex flex-col bg-gra text-black relative overflow-hidden">
            {/* Parallax Background */}
            <div
                ref={parallaxRef}
                className="fixed top-0 left-0 w-full h-full bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 z-0"
                style={{
                    backgroundImage: `url('/assets/img/pattern-bg.png')`,
                    backgroundSize: 'cover',
                    transform: `translateY(${scrollY * 0.5}px)`
                }}
            >
                {/* Enhanced Abstract Shapes for Visual Interest */}
                <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-green-500 opacity-10 blur-xl"></div>
                <div className="absolute bottom-40 right-20 w-96 h-96 rounded-full bg-blue-500 opacity-10 blur-xl"></div>
                <div className="absolute top-1/3 right-1/4 w-72 h-72 rounded-full bg-purple-500 opacity-10 blur-xl"></div>
                <div className="absolute top-1/2 left-1/4 w-48 h-48 rounded-full bg-yellow-400 opacity-10 blur-xl"></div>
            </div>

            {/* Navigation Bar */}
            <header
                className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between px-4 md:px-6 py-4 transition-all duration-300 ${
                    scrolled
                    ? 'bg-white bg-opacity-95 shadow-lg backdrop-blur-sm'
                    : 'bg-transparent'
                }`}
            >
                {/* Logo / Brand */}
                <div className="transition-all duration-300 hover:scale-105">
                    <img src="/assets/img/Logo_Last.png" alt="logo" className="w-36 md:w-52 pl-2 md:pl-20" />
                </div>

                {/* Mobile Menu Button */}
                <button 
                    className="md:hidden flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-green-500 focus:outline-none"
                    onClick={toggleMobileMenu}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                    </svg>
                </button>

                {/* Desktop Nav Links */}
                <nav className="hidden md:flex space-x-6">
                    {['Products', 'About Us', 'Services', 'Customers', 'Contact Us'].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase().replace(' ', '')}`}
                            className="hover:text-green-400 transition-colors duration-300 relative group font-medium"
                        >
                            {item}
                            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-green-500 transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    ))}
                </nav>

                {/* Book a Demo Button (Desktop) */}
                <button className="hidden md:block ml-4 font-semibold px-4 py-2 rounded-md bg-green-500 relative overflow-hidden transition-all duration-300 group">
                    <span className="z-10 text-white relative">Book a Demo</span>
                    <span className="absolute left-0 top-0 w-full h-full bg-green-700 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 z-0"></span>
                </button>
            </header>

            {/* Mobile Menu Overlay */}
            <div 
                className={`fixed top-0 left-0 w-full h-full bg-white z-40 transform transition-transform duration-300 ease-in-out ${
                    mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
            >
                <div className="flex flex-col h-full px-6 py-20">
                    <button 
                        className="absolute top-4 right-4 p-2 rounded-md text-gray-800 hover:text-green-500 focus:outline-none"
                        onClick={toggleMobileMenu}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    <div className="flex flex-col space-y-6">
                        {['Products', 'About Us', 'Services', 'Customers', 'Contact Us'].map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase().replace(' ', '')}`}
                                className="text-xl font-medium border-b border-gray-200 py-3 hover:text-green-500 transition-colors duration-300"
                                onClick={toggleMobileMenu}
                            >
                                {item}
                            </a>
                        ))}
                    </div>
                    <button className="mt-8 font-semibold px-4 py-3 rounded-md bg-green-500 text-white hover:bg-green-600 transition-all duration-300">
                        Book a Demo
                    </button>
                </div>
            </div>

            {/* Hero Section */}
            <main className="relative z-10 flex-grow flex flex-col md:flex-row items-center justify-center px-4 text-center md:text-left pt-20 md:pt-40">
                {/* Text Content */}
                <div
                    className={`w-full md:w-1/2 transition-all duration-700 transform ${
                        isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
                    }`}
                    style={{ transform: isVisible ? `translateY(${scrollY * -0.15}px)` : 'translateY(0)' }}
                >
                    <h2 className="text-3xl md:text-6xl font-bold mb-6 px-4 md:pl-20 text-white tracking-wide leading-tight">
                        <span className="bg-clip-text text-gray-800 v11-roboto tracking-wide">
                            Innovative Mobile Ordering
                            system through QR Code
                        </span>
                    </h2>
                    <p className="text-base md:text-xl text-gray-800 px-4 md:pl-20 max-w-xl mx-auto md:mx-0 mb-8">
                        We build a platform for small business owners, housewives, and students to run
                        business with a cost-effective subscription model to boost your overall
                        revenue.
                    </p>

                    {/* Added CTA buttons */}
                    <div className="px-4 md:pl-20 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <button className="bg-green-500 font-semibold px-6 py-3 rounded-lg hover:bg-green-600 transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center">
                            <span className='text-white'>Get Started</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="white">
                                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </button>
                        <button className="border-2 border-green-500 text-black font-semibold px-6 py-3 rounded-lg hover:bg-green-500 hover:text-white transition-all duration-300 hover:shadow-lg">
                            Learn More
                        </button>
                    </div>
                </div>

                {/* Enhanced Image with floating effect and mockup design */}
                <div
                    className={`w-full md:w-1/2 mt-12 md:mt-0 transition-all duration-700 delay-300 transform ${
                        isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
                    }`}
                    style={{ transform: isVisible ? `translateY(${scrollY * -0.1}px)` : 'translateY(0)' }}
                >
                    <div className="relative mx-auto w-full max-w-xs md:max-w-md">
                        {/* Phone frame */}
                        <div className="relative p-2 bg-black rounded-3xl shadow-2xl animate-float overflow-hidden">
                            {/* Phone bezel */}
                            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-gray-800 to-gray-900"></div>

                            {/* Screen glow effect */}
                            <div className="absolute inset-1 bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 rounded-2xl opacity-20"></div>

                            {/* Notch */}
                            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 md:w-24 h-4 md:h-6 bg-black rounded-b-xl z-30"></div>

                            {/* Screen content */}
                            <div className="relative w-full pt-6 md:pt-8 pb-2 px-2 rounded-2xl overflow-hidden z-20 bg-white">
                                {/* App screenshot */}
                                <img
                                    src="/assets/img/Product1.png"
                                    alt="Mobile food ordering app interface"
                                    className="w-full h-auto rounded-xl shadow-md"
                                />

                                {/* App UI overlays - navigation bar */}
                                <div className="absolute top-8 md:top-10 left-0 right-0 flex justify-between items-center px-4">
                                    <div className="flex items-center space-x-2">
                                        <div className="w-1 h-1 md:w-2 md:h-2 rounded-full bg-green-500"></div>
                                        <span className="text-xs font-medium text-black">10:30</span>
                                    </div>
                                    <div className="flex space-x-1">
                                        <div className="w-1 h-1 md:w-2 md:h-2 rounded-full bg-green-500"></div>
                                        <div className="w-1 h-1 md:w-2 md:h-2 rounded-full bg-green-500"></div>
                                        <div className="w-1 h-1 md:w-2 md:h-2 rounded-full bg-green-500"></div>
                                    </div>
                                </div>

                                {/* Home indicator */}
                                <div className="mx-auto mt-2 w-16 md:w-24 h-1 bg-gray-300 rounded-full"></div>
                            </div>
                        </div>

                        {/* Floating elements around the phone - hidden on small screens */}
                        <div className="absolute -top-6 -right-6 w-12 h-12 md:w-16 md:h-16 bg-green-500 rounded-full shadow-lg flex items-center justify-center text-white font-bold transform rotate-12 z-30">
                            <span className="text-xs md:text-sm">QR</span>
                        </div>

                        <div className="absolute -bottom-4 -left-4 w-14 h-14 md:w-20 md:h-20 bg-blue-500 rounded-full shadow-lg flex items-center justify-center text-white font-bold transform rotate-12 z-30">
                            <span className="text-xs md:text-sm">Order<br />Now</span>
                        </div>

                        {/* Decorative elements - less prominent on mobile */}
                        <div className="absolute top-1/2 -right-8 md:-right-12 w-16 h-16 md:w-24 md:h-24 bg-gray-200 rounded-full blur-xl opacity-30"></div>
                        <div className="absolute bottom-1/4 -left-8 md:-left-16 w-20 h-20 md:w-32 md:h-32 bg-green-300 rounded-full blur-xl opacity-20"></div>

                        {/* Reflection effect */}
                        <div className="absolute inset-x-8 md:inset-x-12 top-10 h-16 md:h-24 bg-white opacity-10 transform -rotate-45 blur-md"></div>
                    </div>
                </div>
            </main>

            {/* Add CSS for enhanced animations */}
            <style>{`
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
        
        /* Disable animations on small screens for better performance */
        @media (max-width: 640px) {
          .animate-float {
            animation: none;
          }
        }
      `}</style>
        </div>
    );
};

export default HomePage;