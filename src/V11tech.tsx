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
        <div id="header" ref={headerRef} className="text-center mb-32 pt-16 invisible-element text-gray-800 v11-roboto tracking-wide">
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

     
      {/* </div> */}
    </div>
    


// hai
// hai
// hai
// hai


    
  );
};


export default V11QRLanding;