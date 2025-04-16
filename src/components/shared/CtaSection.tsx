import React, { useEffect, useRef } from 'react';

interface CTASectionProps {
  product?: string;
  siteIndex?: string;
}

const CTASection: React.FC<CTASectionProps> = ({
  product = "V11-QR",
  siteIndex = "/"
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animation for when the section comes into view
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const section = sectionRef.current;
          if (section) {
            section.classList.add('animate-in');
          }
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-16 bg-[#c9f9da] overflow-hidden">
      <div className="container mx-auto px-20 py-7">
        <div className=" bg-green-500 rounded-3xl text-center relative px-6 py-16 overflow-hidden shadow-xl transform transition-all duration-700 hover:shadow-2xl">
          {/* Animated particles */}
          <div className="particle-container absolute inset-0 overflow-hidden opacity-30 ">
            {/* {[...Array(15)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-white"
                style={{
                  width: `${Math.random() * 30 + 10}px`,
                  height: `${Math.random() * 30 + 10}px`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  opacity: Math.random() * 0.5 + 0.2,
                  animation: `float ${Math.random() * 10 + 10}s linear infinite`
                }}
              ></div>
            ))} */}
          </div>

          <div className="relative z-10 max-w-4xl mx-auto">
            <div className="animate-element title-element">
              <h2 className="text-white v11-roboto tracking-wide text-4xl md:text-5xl font-bold mb-6">
                Upgrade Your Business with Our
                <br />
                <span className="relative inline-block">
                  Cutting-Edge <span className="text-black font-extrabold animate-pulse">{product}</span>
                  <span className="absolute -bottom-2 left-0 right-0 h-1 bg-black transform scale-x-0 origin-left transition-transform duration-700 ease-in-out group-hover:scale-x-100"></span>
                </span> Solutions!
              </h2>
            </div>
            
            <div className="animate-element subtitle-element">
              <p className="text-white text-lg mb-12 max-w-2xl mx-auto opacity-90">
                Experience the future of transactions! Schedule a demo today and
                witness how our <span className="text-black font-semibold">{product}</span> solution can revolutionize your business.
              </p>
            </div>
            
            <div className="animate-element button-element">
              <a
                href={`${siteIndex}book-a-demo`}
                className="inline-block px-8 py-4 bg-white text-emerald-700 font-bold rounded-xl transition-all duration-300 hover:bg-black hover:shadow-lg hover:scale-105 transform hover:-translate-y-1"
              >
                Start Free Trial 
                <svg className="w-5 h-5 inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Animated background elements */}
          <div className="absolute -left-16 -top-16 w-64 h-64 rounded-full border-4 border-emerald-400 opacity-20 animate-pulse"></div>
          <div className="absolute -right-16 -bottom-16 w-64 h-64 rounded-full border-4 border-emerald-400 opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute left-1/2 top-1/2 w-96 h-96 rounded-full border-4 border-emerald-400 opacity-10 transform -translate-x-1/2 -translate-y-1/2 animate-pulse" style={{ animationDelay: '1s' }}></div>
          
          {/* Additional decorative elements */}
          <div className="absolute top-4 left-4 w-32 h-32 bg-gradient-to-br from-green-400 to-emerald-300 rounded-full filter blur-3xl opacity-20"></div>
          <div className="absolute bottom-4 right-4 w-32 h-32 bg-gradient-to-br from-green-400 to-emerald-300 rounded-full filter blur-3xl opacity-20"></div>
      
        </div>
      </div>

      <style>{`
        @keyframes float {
          0% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-20px) translateX(10px);
          }
          50% {
            transform: translateY(0) translateX(20px);
          }
          75% {
            transform: translateY(20px) translateX(10px);
          }
          100% {
            transform: translateY(0) translateX(0);
          }
        }
        
        .animate-in .animate-element {
          opacity: 0;
          transform: translateY(20px);
          animation: fadeInUp 0.8s forwards;
        }
        
        .animate-in .subtitle-element {
          animation-delay: 0.3s;
        }
        
        .animate-in .button-element {
          animation-delay: 0.6s;
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default CTASection;