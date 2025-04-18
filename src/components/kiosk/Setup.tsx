import { useEffect, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function Setup() {
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

  const features = [
    {
      icon: (
        <svg
          className="w-8 h-8 text-green-500"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path
            d="M2 3h20v5H2zM4 8v10h16V8zM10 12h4M4 3v5M20 3v5M2 8h20"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7 11a1 1 0 100-2 1 1 0 000 2zM7 15a1 1 0 100-2 1 1 0 000 2z"
            fill="currentColor"
          />
        </svg>
      ),
      title: 'Effectively manage your peak hours',
      description:
        'Restaurant, Coffee, Grocery Shop, Fashion boutiques, Shoe Shop—your line of business can be anything. Just tell us; we will make it easy!',
    },
    {
      icon: (
        <svg
          className="w-8 h-8 text-green-500"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M8 6v12M12 10v8M16 4v16" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="8" cy="4" r="2" fill="currentColor" />
          <circle cx="12" cy="8" r="2" fill="currentColor" />
          <circle cx="16" cy="2" r="2" fill="currentColor" />
        </svg>
      ),
      title: 'Cost Effective With Affordable Price',
      description:
        "You don't have to hire a cashier to collect money and take orders—just monitor the digital operation! Automatic end-to-end order processing.",
    },
    {
      icon: (
        <svg
          className="w-8 h-8 text-green-500"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="M6 8h12M6 12h8M6 16h4" strokeLinecap="round" />
          <circle cx="19" cy="16" r="3" />
          <path d="M17 16h4M19 14v4" strokeLinecap="round" />
        </svg>
      ),
      title: 'Easy Setup & No IT Knowledge Needed',
      description:
        'You just have to sign up, fill in your business line, and we handle the rest from our end! Yes—you heard it right!',
    },
    {
      icon: (
        <svg
          className="w-8 h-8 text-green-500"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <rect x="4" y="8" width="16" height="12" rx="2" />
          <path d="M12 12h4M12 16h2" strokeLinecap="round" />
          <circle cx="8" cy="12" r="1" fill="currentColor" />
          <path d="M4 8V6a2 2 0 012-2h12a2 2 0 012 2v2" />
          <path d="M10 8V6M14 8V6" strokeLinecap="round" />
        </svg>
      ),
      title: 'Digital payment, stunning look & easy pay',
      description:
        'Get entire business progress and summary in one single dashboard to see how your business is doing every day!',
    },
  ];

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
              Delightfully Simple And Deceptively
            </h2>
            <h2 className="text-3xl sm:text-4xl md:text-5xl v11-roboto tracking-wide font-bold mb-8 md:mb-10 leading-tight">
              <span className="text-green-600">Our Kiosk</span>{' '}
              <span className="text-gray-800">Self-Service System</span>
            </h2>
          </div>
        </div>

        {/* Features Grid - mobile responsive layout */}
        <div ref={featuresRef} className="container mx-auto px-4 pb-10 md:pb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {features.map((feature, idx) => (
              <div 
                key={idx} 
                className="feature-box bg-white p-5 md:p-6 rounded-lg shadow-lg flex flex-col h-full opacity-0 transform translate-y-8 transition-all duration-700 hover:shadow-xl hover:bg-green-50"
              >
                <div className="mb-4 flex items-center justify-center">
                  <div className="icon-container p-3 rounded-full bg-green-100 transition-all duration-500 group-hover:bg-green-200 group-hover:scale-110">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3 text-center sm:text-left">{feature.title}</h3>
                <p className="text-gray-600 mb-4 flex-grow text-center sm:text-left text-sm md:text-base">{feature.description}</p>
                <a href="#" className="mt-auto inline-flex items-center font-medium justify-center sm:justify-start group">
                  <span className="text-green-500 group-hover:text-green-700 transition-colors duration-300">Learn More</span> 
                  <ArrowUpRight className="ml-1 w-4 h-4 text-green-500 group-hover:text-green-700 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
              </div>
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
        
        .feature-box:hover .icon-container {
          transform: scale(1.1);
          background-color: rgba(34, 197, 94, 0.2);
        }
        
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }
        
        .feature-box:hover {
          animation: pulse 2s infinite;
        }
      `}</style>
    </div>
  );
}