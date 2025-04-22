// // import { useState, useEffect } from 'react';

// export default function MobileQROrderingSystem() {
//   //const [animate, setAnimate] = useState(false);
//   const [isVisible, setIsVisible] = useState(false);
//   // useEffect(() => {
//   //   setAnimate(true);
//   //   const interval = setInterval(() => {
//   //     setAnimate(prev => !prev);
//   //   }, 1000);

//   //   return () => clearInterval(interval);
//   // }, []);

//   return (
//     <div className="flex flex-col md:flex-row items-center bg-white min-h-screen">
//       {/* Left section with text content */}
//       <div className="w-full md:w-1/2 px-6 py-16 md:px-12 md:py-16">
//         <h2 className="text-2xl md:text-6xl  leading-tight mb-8 text-gray-800 v11-roboto">
//         WE BUILD SOFTWARE<br />
//         FOR SMALL AND<br />
//         MEDIUM ENTERPRISES
//         </h2>

//         <div className="text-base md:text-lg mb-12 text-gray-600">
//           <p className="mb-1">OUR VISION IS TO BUILD SOFTWARE FOR PEOPLE TO USE</p>
//           <p className="mb-1">OUR SYSTEM FOR DAY TO DAY OPERATION.</p>
//           <p className="mb-1">WITH ITS POWERFUL FEATURES AND USER-FRIENDLY</p>
//           <p> INTERFACE.</p>
//         </div>

//         <button className="bg-green-500 hover:bg-green-600 hover:scale-110 text-white py-3 px-8 rounded-md flex items-center font-medium ">
//           Get Started
//           <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
//           </svg>
//         </button>
//       </div>

//       {/* Right section with green background and phones */}
//       <div className="w-full md:w-1/2 relative h-96 md:h-screen bg-white overflow-hidden">
//         {/* Decorative circles */}
//         <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-white opacity-10 rounded-full"></div>
//         <div className="absolute bottom-1/4 left-1/3 w-32 h-32 bg-white opacity-10 rounded-full"></div>

//         {/* Floating QR code and devices */}
//         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full flex justify-center items-center">
//           {/* Phone mockup 1 - tilted left */}
//           <div className={`transform -rotate-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}>
//             <div className="relative mx-4 bg-gray-900 rounded-3xl w-56 h-96 shadow-xl border-4 border-gray-800 overflow-hidden">
//               <div className="absolute top-0 w-24 h-6 bg-gray-800 left-1/2 transform -translate-x-1/2 rounded-b-lg"></div>
//               <div className="w-full h-full bg-white p-2">
//                 <div className="w-full h-full rounded-2xl bg-green-50 flex items-center justify-center">
//                   <QrCode className="w-32 h-32 text-green-600" strokeWidth={1} />
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Phone mockup 2 - tilted right */}
//           <div className={`transform rotate-12 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}>
//             <div className="relative mx-4 bg-gray-900 rounded-3xl w-56 h-96 shadow-xl border-4 border-gray-800 overflow-hidden">
//               <div className="absolute top-0 w-24 h-6 bg-gray-800 left-1/2 transform -translate-x-1/2 rounded-b-lg"></div>
//               <div className="w-full h-full bg-white p-2">
//                 <div className="w-full h-full rounded-2xl bg-green-100 p-4">
//                   <div className="w-full h-6 bg-green-400 rounded mb-3"></div>
//                   <div className="w-2/3 h-4 bg-green-300 rounded mb-2"></div>
//                   <div className="w-full h-20 bg-white rounded mb-3 flex items-center justify-center">
//                     <Smartphone className="text-green-500" size={32} />
//                   </div>
//                   <div className="w-full h-4 bg-green-200 rounded mb-2"></div>
//                   <div className="w-5/6 h-4 bg-green-200 rounded mb-2"></div>
//                   <div className="w-full h-4 bg-green-200 rounded mb-2"></div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Animated dots pattern */}
//         <div className="absolute inset-0">
//           {[...Array(20)].map((_, i) => (
//             <div 
//               key={i}
//               className={`absolute rounded-full bg-white ${animate ? 'animate-pulse' : ''}`}
//               style={{
//                 width: `${Math.random() * 10 + 5}px`,
//                 height: `${Math.random() * 10 + 5}px`,
//                 left: `${Math.random() * 100}%`,
//                 top: `${Math.random() * 100}%`,
//                 opacity: Math.random() * 0.2 + 0.1,
//                 animationDelay: `${Math.random() * 2}s`
//               }}
//             ></div>
//           ))}
//         </div>
//       </div>

//     </div>
//   );
// }

import { useState, useEffect } from 'react';
import { Smartphone, QrCode } from 'lucide-react';

export default function MobileQROrderingSystem() {
  const [animate, setAnimate] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setAnimate(true);
    setIsVisible(true);

    const interval = setInterval(() => {
      setAnimate(prev => !prev);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col md:flex-row items-center bg-white min-h-screen overflow-hidden">
      {/* Left section with text content */}
      <div className="w-full md:w-1/2 px-6 py-16 md:px-12 md:py-16">
        <h2 className="text-2xl md:text-6xl  leading-tight mb-8 text-gray-800 v11-roboto">
          WE BUILD SOFTWARE<br />
          FOR SMALL AND<br />
          MEDIUM ENTERPRISES
        </h2>

        <div className="text-base md:text-lg mb-12 text-gray-600">
          <p className="mb-1">OUR VISION IS TO BUILD SOFTWARE FOR PEOPLE TO USE</p>
          <p className="mb-1">OUR SYSTEM FOR DAY TO DAY OPERATION.</p>
          <p className="mb-1">WITH ITS POWERFUL FEATURES AND USER-FRIENDLY</p>
          <p> INTERFACE.</p>
        </div>

        <button className=" bg-green-500 overflow-hidden transition-all duration-300 hover:bg-green-500 hover:shadow-lg hover:scale-105 transform hover:-translate-y-1 text-white  py-3 px-8 rounded-md flex items-center font-medium ">
          Get Started
          <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>


      {/* Right section with green background and phones */}
      <div className="w-full md:w-1/2 relative h-96 md:h-screen bg-white overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-white opacity-10 rounded-full"></div>
        <div className="absolute bottom-1/4 left-1/3 w-32 h-32 bg-white opacity-10 rounded-full"></div>

        {/* Floating QR code and devices */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full flex justify-center items-center">
          {/* Phone mockup 1 - tilted left */}
          <div className={`transform -rotate-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}>
            <div className="relative mx-4 bg-gray-900 rounded-3xl w-56 h-96 shadow-xl border-4 border-gray-800 overflow-hidden">
              <div className="absolute top-0 w-24 h-6 bg-gray-800 left-1/2 transform -translate-x-1/2 rounded-b-lg"></div>
              <div className="w-full h-full bg-white p-2">
                <div className="w-full h-full rounded-2xl bg-green-50 flex items-center justify-center">
                  <QrCode className="w-32 h-32 text-green-600" strokeWidth={1} />
                </div>
              </div>
            </div>
          </div>

          {/* Phone mockup 2 - tilted right */}
          <div className={`transform rotate-12 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}>
            <div className="relative mx-4 bg-gray-900 rounded-3xl w-56 h-96 shadow-xl border-4 border-gray-800 overflow-hidden">
              <div className="absolute top-0 w-24 h-6 bg-gray-800 left-1/2 transform -translate-x-1/2 rounded-b-lg"></div>
              <div className="w-full h-full bg-white p-2">
                <div className="w-full h-full rounded-2xl bg-green-100 p-4">
                  <div className="w-full h-6 bg-green-400 rounded mb-3"></div>
                  <div className="w-2/3 h-4 bg-green-300 rounded mb-2"></div>
                  <div className="w-full h-20 bg-white rounded mb-3 flex items-center justify-center">
                    <Smartphone className="text-green-500" size={32} />
                  </div>
                  <div className="w-full h-4 bg-green-200 rounded mb-2"></div>
                  <div className="w-5/6 h-4 bg-green-200 rounded mb-2"></div>
                  <div className="w-full h-4 bg-green-200 rounded mb-2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Animated dots pattern */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className={`absolute rounded-full bg-white ${animate ? 'animate-pulse' : ''}`}
              style={{
                width: `${Math.random() * 10 + 5}px`,
                height: `${Math.random() * 10 + 5}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.2 + 0.1,
                animationDelay: `${Math.random() * 2}s`
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}