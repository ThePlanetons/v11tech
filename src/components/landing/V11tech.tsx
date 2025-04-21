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
    { icon: "buffet", text: "All-you-can-eat Restaurants" },
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
          <img
          src="/assets/img/pos/Bars.png"
          alt="Icon"
          className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20"
        />
        );
      case "burger":
        return (
          <img
  src="/assets/img/pos/QSR.png"
  alt="Icon"
  className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20"
/>
        );
      case "hotel":
        return (
          <img
  src="/assets/img/pos/HotelsResorts.png"
  alt="Icon"
  className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20"
/>
        );
        case "bakery":
        return (
          <img
  src="/assets/img/pos/BakeryShops.png"
  alt="Icon"
  className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20"
/>
        );

        case "chain":
        return (
          <img
  src="/assets/img/pos/Chains.png"
  alt="Icon"
  className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20"
/>
        );
        case "restaurant":
        return (
          <img
  src="/assets/img/pos/FSR.png"
  alt="Icon"
  className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20"
/>
        );
        case "cloud-kitchen":
        return (
          <img
  src="/assets/img/pos/CloudKitchens.png"
  alt="Icon"
  className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20"
/>
        );
        
        case "food-court":
        return (
          <img
  src="/assets/img/pos/FoodCourts.png"
  alt="Icon"
  className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20"
/>
        );

        case "canteen":
        return (
          <img
  src="/assets/img/pos/Canteens.png"
  alt="Icon"
  className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20"
/>
        );
        
        case "buffet":
        return (
          <img
  src="/assets/img/pos/AIBuffet.png"
  alt="Icon"
  className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20"
/>
        );

        case "grocery":
          return (
            <img
    src="/assets/img/pos/FoodRetail.png"
    alt="Icon"
    className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20"
  />
          );

          case "popup-store":
            return (
              <img
      src="/assets/img/pos/PopUpStores.png"
      alt="Icon"
      className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20"
    />
            );
        
      // // For brevity, simplified icons for other cases
      // // default:
      // //   return (
      // //     <svg
      // //       xmlns="http://www.w3.org/2000/svg"
      // //       className="w-12 h-12"
      // //       viewBox="0 0 24 24"
      // //       fill="none"
      // //       stroke="currentColor"
      // //       strokeWidth="2"
      // //     >
      // //       <rect x="4" y="4" width="16" height="16" rx="2" />
      // //       <path d="M9 9h6v6H9z" />
      // //     </svg>
      //   );
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
            <span className="text-3xl md:text-5xl relative inline-block transition-all cursor-pointer duration-500 group-hover:text-green-500">
              V11QR
              <span className="absolute left-0 bottom-0 w-full h-1 bg-green-500 transition-all duration-500 group-hover:h-3"></span>
            </span>{" "}
            <span className="text-black text-3xl md:text-5xl transition-all duration-500">is perfect for</span>
          </h1>
        </div>

        {/* Service Grid */}
        <div 
          id="service-grid" 
          ref={gridRef} 
          className="lg:pl-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 invisible-element"
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
             <div
  className="
    mr-4 
    text-green-400 
    transition 
    duration-200 
    transform 
    group-hover:text-green-600 
    group-hover:scale-95 
    flex 
    items-center
  "
>
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