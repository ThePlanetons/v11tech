import { useEffect, useRef } from 'react';
import FeatureCard from './FeatureCard';
import { features } from '../Setup';

export default function ServiceFeatures() {
  // Ref for intersection observer
  const featuresRef = useRef<HTMLDivElement>(null);

  // Set up intersection observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const boxes = document.querySelectorAll('.feature-box');
            boxes.forEach((box, index) => {
              setTimeout(() => {
                box.classList.add('animate-in');
              }, index * 150); // Staggered animation
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (featuresRef.current) {
      observer.observe(featuresRef.current);
    }

    return () => {
      if (featuresRef.current) {
        observer.unobserve(featuresRef.current);
      }
    };
  }, []);

  return (
    <div className="min-h-screen pt-6 md:pt-10 bg-white">
      <div className="relative overflow-hidden px-4 sm:px-8 md:px-16 lg:px-24">
        {/* Red curved line decoration - better positioned for mobile */}
        <div className="absolute right-0 top-40 w-32 md:w-64 h-32 md:h-64 opacity-20">
          <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M190.5 10.5C138 46 110.5 134.5 63 160.5C15.5 186.5 -7.5 102 3.5 58.5C14.5 15 74.5 -17.5 124 16.5C173.5 50.5 243 -25 190.5 10.5Z"
              fill="none"
              stroke="#FE9393"
              strokeWidth="2"
            />
          </svg>
        </div>

        {/* Header - mobile responsive typography */}
        <div className="container mx-auto px-4 pt-6">
          <div className="text-center">
            <p className="text-green-500 font-medium mb-3 md:mb-4">Grow Your Business With V11 KSSS</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-gray-800 v11-roboto tracking-wide font-bold leading-tight">
              Economical & Cost Effective
            </h2>
            <h2 className="text-3xl sm:text-4xl md:text-5xl v11-roboto tracking-wide font-bold mb-8 md:mb-10 leading-tight">
              <span className="text-green-600">Quality</span>{' '}
              <span className="text-gray-800">& Fast Delivery</span>
            </h2>
          </div>
        </div>

        {/* Features Grid - mobile responsive layout */}
        <div ref={featuresRef} className="container mx-auto px-4 pb-10 md:pb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {features.map((feature, idx) => (
              <FeatureCard 
                key={idx} 
                feature={feature} 
                index={idx} 
              />
            ))}
          </div>
        </div>
      </div>

      {/* CSS for animations */}
      <style>{`
        .feature-box.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
        
        /* 3D card flip animations */
        .card-flip {
          perspective: 1000px;
        }
        
        .card-flip-inner {
          position: relative;
          width: 100%;
          height: 100%;
          text-align: center;
          transition: transform 1s;
          transform-style: preserve-3d;
        }
        
        .card-flip:hover .card-flip-inner {
          transform: rotateY(180deg);
        }
        
        .card-front, .card-back {
        transform: rotateY(180deg);
          position: absolute;
          width: 100%;
          height: 100%;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          border-radius: 0.5rem;
        }
        
        .card-back {
          transform: rotateY(0deg);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          background-color: #f0fdf4;
        }
      `}</style>
    </div>
  );
}