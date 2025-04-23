import { useEffect, useRef } from 'react';
import Bhavika_LogoF from '../../../src/assets/img/clients/Bhavika_LogoF.png'
import Dessert_Bossz from '../../../src/assets/img/clients/Dessert_Bossz.png'
import IBS from '../../../src/assets/img/clients/IBS.png'
import Kurunji_Metro from '../../../src/assets/img/clients/Kurunji_Metro.png'
import LOGO_Karaikudi from '../../../src/assets/img/clients/LOGO_Karaikudi.png'
import thalappakatti from '../../../src/assets/img/clients/thalappakatti.gif'
import Together_Restaurant from '../../../src/assets/img/clients/Together_Restaurant.png'

export default function WorldwideCustomers() {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  // Sample customer data
  const customers = [
    { id: 1, name: "Bhavika_LogoF", logo: Bhavika_LogoF },
    { id: 2, name: "Dessert_Bossz", logo: Dessert_Bossz },
    { id: 3, name: "IBS", logo: IBS },
    { id: 4, name: "Kurunji_Metro", logo: Kurunji_Metro },
    { id: 5, name: "LOGO_Karaikudi", logo: LOGO_Karaikudi },
    { id: 6, name: "thalappakatti", logo: thalappakatti },
    { id: 7, name: "Together_Restaurant", logo: Together_Restaurant }
  ];

  // Animation for horizontal scrolling and up/down movement
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    let animationFrameId: number;
    let scrollPosition = 0;
    const logoElements = scrollContainer?.querySelectorAll('.customer-logo');
    // const containerWidth = scrollContainer?.offsetWidth || 0;

    const animate = () => {
      if (scrollContainer) {
        // Horizontal scrolling logic
        scrollPosition += 0.5;
        if (scrollPosition >= scrollContainer.scrollWidth / 2) {
          scrollPosition = 0;  // Reset scroll position when halfway
        }
        scrollContainer.scrollLeft = scrollPosition;

        // Up and down movement for each logo
        if (logoElements) {
          logoElements.forEach((logo, index) => {
            const offset = Math.sin(Date.now() / 1000 + index) * 10;
            (logo as HTMLElement).style.transform = `translateY(${offset}px)`;
          });
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="w-full py-12 bg overflow-hidden">
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-5xl font-semibold text-gray-800 v11-roboto tracking-wide relative inline-block">
          Our worldwide reputed customers
          <div className="absolute left-0 right-0 mx-auto w-20 h-1  bottom-0"></div>
        </h2>
      </div>

      {/* Main content with world map background */}
      <div className="relative h-90 max-w-full mx-auto px-4">
        {/* World map background */}
        <div className="absolute inset-0 z-0 opacity-50">
          <div className="w-full h-full bg-contain bg-center bg-no-repeat" style={{
            backgroundImage: 'url("/assets/img/worldmap.png")',
            backgroundSize: 'contain'
          }}></div>
        </div>

        {/* Customer logos with scrolling effect */}
        <div
          ref={scrollContainerRef}
          className="relative z-10 flex overflow-x-hidden"
        >
          <div className="flex space-x-8 pt-30 py-12">
            {customers.concat(customers).map((customer) => (
              <div
                key={customer.id}
                className="customer-logo flex-shrink-0 w-32 h-32 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center p-4"
              >
                <img
                  src={customer.logo}
                  alt={`${customer.name} logo`}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
