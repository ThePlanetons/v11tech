import { useState, useEffect, useRef } from 'react';
import {  MessageSquare, X } from 'lucide-react';

declare global {
  interface Window {
    Calendly?: any;
  }
}

function TalkUs() {
  const [isVisible, setIsVisible] = useState(false);
  // const [activeFeature, setActiveFeature] = useState<number | null>(null);
  const [, setAnimateQR] = useState(false);
  const [calendlyLoaded, setCalendlyLoaded] = useState(false);
  const [showCalendly, setShowCalendly] = useState(false);
  const calendlyContainerRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    // Set component visible on mount for animations
    setIsVisible(true);

    // QR animation interval
    const qrInterval = setInterval(() => {
      setAnimateQR(prev => !prev);
    }, 3000);

    return () => clearInterval(qrInterval);
  }, []);

  useEffect(() => {
    if (!document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]')) {
      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      script.onload = () => {
        console.log("Calendly script loaded successfully.");
        setCalendlyLoaded(true);
      };
      script.onerror = () => {
        console.error("Failed to load Calendly script.");
      };
      document.body.appendChild(script);
    } else {
      setCalendlyLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (calendlyLoaded && showCalendly && calendlyContainerRef.current && window.Calendly) {
      window.Calendly.initInlineWidget({
        url: "https://calendly.com/saravanan-gunasekaran/30min",
        parentElement: calendlyContainerRef.current,
        prefill: {},
        utm: {}
      });
    }
  }, [calendlyLoaded, showCalendly]);

  const handleTalkToUsClick = () => {
    setShowCalendly(true);
    setTimeout(() => {
      if (calendlyContainerRef.current) {
        calendlyContainerRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleCancelClick = () => {
    setShowCalendly(false);
  };

  const features = [
    {
      id: '01',
      title: 'Simplified Label Creation',
      description: 'Pre-designed templates and user-friendly interfaces make it easy for anyone'
    },
    {
      id: '02',
      title: 'Increased Efficiency',
      description: 'Streamlines the label creation process, allowing businesses to quickly design and generate labels for new products or variations.'
    },
    {
      id: '03',
      title: 'Customization Options',
      description: 'Provides options to personalize labels with brand logos, colors, and product information, while maintaining a consistent brand identity.'
    },
    {
      id: '04',
      title: 'Data Integration',
      description: 'Platforms can integrate with product data management systems, allowing automatic population of label information, reducing errors and saving time.'
    }
  ];

  // const features = [
  //   { text: 'Digital Payment', icon: CheckCircle },
  //   { text: 'Zero Down Time', icon: CheckCircle },
  //   { text: 'Automatic Printing', icon: CheckCircle },
  //   { text: 'Multi Language', icon: CheckCircle },
  //   { text: 'FoodApps Integration', icon: CheckCircle },
  //   { text: 'Reduce Manpower', icon: CheckCircle },
  //   { text: 'Voice Over System', icon: CheckCircle },
  //   { text: "Easy Menu Setup", icon: CheckCircle },
  //   { text: 'Extra Earning', icon: CheckCircle },
  //   { text: 'Customer Friendly', icon: CheckCircle },
  // ];

  return (
    <div className="min-h-screen bg-white  overflow-hidden">
      {/* Background decoration */}
      {/* <div className="absolute top-0 right-0 w-0 h-90 bg-emerald-200 rounded-full opacity-20 blur-3xl -translate-y-1/2 translate-x-1/3"></div> */}
      {/* <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-200 rounded-full opacity-20 blur-3xl translate-y-1/2 -translate-x-1/3"></div> */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-1 pb-11 relative">
        {/* Content container */}
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          {/* Left column */}
          <div className="space-y-12">
            <div className="transition-all duration-700 delay-300">
              <p className="text-green-500 font-medium mb-4 flex items-center">
                <span className="inline-block w-12 h-0.5 bg-green-500 mr-3"></span>
                Product Label Features
              </p>
              <h2 className="text-2xl md:text-5xl font-bold text-gray-800 v11-roboto tracking-wide leading-tight mb-6">
                Create and customize product labels easily without design skills.{" "}
                <span className="text-green-500 relative">
                  <span className="absolute bottom-1 left-0 w-full h-1 bg-emerald-200"></span>
                </span>
              </h2>
              <p className="text-gray-600 text-lg">
              </p>
            </div>

            {/* Feature grid with hover effects */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4">
              {features.map((feature) => (
                <div key={feature.id} className="flex flex-col gap-4">
                  <div className="flex items-center justify-center w-14 h-14 rounded-full bg-green-500 text-white font-bold text-xl">
                    {feature.id}
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">{feature.title}</h2>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>

            {/* Call to action button with animation */}
            <div className="transition-all duration-700 delay-700">
            <button
                onClick={handleTalkToUsClick}
                disabled={!calendlyLoaded}
                className="group relative bg-green-500 text-white px-8 py-4 rounded-lg flex items-center space-x-2 overflow-hidden transition-all duration-300 hover:bg-green-600 hover:shadow-lg hover:scale-105 transform hover:-translate-y-1 disabled:opacity-50"
              >
                <span className="relative z-10">Talk to Us</span>
                <MessageSquare className="w-5 h-5 relative z-10 transition-transform group-hover:rotate-12" />
              </button>
            </div>
          </div>

          {/* Right column - Card with 3D effect */}
          <img
            src="/assets/img/illustartion1.png"
            alt="QR code scanning"
            className="w-full max-w-sm object-cover rounded-lg relative z-10"
          />
           </div>
        {showCalendly && (
        <div className="fixed inset-0 bg-transparent bg-opacity-100 flex items-center justify-center z-50">

          <div
          
            ref={calendlyContainerRef}
            className="w-full h-full bg-black/40 backdrop-blur rounded-2xl shadow-xl p-4 pt-14 mt-6 transition-all animate-fade-in"
            style={{ minHeight: '800px' }}
          >

            {/* Calendly will be loaded here */}
          </div>
                        <button
              onClick={handleCancelClick}
              className="absolute top-4 right-4 text-white hover:text-gray-600 transition-colors duration-200"
              aria-label="Close"
            >
              <X className="w-6 h-6 z-50" />
            </button>
        </div>
      )}
        </div>
      </div>
  );
}

export default TalkUs;