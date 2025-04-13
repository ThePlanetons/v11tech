import React, { useEffect, useRef } from 'react';
import teaShopImg from '../../assets/img/TeaShops.jpeg';
import groceryShopImg from '../../assets/img/GroceryShop.jpeg';
import fashionShopImg from '../../assets/img/FashionsShop.jpeg';
import stationaryShopImg from '../../assets/img/StationaryShop.jpeg';
import '../../styles.1.css'

interface ShopItem {
  title: string;
  imgSrc: string;
  altText: string;
  description: string;
}

const ShopsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const shops: ShopItem[] = [
    {
      title: "Restaurants & Tea Shops",
      imgSrc: teaShopImg,
      altText: "Restaurants & Tea Shops",
      description: "Discover local flavors and cozy atmospheres",
    },
    {
      title: "Grocery Shop",
      imgSrc: groceryShopImg,
      altText: "Grocery Shop",
      description: "Fresh produce and everyday essentials",
    },
    {
      title: "Clothing & Fashions Shop",
      imgSrc: fashionShopImg,
      altText: "Clothing & Fashions Shop",
      description: "Stay trendy with the latest styles",
    },
    {
      title: "Stationary Shop",
      imgSrc: stationaryShopImg,
      altText: "Stationary Shop",
      description: "Quality supplies for work and school",
    },
  ];

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
    <section ref={sectionRef} className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-800 v11-roboto tracking-wide">
          Featured Shops
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
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
