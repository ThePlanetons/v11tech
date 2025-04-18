import React from 'react';
import { Instagram, Facebook, Linkedin, Twitter, MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-green-500 text-white pt-6 pb-4">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo on Left */}
          <div className="mb-6 md:mb-0 pl-25 transform transition-transform hover:scale-105">
            <div className="flex items-center">
              <div className=" text-white pt-10">
                <span className="font-bold text-lg"></span>
            <img src="/assets/img/Logo_Last.png" alt="V11 logo" className="h-50 w-50 pb-10" />

                <div className="text-xs"></div>
              </div>
            </div>
          </div>

          {/* Center - Follow and Social Links */}
          <div className="mb-6 md:mb-0 text-center pl-5 pb-8">
            <p className="text-center font-medium mb-3">Follow V11 Tech®</p>
            <div className="flex space-x-3 justify-center">
              <a href="#" className=" rounded-full p-2 transform transition-all hover:scale-110 duration-200">
                <Instagram size={35} className="" />
              </a>
              <a href="#" className="rounded-full p-2 transform transition-all hover:scale-110 duration-200">
                <Facebook size={35} className="" />
              </a>
              <a href="#" className=" rounded-full p-2 transform transition-all hover:scale-110 duration-200">
                <Linkedin size={35} className="" />
              </a>
              <a href="#" className=" rounded-full p-2 transform transition-all hover:scale-110 duration-200">
                <Twitter size={35} className="" />
              </a>
              <a href="#" className=" rounded-full p-2 transform transition-all hover:scale-110 duration-200">
                <MessageCircle size={35} className="" />
              </a>
            </div>
          </div>

          {/* Right - App Download */}
          <div className="text-center md:text-right">
            <p className="font-medium pr-24 mb-3">Download our App</p>
            <div className="flex flex-row space-y-2">
              <a href="#" className="inline-block transform transition-transform hover:scale-105">
                <img src="/assets/img/playstore.png" alt="Google Play" className="h-8 w-40" />
              </a>
              <a href="#" className="inline-block transform transition-transform hover:scale-105">
                <img src="/assets/img/appstore.png" alt="App Store" className="h-7 w-40" />
              </a>
            </div>
          </div>
        </div>

        <div className="relative flex items-center justify-center pl-11 pb-8 max-w-full">
          <p>V11 POS Software simplifies your business <br/>with smart, efficient, and modern solutions.</p>
  {/* Centered Navigation */}
  <nav className="absolute left-1/2 -translate-x-1/2 pr-6">
    <ul className="flex flex-wrap justify-center space-x-4 md:space-x-8">
      <li>
        <a href="#" className="hover:underline transition-all duration-200">Home</a>
      </li>
      <li>
        <a href="#" className="hover:underline transition-all duration-200">Terms and Condition</a>
      </li>
      <li>
        <a href="#" className="hover:underline transition-all duration-200">Privacy Policy</a>
      </li>
      <li>
        <a href="#" className="hover:underline transition-all duration-200">Contact Us</a>
      </li>
    </ul>
  </nav>

  {/* Right-Aligned Payment Image */}
  <div className="ml-auto justify-end pb-10">
    <img src="/assets/img/payment.png" alt="Payment Methods" className="h-8 w-85" />
  </div>
</div>
                  

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row border-t border-green-400 pt-4">
          {/* Copyright */}
          <div className="mb-4 md:mb-0 text-sm flex justify-center w-full">
            <p>©2025 V11Tech. All rights reserved</p>
          </div>


        </div>
      </div>
    </footer>
  );
};

export default Footer;