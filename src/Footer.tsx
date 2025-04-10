import React from "react";

// import React, { useEffect } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// const Footer: React.FC = () => {
//   useEffect(() => {
//     AOS.init({ duration: 1000 });
//   }, []);

const Footer: React.FC = () => {
  return (
    <footer className="relative h-70 bg-[#0f172a] text-white pb-10 overflow-hidden">
      {/* Top section with logo and social icons */}

      <div className="container w-130 pt-16 h-50 px-12 mt-10 flex items-start justify-start text-green-500">
        <p className="text-white text-md font-semibold">
          Ours V11 POS Software is the ultimate solution designed to transform
          your business operations into a streamlined and efficient powerhouse.
          With  a focus on simplicity, versatility, and cutting-edge technology.
        </p>
      </div>

      {/* Navigation Links */}
      <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-300 -mt-50">
        <a href="/" className="hover:text-green-600 transition">
          Home
        </a>
        <a href="/terms" className="hover:text-green-600 transition">
          Terms and Conditions
        </a>
        <a href="/privacy" className="hover:text-green-600 transition">
          Privacy Policy
        </a>
        <a href="/contact" className="hover:text-green-600 transition">
          Contact Us
        </a>
      </div>

      {/* Bottom Logo & Copyright */}
      <div className="relative h-24 top-30 z-10 text-center px-2">
        <div className="flex justify-center py-1">
          <img
            src="./assets/img/Logo_Last.png"
            alt="Logo"
            className="w-32 h-auto"
          />
        </div>
        <h2 className="text-l font-bold mb-2 mt-4 tracking-wider">
          <p className="text-xs text-gray-300">
            © 2025 V11QR. All rights reserved.
          </p>
        </h2>  
      </div>
     


      <div className="w-full flex flex-col items-end mb-4 p-5 space-y-4">
  {/* <p className="text-white text-lg pr-18 font-semibold">Download Our App</p> */}
  <div className="flex flex-wrap justify-center gap-4">
    {/* Google Play Store */}
    <a
      href="https://play.google.com/store"
      target="_blank"
      rel="noopener noreferrer"
      className="transition-transform transform hover:scale-105"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
        alt="Get it on Google Play"
        className="h-12"
      />
    </a>

    {/* Apple App Store */}
    <a
      href="https://www.apple.com/app-store/"
      target="_blank"
      rel="noopener noreferrer"
      className="transition-transform transform hover:scale-105"
    >
      <img
        src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
        alt="Download on the App Store"
        className="h-12"
      />
    </a>
  </div>


</div>
      
    </footer>
  );
};

export default Footer;
