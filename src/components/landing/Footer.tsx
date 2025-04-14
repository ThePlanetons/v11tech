import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../styles.css";

const Footer: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <footer
      className="relative bg-green-500 text-white pb-6 overflow-hidden w-full"
      data-aos="fade-up"
    >
      {/* Social Media Section */}
      <div className="py-4">
        <div className="text-center">
          <h2 className="text-white text-lg font-semibold">
            Follow V11Tech
          </h2>
        </div>

        <div
          className="flex justify-center gap-4 mt-4 mb-4"
          data-aos="fade-down"
        >
          {/* Social Media Icons */}
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="transition-transform hover:scale-110"
          >
            <svg
              className="w-8 h-8 md:w-10 md:h-10 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M22 12.07C22 6.51 17.52 2 12 2S2 6.51 2 12.07c0 5 3.66 9.13 8.44 9.93v-7.03H7.9v-2.9h2.54V9.83c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.25 0-1.63.78-1.63 1.58v1.89h2.78l-.44 2.9h-2.34v7.03C18.34 21.2 22 17.07 22 12.07z" />
            </svg>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="transition-transform hover:scale-110"
          >
            <svg
              className="w-8 h-8 md:w-10 md:h-10 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0016.6 2c-2.5 0-4.49 2.17-4.49 4.84 0 .38.04.76.12 1.13A12.94 12.94 0 013 4.17a5 5 0 001.38 6.62A4.38 4.38 0 012.8 10v.06a4.51 4.51 0 003.6 4.42 4.52 4.52 0 01-2.03.08A4.51 4.51 0 007.88 19a9.05 9.05 0 01-5.58 1.93A9.9 9.9 0 012 20.83a12.84 12.84 0 007.29 2.15c8.75 0 13.54-7.55 13.54-14.1 0-.21 0-.42-.01-.63A10.02 10.02 0 0023 3z" />
            </svg>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="transition-transform hover:scale-110"
          >
            <svg
              className="w-8 h-8 md:w-10 md:h-10 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zm4.25 3.75a4.75 4.75 0 110 9.5 4.75 4.75 0 010-9.5zm0 1.5a3.25 3.25 0 100 6.5 3.25 3.25 0 000-6.5zm5.25-.88a.88.88 0 110 1.75.88.88 0 010-1.75z" />
            </svg>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="transition-transform hover:scale-110"
          >
            <svg
              className="w-8 h-8 md:w-10 md:h-10 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M19 0h-14C2.24 0 1 1.24 1 2.75v18.5C1 22.76 2.24 24 3.75 24h14.5c1.51 0 2.75-1.24 2.75-2.75V2.75C22 1.24 20.76 0 19.25 0zM8.75 20H5.5V9h3.25v11zm-1.63-12.5c-1.04 0-1.87-.83-1.87-1.87s.83-1.87 1.87-1.87 1.87.83 1.87 1.87-.84 1.87-1.87 1.87zM20 20h-3.25v-5.35c0-1.27-.03-2.91-1.78-2.91-1.78 0-2.06 1.39-2.06 2.82V20H9.66V9h3.12v1.51h.04c.43-.82 1.48-1.68 3.05-1.68 3.26 0 3.86 2.15 3.86 4.94V20z" />
            </svg>
          </a>
        </div>
        
        {/* Navigation Links */}
        <div className="quickens flex flex-wrap justify-center gap-4 md:gap-8 text-sm md:text-md text-white px-2">
          <a href="/" className="transition hover:underline">
            Home
          </a>
          <a href="/terms" className="transition hover:underline">
            Terms and Conditions
          </a>
          <a href="/privacy" className="transition hover:underline">
            Privacy Policy
          </a>
          <a href="/contact" className="transition hover:underline">
            Contact Us
          </a>
        </div>
      </div>

      {/* Business Description and App Download Section */}
      <div className="flex flex-col md:flex-row justify-between pt-4 px-4 md:px-8 gap-6">
        <div className="md:w-1/2 lg:w-3/5">
          <h2 className="text-white underline underline-offset-4 font-bold text-lg md:text-xl">
            Elevate Your Business Efficiency with V11 tech
          </h2>
          <p className="text-white text-sm md:text-md text-justify font-semibold mt-2">
            Ours V11 POS Software is the ultimate solution designed to transform
            your business operations into a streamlined and efficient
            powerhouse. With a focus on simplicity, versatility, and
            cutting-edge technology.
          </p>
        </div>

        <div className="md:w-1/2 lg:w-2/5 flex flex-col items-center md:items-end px-2 md:px-4">
          <h2 className="text-white text-lg font-semibold pb-2 md:pb-4 text-center md:text-right">
            Download Our App
          </h2>
          <div className="flex flex-row gap-4 justify-center md:justify-end">
            {/* Google Play Store */}
            <a
              href="https://play.google.com/store"
              target="_blank"
              rel="noopener noreferrer"
              className="z-10 transition-transform duration-200 hover:scale-110"
            >
              <img
                src="assets/img/gplay.avif"
                alt="Get it on Google Play"
                className="h-8 md:h-10 object-contain download_logo"
              />
            </a>

            {/* Apple App Store */}
            <a
              href="https://play.google.com/store"
              target="_blank"
              rel="noopener noreferrer"
              className="z-10 transition-transform duration-200 hover:scale-110"
            >
              <img
                src="assets/img/appst.avif"
                alt="Download on the App Store"
                className="h-8 md:h-10 object-contain download_logo"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Logo and Payment Methods Section */}
      <div className="mt-6 px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo Section */}
          <div className="flex flex-col items-center mb-4 md:mb-0">
            <div className="flex justify-center py-1">
              <img
                src="assets/img/logov11.png"
                alt="Logo"
                className="w-24 md:w-32 h-auto"
              />
            </div>
            <p className="text-xs  text-white mt-2">
              © 2025 V11QR. All rights reserved.
            </p>
          </div>
          
          {/* Payment Methods Section */}
          <div className="flex flex-col justify-between items-center md:items-end">
            <p className="text-md md:text-lg font-semibold mb-2">Payment Methods</p>
            <div className="flex items-center justify-center gap-2 md:gap-4">
              <img
                src="assets/img/mas.png"
                alt="MasterCard"
                className="h-16 w-16 md:h-20 md:w-20 object-contain"
              />
              <img
                src="assets/img/visa (1).png"
                alt="Visa"
                className="h-16 w-16 md:h-20 md:w-20 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
