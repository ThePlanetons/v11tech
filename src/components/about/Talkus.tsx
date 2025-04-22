import { useState, useEffect } from 'react';
import {  CheckCircle, MessageSquare } from 'lucide-react';

function TalkUs() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState<number | null>(null);
  const [, setAnimateQR] = useState(false);
  

  useEffect(() => {
    // Set component visible on mount for animations
    setIsVisible(true);
    
    // QR animation interval
    const qrInterval = setInterval(() => {
      setAnimateQR(prev => !prev);
    }, 3000);
    
    return () => clearInterval(qrInterval);
  }, []);

  const features = [
    { text: 'Retail Kiosk', icon: CheckCircle },
    { text: 'Grocery Kiosk', icon: CheckCircle },
    { text: 'Restaurants Kiosk', icon: CheckCircle },
    { text: 'Convenience Kiosk', icon: CheckCircle },
    { text: 'Bus Ticket Kiosk', icon: CheckCircle },
    { text: 'Ticket Kiosk', icon: CheckCircle },
    { text: 'Saloon Kiosk', icon: CheckCircle },
    { text: "Hospital Kiosk", icon: CheckCircle },
    { text: 'Cinema ticket Kiosk', icon: CheckCircle },
    { text: 'Railway ticket Kiosk', icon: CheckCircle },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-50 to-gray-50 overflow-hidden">
      {/* Background decoration */}
      {/* <div className="absolute top-0 right-0 w-0 h-90 bg-emerald-200 rounded-full opacity-20 blur-3xl -translate-y-1/2 translate-x-1/3"></div> */}
      <div className="absolute bottom-0 left-0 w-96 h-auto bg-teal-200 rounded-full opacity-20 blur-3xl translate-y-1/2 -translate-x-1/3"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative">
        {/* Content container */}
        <div 
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Left column */}
          <div className="space-y-12">
            <div className="transition-all duration-700 delay-300">
              <p className="text-green-500 font-medium mb-4 flex items-center">
                <span className="inline-block w-12 h-0.5 bg-green-500 mr-3"></span>
                Our software experts are doing R & D in many industries
              </p>
              <h1 className="text-3xl md:text-5xl font-bold text-gray-800 v11-roboto tracking-wide leading-tight mb-6">
              Our Software Capable for Wide Range of Business and Industries{" "}
                <span className="text-green-500 relative">
                  <span className="absolute bottom-1 left-0 w-full h-1 bg-emerald-200"></span>
                </span>
              </h1>
              <p className="text-gray-600 text-lg">
              </p>
            </div>
            
            {/* Feature grid with hover effects */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-300 cursor-pointer ${
                    activeFeature === index 
                      ? 'bg-emerald-50 border-l-4 border-green-500' 
                      : 'hover:bg-emerald-50 border-l-4 border-transparent'
                  }`}
                  onMouseEnter={() => setActiveFeature(index)}
                  onMouseLeave={() => setActiveFeature(null)}
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <feature.icon className={`w-5 h-5 text-green-500 transition-transform duration-300 ${
                    activeFeature === index ? 'scale-125' : ''
                  }`} />
                  <span className="text-gray-700 font-medium">{feature.text}</span>
                </div>
              ))}
            </div>
            
            {/* Call to action button with animation */}
            <div className="transition-all duration-700 delay-700">
              <button className="group relative bg-green-500 text-white px-8 py-4 rounded-lg  flex items-center space-x-2 overflow-hidden transition-all duration-300 hover:bg-green-500 hover:shadow-lg hover:scale-105 transform hover:-translate-y-1">
                <span className="text-white relative z-10">Talk to Us</span>
                <MessageSquare className="w-5 h-5 relative z-10 text-white transition-transform group-hover:rotate-12" />
                <div className=""></div>
              </button>
            </div>
          </div>
          
          {/* Right column - Card with 3D effect */}
          <div className="relative transition-all duration-1000 delay-500 transform perspective-1000">
          
            
            <img 
                      src="/assets/img/illustartion1.png"
                      alt="QR code scanning"
                      className="w-auto h-auto "
                    />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TalkUs;