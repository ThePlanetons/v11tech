import React, { useEffect, useRef } from "react";


interface ServiceItem {
  icon: string;
  text: string;
  subtext?: string;
}

const V11QRLanding: React.FC = () => {

  
  // Refs for elements we want to animate on scroll
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  
  // Service items data
  const serviceItems: ServiceItem[] = [
    { icon: "beer-mug", text: "Bar" },
    { icon: "burger", text: "Quick Service Restaurants", subtext: "(QSR)" },
    { icon: "hotel", text: "Hotels & Resorts" },
    { icon: "bakery", text: "Bakery Shops" },
    { icon: "chain", text: "Chains" },
    { icon: "restaurant", text: "Full Service Restaurants" },
    { icon: "cloud-kitchen", text: "Cloud kitchens" },
    { icon: "food-court", text: "Food Courts" },
    { icon: "canteen", text: "Canteens" },
    { icon: "buffet", text: "All-you-can-eat", subtext: "Restaurants" },
    { icon: "grocery", text: "Food Retail" },
    { icon: "popup-store", text: "Pop-up Stores" },
  ];


  // Set up intersection observer for scroll animations
  useEffect(() => {
    // Function to handle element visibility on scroll
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Add animation class when element comes into view
          if (entry.target.id === 'header') {
            entry.target.classList.add('animate-fadeInUp');
          } else if (entry.target.id === 'service-grid') {
            entry.target.classList.add('animate-scaleIn');
            
            // Animate each service item with a delay
            const items = entry.target.querySelectorAll('.service-item');
            items.forEach((item, index) => {
              setTimeout(() => {
                (item as HTMLElement).style.opacity = '1';
                (item as HTMLElement).style.transform = 'translateY(0)';
              }, 100 * index);
            });
          }
        }
      });
    };

    // Create observer
    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    });
    
    // Observe elements
    if (headerRef.current) {
      observer.observe(headerRef.current);
    }
    
    if (gridRef.current) {
      observer.observe(gridRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  // Function to render icon
  const renderIcon = (iconName: string) => {
    // For simplicity, using SVGs directly - replace with your actual icons
    switch (iconName) {
      case "beer-mug":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-12 h-12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M17 6V20H7V6M7 16H4V12H7M17 16H20V12H17M11 6V3H13V6" />
          </svg>
        );
      case "burger":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-12 h-12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M4 10h16M4 14h16M18 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2z" />
            <path d="M6 16.5h12" />
            <path d="M7 12l.5 2M12 12l.5 2M17 12l.5 2" />
          </svg>
        );
      case "hotel":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-12 h-12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16M1 9h22M1 16h22M9 5v16M15 5v16" />
          </svg>
        );
      // For brevity, simplified icons for other cases
      default:
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-12 h-12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <rect x="4" y="4" width="16" height="16" rx="2" />
            <path d="M9 9h6v6H9z" />
          </svg>
        );
    }
  };

  // Function to handle scroll to section
  // const scrollToSection = (sectionId: string) => {
  //   const section = document.getElementById(sectionId);
  //   if (section) {
  //     section.scrollIntoView({ behavior: 'smooth' });
  //   }
  // };

  return (
    <div className="bg min-h-screen  relative overflow-hidden">
      {/* Background animation */}
      <div id="bg-animation" className="absolute inset-0 z-0 opacity-10"></div>

      {/* Scroll-to buttons */}
      {/* <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-20 flex flex-col gap-4">
        <button 
          onClick={() => scrollToSection('header')}
          className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 hover:scale-150 transition-all duration-300"
          aria-label="Scroll to header"
        />
        <button 
          onClick={() => scrollToSection('service-grid')}
          className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 hover:scale-150 transition-all duration-300"
          aria-label="Scroll to services"
        />
      </div> */}

      <div className="container mx-auto px-4 z-10 relative">
        {/* Header */}
        <div id="header" ref={headerRef} className="text-center mb-32 pt-16 invisible-element">
          <h1 className="text-5xl font-bold inline-block group">
            <span className="relative inline-block transition-all cursor-pointer duration-500 group-hover:text-green-500">
              V11QR
              <span className="absolute left-0 bottom-0 w-full h-1 bg-green-500 transition-all duration-500 group-hover:h-3"></span>
            </span>{" "}
            <span className="text-black transition-all duration-500">is perfect for</span>
          </h1>
        </div>

        {/* Service Grid */}
        <div 
          id="service-grid" 
          ref={gridRef} 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 invisible-element"
        >
          {serviceItems.map((item, index) => (
            <div
              key={index}
              className="service-item flex items-center p-4 rounded-lg cursor-pointer transition-all duration-300 hover:-translate-y-2 group"
              style={{ 
                opacity: 0, 
                transform: 'translateY(20px)', 
                transition: 'opacity 0.5s ease, transform 0.5s ease' 
              }}
            >
              <div className="mr-4 text-green-400 transform transition-all duration-100 group-hover:text-green-600 group-hover:scale-95 group-hover:-rotate-360">
                {renderIcon(item.icon)}
              </div>
              <div className="transition-all duration-300 group-hover:translate-x-2">
                <p className="font-bold text-gray-800 transition-colors duration-300 group-hover:text-green-500">
                  {item.text} {item.subtext && <span className="text-gray-600 group-hover:text-green-600">{item.subtext}</span>}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='container mt-18 h-40 bg-green-500 max-w-full py-6 pb-0"'>
      <div className="text-align-center">
  <h2 className="text-center text-white mb-16 text-lg font-semibold">Follow V11Tech</h2>
</div>
      {/* <div className='container h-20  max-w-full flex items-center justify-between px-12'> */}
      
        
        <div className=" flex justify-center gap-4 -mt-10">
          {/* Social Media Icons */}
          {/* Facebook */}
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <svg className="w-10 h-10 text-white transition duration-300 ease-in-out transform hover:scale-130" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22 12.07C22 6.51 17.52 2 12 2S2 6.51 2 12.07c0 5 3.66 9.13 8.44 9.93v-7.03H7.9v-2.9h2.54V9.83c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.25 0-1.63.78-1.63 1.58v1.89h2.78l-.44 2.9h-2.34v7.03C18.34 21.2 22 17.07 22 12.07z" />
            </svg>
          </a>
          {/* Twitter */}
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
  <svg
    className="w-10 h-10 text-white transition duration-300 ease-in-out transform hover:scale-130"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0016.6 2c-2.5 0-4.49 2.17-4.49 4.84 0 .38.04.76.12 1.13A12.94 12.94 0 013 4.17a5 5 0 001.38 6.62A4.38 4.38 0 012.8 10v.06a4.51 4.51 0 003.6 4.42 4.52 4.52 0 01-2.03.08A4.51 4.51 0 007.88 19a9.05 9.05 0 01-5.58 1.93A9.9 9.9 0 012 20.83a12.84 12.84 0 007.29 2.15c8.75 0 13.54-7.55 13.54-14.1 0-.21 0-.42-.01-.63A10.02 10.02 0 0023 3z"/>
  </svg>
</a>

          {/* Instagram */}
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <svg className="w-10 h-10 text-white transition duration-10 ease-in-out transform hover:scale-130" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zm4.25 3.75a4.75 4.75 0 110 9.5 4.75 4.75 0 010-9.5zm0 1.5a3.25 3.25 0 100 6.5 3.25 3.25 0 000-6.5zm5.25-.88a.88.88 0 110 1.75.88.88 0 010-1.75z" />
            </svg>
          </a>
          {/* LinkedIn */}
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <svg className="w-10 h-10 text-white transition duration-300 ease-out-in transform hover:scale-130" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14C2.24 0 1 1.24 1 2.75v18.5C1 22.76 2.24 24 3.75 24h14.5c1.51 0 2.75-1.24 2.75-2.75V2.75C22 1.24 20.76 0 19.25 0zM8.75 20H5.5V9h3.25v11zm-1.63-12.5c-1.04 0-1.87-.83-1.87-1.87s.83-1.87 1.87-1.87 1.87.83 1.87 1.87-.84 1.87-1.87 1.87zM20 20h-3.25v-5.35c0-1.27-.03-2.91-1.78-2.91-1.78 0-2.06 1.39-2.06 2.82V20H9.66V9h3.12v1.51h.04c.43-.82 1.48-1.68 3.05-1.68 3.26 0 3.86 2.15 3.86 4.94V20z" />
            </svg>
          </a>
        </div>
        </div>
      {/* </div> */}
    </div>
    




    
  );
};


export default V11QRLanding;