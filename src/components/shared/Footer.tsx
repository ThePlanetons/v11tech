import React from 'react';
import { Instagram, Facebook, Linkedin, Twitter, MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-green-500 text-white pt-6 pb-4">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo on Left */}
          <div className="mb-6 md:mb-0 md:pl-4 lg:pl-8 transform transition-transform hover:scale-105 w-full md:w-auto flex justify-center md:justify-start">
            <div className="flex items-center">
              <div className="text-white pt-4 md:pl-10 md:pt-10">
                <span className="font-bold text-lg"></span>
                <img src="/assets/img/Logo_Last.png" alt="V11 logo" className="h-10 w-65  pb-6 pl-16 pr-16 md:pl-0 md:pr-32" />
                <div className="text-xs"></div>
              </div>
            </div>
          </div>

          {/* Center - Follow and Social Links */}
          <div className="mb-6 md:mb-0 text-center w-full md:w-auto">
            <p className="text-center font-medium mb-3">Follow V11 Tech®</p>
            <div className="flex space-x-2 md:space-x-3 justify-center">
              <a href="https://www.instagram.com/v11tech/" target="_blank" className="rounded-full p-1 md:p-2 transform transition-all hover:scale-110 duration-200">
                <Instagram size={24} className="md:w-8 md:h-8 text-white" />
              </a>
              <a href="https://www.facebook.com/v11tech/" target="_blank" className="rounded-full p-1 md:p-2 transform transition-all hover:scale-110 duration-200">
                <Facebook size={24} className="md:w-8 md:h-8 text-white" />
              </a>
              <a href="https://www.linkedin.com/company/v11-tech/about/?viewAsMember=true" target="_blank" className="rounded-full p-1 md:p-2 transform transition-all hover:scale-110 duration-200">
                <Linkedin size={24} className="md:w-8 md:h-8 text-white" />
              </a>
              <a href="https://x.com/" target="_blank" className="rounded-full p-1 md:p-2 transform transition-all hover:scale-110 duration-200">
                <Twitter size={24} className="md:w-8 md:h-8 text-white" />
              </a>
              <a href="https://wa.me/+85268098597" target="_blank" className="rounded-full p-1 md:p-2 transform transition-all hover:scale-110 duration-200">
                <MessageCircle size={24} className="md:w-8 md:h-8 text-white" />
              </a>
            </div>
          </div>

          {/* Right - App Download */}
          <div className="text-center md:text-right w-auto md:w-auto">
            <p className="font-medium mb-3 md:pr-6 lg:pr-24">Download our App</p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-end space-y-2 sm:space-y-0 sm:space-x-2">
              <a href="#" className="inline-block transform transition-transform hover:scale-105">
                <img src="/assets/img/playstore.png" alt="Google Play" className="h-8 w-32 md:w-40" />
              </a>
              <a href="#" className="inline-block transform transition-transform hover:scale-105">
                <img src="/assets/img/appstore.png" alt="App Store" className="h-7 w-32 md:w-40" />
              </a>
            </div>
          </div>
        </div>

        {/* Middle section with tagline, navigation and payment */}
        <div className="relative flex flex-col md:flex-row items-center justify-between mt-6 md:mt-0 pb-8">
          {/* Tagline */}
          <div className="text-center md:text-left mb-4 md:mb-0 md:pl-4 lg:pl-11 w-full md:w-1/3">
            <p>V11 POS Software simplifies your business <br className="hidden sm:block"/>with smart, efficient, and modern solutions.</p>
          </div>
          
          {/* Centered Navigation */}
          <div className="mb-0 md:mb-0 md:absolute md:left-1/2 md:-translate-x-1/2 w-full md:w-auto">
            <div className="list-none flex flex-auto justify-center  md:justify-center space-x-8 md:space-x-8">
              <li>
                <a href="#" className="inline-block transform transition-all hover:scale-110 duration-200 text-xs md:text-base ">Home</a>
              </li>
              <li>
                <a href="/Termsandcondition" className="inline-block transform transition-all hover:scale-110 duration-200 text-xs md:text-base">Terms and Condition</a>
              </li>
              <li>
                <a href="/PrivacyandPolicy" className="inline-block transform transition-all hover:scale-110 duration-200 text-xs md:text-base">Privacy Policy</a>
              </li>
              <li>
                <a href="/contact-us" className="inline-block transform transition-all hover:scale-110 duration-200 text-xs md:text-base">Contact</a>
              </li>
            </div>
          </div>

          {/* Right-Aligned Payment Image */}
          <div className="md:ml-auto w-full md:w-1/3 flex justify-center md:justify-end">
            <img src="/assets/img/payment.png" alt="Payment Methods" className="h-8 w-85" />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row border-t border-green-400 pt-4">
          {/* Copyright */}
          <div className="mb-4 md:mb-0 text-sm flex justify-center w-full">
            <p>©2025 V11Tech. All rights reserved. Designed By TP9</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;