import React from "react";
import "../../styles.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Footer: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <footer
      className="relative bg-green-500  text-white pb-10 overflow-hidden"
      data-aos="fade-up"
    >
      {/* <div className='container mt-18 h-40 bg-green-500 max-w-full py-6 pb-0"'> */}
      <div className=" py-4">
        <div className="text-align-center">
          <h2 className="text-center text-white  text-lg font-semibold">
            Follow V11Tech
          </h2>
        </div>
        {/* <div className='container h-20  max-w-full flex items-center justify-between px-12'> */}

        <div
          className=" flex justify-center gap-4 mt-4 mb-4"
          data-aos="fade-down"
        >
          {/* Social Media Icons */}
          {/* Facebook */}
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <svg
              className="w-10 h-10 text-white transition duration-300 ease-in-out transform hover:scale-130"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M22 12.07C22 6.51 17.52 2 12 2S2 6.51 2 12.07c0 5 3.66 9.13 8.44 9.93v-7.03H7.9v-2.9h2.54V9.83c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.25 0-1.63.78-1.63 1.58v1.89h2.78l-.44 2.9h-2.34v7.03C18.34 21.2 22 17.07 22 12.07z" />
            </svg>
          </a>
          {/* Twitter */}
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <svg
              className="w-10 h-10 text-white transition duration-300 ease-in-out transform hover:scale-130"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0016.6 2c-2.5 0-4.49 2.17-4.49 4.84 0 .38.04.76.12 1.13A12.94 12.94 0 013 4.17a5 5 0 001.38 6.62A4.38 4.38 0 012.8 10v.06a4.51 4.51 0 003.6 4.42 4.52 4.52 0 01-2.03.08A4.51 4.51 0 007.88 19a9.05 9.05 0 01-5.58 1.93A9.9 9.9 0 012 20.83a12.84 12.84 0 007.29 2.15c8.75 0 13.54-7.55 13.54-14.1 0-.21 0-.42-.01-.63A10.02 10.02 0 0023 3z" />
            </svg>
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <svg
              className="w-10 h-10 text-white transition duration-10 ease-in-out transform hover:scale-130"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zm4.25 3.75a4.75 4.75 0 110 9.5 4.75 4.75 0 010-9.5zm0 1.5a3.25 3.25 0 100 6.5 3.25 3.25 0 000-6.5zm5.25-.88a.88.88 0 110 1.75.88.88 0 010-1.75z" />
            </svg>
          </a>
          {/* LinkedIn */}
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <svg
              className="w-10 h-10 text-white transition duration-300 ease-out-in transform hover:scale-130"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M19 0h-14C2.24 0 1 1.24 1 2.75v18.5C1 22.76 2.24 24 3.75 24h14.5c1.51 0 2.75-1.24 2.75-2.75V2.75C22 1.24 20.76 0 19.25 0zM8.75 20H5.5V9h3.25v11zm-1.63-12.5c-1.04 0-1.87-.83-1.87-1.87s.83-1.87 1.87-1.87 1.87.83 1.87 1.87-.84 1.87-1.87 1.87zM20 20h-3.25v-5.35c0-1.27-.03-2.91-1.78-2.91-1.78 0-2.06 1.39-2.06 2.82V20H9.66V9h3.12v1.51h.04c.43-.82 1.48-1.68 3.05-1.68 3.26 0 3.86 2.15 3.86 4.94V20z" />
            </svg>
          </a>
        </div>
        {/* </div> */}
        <div className="quickens flex flex-wrap justify-center gap-8 text-md text-white">
          <a href="/" className="transition">
            Home
          </a>
          <a href="/terms" className="transition">
            Terms and Conditions
          </a>
          <a href="/privacy" className="transition">
            Privacy Policy
          </a>
          <a href="/contact" className="transition">
            Contact Us
          </a>
        </div>
      </div>

      {/* Top section with logo and social icons */}
      <div className="flex justify-between pt-4 px-8 items-end">
        <div className=" align-top w-130 text-green-500">
          <h2 className="text-white underline underline-offset-4 font-bold text-xl">
            Elevate Your Business Efficiency with V11 tech{" "}
          </h2>

          <p className="text-white text-md text-justify font-semibold mt-2">
            Ours V11 POS Software is the ultimate solution designed to transform
            your business operations into a streamlined and efficient
            powerhouse. With a focus on simplicity, versatility, and
            cutting-edge technology.
          </p>
        </div>

        <div className="md:w-1/3 flex flex-col items-center md:items-end px-4 pb-18">
          <h2 className="text-white text-lg font-semibold pb-4 px-6 text-center md:text-right">
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
                className="h-10 object-contain download_logo"
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
                className="h-10 object-contain download_logo"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Navigation Links */}

      {/* Bottom Logo & Copyright */}
      <div className="relative h-24 text-center px-2">
        <div className="flex justify-center py-1">
          <img
            src="assets/img/logov11.png"
            alt="Logo"
            className="w-32 h-auto"
          />
        </div>
        <div className="flex justify-end pr-8 p-4">
          <p className="">Payment Methods</p>
          <img
            src="assets/img/mas.png"
            alt="MasterCard"
            className="h-24 w-24 p-5"
          />
          <img
            src="assets/img/visa (1).png"
            alt="Visa"
            className="h-24 w-24 pl-4"
          />
        </div>
      </div>
      <h2 className="text-l font-bold mb-2 mt-4 tracking-wider">
        <p className="text-xs text-white">© 2025 V11QR. All rights reserved.</p>
      </h2>

      {/* <div className="flex justify-center gap-4 mt-4">
       */}
    </footer>
  );
};

export default Footer;
