import { useState, useEffect } from 'react';
import {  CheckCircle, ArrowUpRight, MessageSquare } from 'lucide-react';

function TalkUs() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState<number | null>(null);
  const [animateQR, setAnimateQR] = useState(false);
  

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
    { text: 'Automatic Orders', icon: CheckCircle },
    { text: 'Save Manpower Cost', icon: CheckCircle },
    { text: '24/7 Order Processing', icon: CheckCircle },
    { text: 'No need Website', icon: CheckCircle },
    { text: 'Automatic Printer', icon: CheckCircle },
    { text: '100% reliable orders', icon: CheckCircle },
    { text: 'Avoid fake enquiry', icon: CheckCircle },
    { text: "Don't Check WhatsApp", icon: CheckCircle },
    { text: '100% business growth', icon: CheckCircle },
    { text: 'Easy to Promote via QR', icon: CheckCircle },
  ];

  return (
    <div className="min-h-screen bg-white  overflow-hidden">
      {/* Background decoration */}
      {/* <div className="absolute top-0 right-0 w-0 h-90 bg-emerald-200 rounded-full opacity-20 blur-3xl -translate-y-1/2 translate-x-1/3"></div> */}
      {/* <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full opacity-20 blur-3xl translate-y-1/2 -translate-x-1/3"></div> */}
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-1 pb-11 relative">
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
                Our QR Code System reached everywhere
              </p>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-800 v11-roboto tracking-wide leading-tight mb-3 md:mb-6">
                Our Software platform used by{" "}
                <span className="text-green-500 text-3xl md:text-5xl relative">
                  Wide Range...
                  <span className="absolute bottom-1 left-0 w-full h-1 bg-emerald-200"></span>
                </span>
              </h2>
              <p className="text-gray-600 text-lg">
                Revolutionize your business operations with our innovative QR ordering system 
                designed for efficiency and growth.
              </p>
            </div>
            
            {/* Feature grid with hover effects */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
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
            <div className="absolute inset-0 bg-gradient-to-br from-teal-600 to-teal-900 rounded-2xl transform rotate-6 opacity-20 blur-md"></div>
            
            <div className="bg-gradient-to-br from-teal-700 to-teal-900 rounded-2xl p-8 text-white shadow-2xl transform transition-all duration-300 relative z-10">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-teal-400 rounded-full opacity-10 blur-2xl"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-emerald-400 rounded-full opacity-10 blur-2xl"></div>
              
              <div className="space-y-8">
                <div>
                  <p className="text-3xl font-bold mb-2 tracking-tight text-teal-100">V11 TECH</p>
                  <h2 className="text-5xl font-bold text-yellow-400 mb-8 tracking-tight flex items-center">
                    QR - Ordering
                    <ArrowUpRight className="w-8 h-8 ml-2 animate-pulse" />
                  </h2>
                </div>
                
                <div className="space-y-4">
                  {['Seamless User Experience', 'Efficient Order Processing', 'Increase your Sales'].map((item, index) => (
                    <div 
                      key={index}
                      className="flex items-center space-x-2 transition-all duration-300"
                      style={{ transitionDelay: `${(index + 5) * 100}ms` }}
                    >
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <p className="text-xl text-teal-50">{item}</p>
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center space-x-8">
                  <button className="bg-yellow-400 text-teal-900 px-6 py-3 rounded-lg font-medium hover:bg-yellow-300 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg shadow-md">
                    Now Available
                  </button>
                  
                  <div className={`relative transition-all duration-700 ${animateQR ? 'scale-110' : 'scale-100'}`}>
                    <div className="absolute inset-0 bg-yellow-400 opacity-30 rounded-lg blur-md"></div>
                    <img 
                      src="/assets/img/What to Know Before Scanning a QR Code.jpeg"
                      alt="QR code scanning"
                      className="w-80 h-44 object-cover rounded-lg relative z-10 transition-transform duration-300"
                    />
                    {/* Scanning effect */}
                    <div className={`absolute left-0 w-full h-1 bg-yellow-400 opacity-70 blur-sm z-20 transition-all duration-1500 ease-in-out ${
                      animateQR ? 'top-0' : 'top-full'
                    }`}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TalkUs;