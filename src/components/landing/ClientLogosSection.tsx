// src/components/ClientLogosSection.tsx
import React, { useEffect, useRef } from 'react';

interface ClientLogosSectionProps {
  clientLogos: {
    src: string;
    alt: string;
  }[];
  title?: string;
}

const ClientLogosSection: React.FC<ClientLogosSectionProps> = ({ 
  clientLogos,
  title = "Our worldwide reputed customers" 
}) => {
  const logosRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animation for logos when they come into view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const logos = entry.target.querySelectorAll('.logo-item');
            logos.forEach((logo, index) => {
              setTimeout(() => {
                logo.classList.add('animate-in');
              }, index * 150);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (logosRef.current) {
      observer.observe(logosRef.current);
    }

    return () => {
      if (logosRef.current) {
        observer.unobserve(logosRef.current);
      }
    };
  }, [clientLogos]);

  // Only render the section if there are logos to display
  if (!clientLogos || clientLogos.length === 0) {
    return null;
  }

  return (
    <section className="relative py-5 md:py-9 overflow-hidden bg-[#c9f9da]">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-extrabold leading-tight text-gray-800 v11-roboto tracking-wide">
            {title}
          </h2>
          <div className="w-24 h-1 bg-green-500 mx-auto rounded-full"></div>
        </div>

        <div className="relative py-8">
          {/* World map background */}
          <div 
            className="absolute inset-0 bg-contain bg-center bg-no-repeat opacity-10"
            style={{ backgroundImage: 'url(/assets/img/world-map-dots.png)' }}
          />

          <div className="relative z-10" ref={logosRef}>
            <div className="md:w-4/5 mx-auto">
              <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
                {clientLogos.map((logo, index) => (
                  <div
                    key={index}
                    className="logo-item w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full bg-white flex items-center justify-center p-4 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform opacity-0 translate-y-8 hover:scale-110"
                    style={{ 
                      animationFillMode: 'forwards',
                      animationDuration: '0.6s',
                      animationTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                    }}
                  >
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add animation styles */}
      <style >{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .logo-item.animate-in {
          animation: fadeInUp 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default ClientLogosSection;