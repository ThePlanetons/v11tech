import { useEffect, useRef } from 'react';

import '../../styles.css';

interface ShopItem {
  title: string;
  imgSrc: string;
  altText: string;
  description: string;
}

function ShopsSection({ shops }: { shops: ShopItem[] }) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const shopCards = document.querySelectorAll('.shop-card');
    shopCards.forEach((card) => observer.observe(card));

    // Cleanup observer on unmount
    return () => {
      shopCards.forEach((card) => observer.unobserve(card));
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-800 v11-roboto tracking-wide">
        Hot Picks
        </h2>

        {/* Mobile view (horizontal scroll) */}
        <div className="flex overflow-x-auto pb-6 md:hidden">
          <div className="flex gap-4 snap-x snap-mandatory">
            {shops.map((shop, index) => (
              <div
                key={index}
                className="shop-card opacity-0 rounded-xl overflow-hidden shadow-lg flex-shrink-0 w-64 snap-center bg-white transform hover:-translate-y-2 hover:scale-105 transition-all duration-500"
                style={{
                  animationDelay: `${index * 150}ms`,
                  animationFillMode: 'forwards'
                }}
              >
                <div className="relative overflow-hidden h-80">
                  <img
                    src={shop.imgSrc}
                    alt={shop.altText}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                    <p className="text-white text-lg font-bold">{shop.description}</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {shop.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop/tablet view (grid) */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-8">
          {shops.map((shop, index) => (
            <div
              key={index}
              className="shop-card opacity-0 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 bg-white transform hover:-translate-y-2 hover:scale-105"
              style={{
                animationDelay: `${index * 150}ms`,
                animationFillMode: 'forwards'
              }}
            >
              <div className="relative overflow-hidden h-80">
                <img
                  src={shop.imgSrc}
                  alt={shop.altText}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                  <p className="text-white text-lg font-bold">{shop.description}</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {shop.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopsSection;