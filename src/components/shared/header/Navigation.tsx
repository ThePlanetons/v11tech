// NavigationBar.tsx
import React, { forwardRef } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';


interface NavigationBarProps {
  scrolled: boolean;
  mobileMenuOpen: boolean;
  productsDropdownOpen: boolean;
  toggleMobileMenu: () => void;
  toggleProductsDropdown: (e: React.MouseEvent) => void;
  setProductsDropdownOpen: React.Dispatch<React.SetStateAction<boolean>>;
  products: { name: string; image: string, link: string }[];
}
// Removed unused MyButton component

const NavigationBar = forwardRef<HTMLDivElement, NavigationBarProps>(({
  scrolled,
  mobileMenuOpen,
  productsDropdownOpen,
  toggleMobileMenu,
  toggleProductsDropdown,
  setProductsDropdownOpen,
  products,
}, ref) => {

  // This effect is moved to HomePage so that state management stays in one place.
  // However, you can always add a click-outside effect here if you prefer to keep it localized.

  const location = useLocation();

  const menuItems = [
    { label: 'About Us', path: '/about-us' },
    { label: 'Services', path: '/services' },
    { label: 'Customers', path: '/customers' },
    { label: 'Contact Us', path: '/contact-us' },
  ];

  const isActive = location.pathname.startsWith('/products');
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/Book-Demo');
  };


  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between px-4 md:px-6 py-4 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg backdrop-blur-sm' : 'bg-transparent'}`}
      >
        {/* Logo */}
        <Link to="/">
          <div className="transition-all duration-300 hover:scale-105 cursor-pointer">
            <img
              src="/assets/img/Logo_Last.png"
              alt="logo"
              className="w-36 md:w-52 pl-2 md:pl-20"
            />
          </div>
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-green-500 focus:outline-none"
          onClick={toggleMobileMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                mobileMenuOpen
                  ? 'M6 18L18 6M6 6l12 12'
                  : 'M4 6h16M4 12h16M4 18h16'
              }
            />
          </svg>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {/* Products with Mega Dropdown */}
          <div className="relative" ref={ref}>
            {/* <a
              href="#products"
              className="hover:text-green-400 transition-colors duration-300 relative group font-medium flex items-center"
              onClick={toggleProductsDropdown}
            >
              Products
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-4 w-4 ml-1 transition-transform duration-300 ${productsDropdownOpen ? 'rotate-180' : ''}`}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-green-500 transition-all duration-300 group-hover:w-full"></span>
            </a> */}
            <Link
              to="#products"
              className={`relative group font-medium flex items-center transition-colors duration-300 ${isActive ? 'text-green-500' : 'hover:text-green-400'
                }`}
              onClick={toggleProductsDropdown}
            >
              Products
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-4 w-4 ml-1 transition-transform duration-300 ${productsDropdownOpen ? 'rotate-180' : ''
                  }`}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              <span
                className={`absolute left-0 bottom-0 h-0.5 bg-green-500 transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
              ></span>
            </Link>

            {/* Products Mega Menu Dropdown */}
            <div
              className={`absolute left-56 transform -translate-x-1/2 mt-7 pb-4 px-4 bg-white rounded-xl shadow-2xl overflow-hidden transition-all duration-500 origin-top z-50 ${productsDropdownOpen
                ? 'opacity-100 scale-y-100 translate-y-0'
                : 'opacity-0 scale-y-0 -translate-y-4 pointer-events-none'
                }`}
              style={{ width: 'max(97vw, 800px)', maxWidth: '2000px' }}
            >
              <div className="p-6">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                  {products.map((product, index) => (
                    <Link
                      key={product.name}
                      to={`/${product.link}`}
                      className={`flex flex-col items-center group transition-all duration-300 transform ${productsDropdownOpen
                        ? `opacity-100 translate-y-0 delay-${index * 50}`
                        : 'opacity-0 translate-y-4'
                        }`
                      }
                    >
                      <div className="bg-gray-100 w-full aspect-square rounded-lg mb-3 flex items-center justify-center p-4 overflow-hidden group-hover:bg-green-50 transition-colors duration-300">
                        <div className="w-full h-full rounded-lg bg-white shadow-sm flex items-center justify-center overflow-hidden">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-110"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.onerror = null;
                              target.src = '/assets/img/placeholder.png';
                            }}
                          />
                        </div>
                      </div>
                      <span className="text-center text-sm font-medium text-gray-700 group-hover:text-green-600 transition-colors duration-300 relative">
                        {product.name}
                        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-green-500 transition-all duration-300 group-hover:w-full"></span>
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Other Nav Links */}
          {/* {['About Us', 'Services', 'Customers', 'Contact Us'].map((item) => (
            <a
              key={item}
              href={'/about'}
              className="hover:text-green-400 transition-colors duration-300 relative group font-medium"
            >
              {item}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-green-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))} */}
          <div className="flex space-x-6">
            {menuItems.map(({ label, path }) => {
              const isActive = location.pathname === path;
              return (
                <Link
                  key={label}
                  to={path}
                  className={`relative group font-medium transition-colors duration-300 ${isActive ? 'text-green-500' : 'hover:text-green-400'
                    }`}
                >
                  {label}
                  <span
                    className={`absolute left-0 bottom-0 h-0.5 bg-green-500 transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                  ></span>
                </Link>
              );
            })}
          </div>
        </nav>

        {/* Desktop Book a Demo Button */}
        <button
          className="hidden md:block ml-4 font-semibold px-4 py-2 rounded-md text-white bg-green-500 overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-105 transform hover:-translate-y-1"
          onClick={handleClick}
        >
          <span className="z-10 relative">Book a Demo</span>
          <span className="absolute left-0 top-0 w-full h-full bg-green-700 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 z-0"></span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-white z-40 transform transition-transform duration-300 ease-in-out ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex flex-col h-full px-6 py-20 overflow-y-auto">
          <button
            className="absolute top-4 right-4 p-2 rounded-md text-gray-800 hover:text-green-500 focus:outline-none"
            onClick={toggleMobileMenu}
          >
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg> */}
          </button>
          <div className="flex flex-col space-y-6">
            {/* Mobile Products Accordion */}
            <div className="border-b border-gray-200">
              <button
                className="flex justify-between items-center w-full py-3 text-xl font-medium hover:text-green-500 transition-colors duration-300"
                onClick={(e) => {
                  e.preventDefault();
                  setProductsDropdownOpen(!productsDropdownOpen);
                }}
              >
                Products
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-5 w-5 transition-transform duration-300 ${productsDropdownOpen ? 'rotate-180' : ''}`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${productsDropdownOpen ? 'max-h-96' : 'max-h-0'}`}
              >
                <div className="grid grid-cols-2 gap-4 pl-4 pb-3">
                  {products.map((product, index) => (
                    <Link
                      key={product.name}
                      to={`/${product.link}`}
                      className={`flex items-center py-2 text-gray-600 hover:text-green-500 transition-all duration-300 transform ${productsDropdownOpen
                        ? `opacity-100 translate-y-0 delay-${index * 50}`
                        : 'opacity-0 -translate-y-4'
                        }`}
                      onClick={toggleMobileMenu}
                    >
                      <div className="w-8 h-8 bg-gray-100 rounded-full mr-2 flex items-center justify-center">
                        <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center overflow-hidden">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-auto object-contain"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.onerror = null;
                              target.src =
                                '/assets/img/placeholder.png';
                            }}
                          />
                        </div>
                      </div>
                      <span className="text-sm">{product.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Other Mobile Nav Links */}

            {menuItems.map(({ label, path }) => (
              <a
                key={label}
                href={path}
                className="text-xl font-medium border-b border-gray-200 py-3 hover:text-green-500 transition-colors duration-300"
                onClick={toggleMobileMenu}
              >
                {label}
              </a>
            ))}
          </div>
          <button className="mt-8 font-semibold px-4 py-3 rounded-md bg-green-500 text-white hover:bg-green-600 transition-all duration-300">
            Book a Demo
          </button>
        </div>
      </div>
    </>
  );
});

export default NavigationBar;
