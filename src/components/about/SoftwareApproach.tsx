// import { useState, useEffect, JSX } from 'react';
// import { Zap, BarChart2, Layers } from 'lucide-react';

// type Step = {
//   id: string;
//   title: string;
//   duration: string;
//   subtitle: string;
//   icon: JSX.Element;
//   items: string[];
//   action: string;
//   color: string;
// };

// export default function ModernSoftwareApproach() {
//   const [activeStep, setActiveStep] = useState(0);
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     setIsVisible(true);

//     const interval = setInterval(() => {
//       setActiveStep((prev) => (prev === 2 ? 0 : prev + 1));
//     }, 4000);

//     return () => clearInterval(interval);
//   }, []);

//   const steps: Step[] = [
//     {
//       id: "step1",
//       title: "Understand Business Need",
//       duration: "60 Min",
//       subtitle: "Discussion",
//       icon: <Zap size={24} className="text-indigo-500" />,
//       items: [
//         "Sign-up your details",
//         "How we solve the problem",
//         "How much we charge for solution",
//         "Explain our scope of work",
//         "Transparent service offering",
//         "Q & A Sessions"
//       ],
//       action: "Book a Call",
//       color: "indigo"
//     },
//     {
//       id: "step2",
//       title: "Order your Machine",
//       duration: "Make 50%",
//       subtitle: "advance",
//       icon: <BarChart2 size={24} className="text-teal-500" />,
//       items: [
//         "We build your system",
//         "Test your system E2E",
//         "Offer potential passive earning",
//         "Demo session invite",
//         "satisfaction & Evaluation",
//         "Schedule time for Installation"
//       ],
//       action: "Book a call",
//       color: "teal"
//     },
//     {
//       id: "final",
//       title: "Run your business digitally",
//       duration: "30 Min",
//       subtitle: "Installation",
//       icon: <Layers size={24} className="text-purple-500" />,
//       items: [
//         "Life time support",
//         "Regular revenue",
//         "No manpower shortage",
//         "Fully digital payments",
//         "Zero error possibility",
//         "Monitor from anywhere"
//       ],
//       action: "Video Testimonial",
//       color: "purple"
//     }
//   ];

//   // <-- Fix: gradients as a Record<string,string> -->
//   const gradients: Record<string, string> = {
//     indigo: "from-indigo-500 to-blue-600",
//     teal:   "from-teal-400 to-emerald-500",
//     purple: "from-purple-500 to-pink-500"
//   };

//   const getGradient = (color: string): string => {
//     return gradients[color] ?? "from-gray-700 to-gray-800";
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 font-sans p-6">
//       {/* Background Elements */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 -translate-y-1/4 translate-x-1/4"></div>
//         <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 translate-y-1/4 -translate-x-1/4"></div>
//       </div>

//       <div className="max-w-6xl mx-auto relative">
//         {/* Header */}
//         <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//           <h3 className="text-lg font-medium text-indigo-600 mb-2">Our Approach</h3>
//           <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
//             Transparent Plans, Find the 
//             <span className="block mt-1">Perfect Software Fit for Your Needs</span>
//           </h1>
//         </div>

//         {/* Step Indicators */}
//         <div className="flex justify-center mb-16">
//           <div className="flex items-center space-x-4">
//             {steps.map((step, idx) => (
//               <div key={step.id} className="flex items-center">
//                 {idx > 0 && (
//                   <div
//                     className={`h-0.5 w-12 transition-colors duration-500 ${
//                       idx <= activeStep
//                         ? `bg-${steps[activeStep].color}-500`
//                         : 'bg-gray-300'
//                     }`}
//                   ></div>
//                 )}
//                 <button
//                   onClick={() => setActiveStep(idx)}
//                   className={`flex items-center justify-center w-10 h-10 rounded-full transition-all duration-500 ${
//                     idx === activeStep
//                       ? `bg-${step.color}-500 text-white shadow-lg shadow-${step.color}-200`
//                       : 'bg-white border-2 border-gray-300 text-gray-400'
//                   }`}
//                 >
//                   {idx + 1}
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Content */}
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//           {steps.map((step, idx) => (
//             <div
//               key={step.id}
//               className={`rounded-2xl overflow-hidden transition-all duration-700 transform ${
//                 idx === activeStep ? 'ring-2 ring-offset-2 scale-105' : 'opacity-80 hover:opacity-95'
//               } ${idx === activeStep ? `ring-${step.color}-400` : ''}`}
//               onClick={() => setActiveStep(idx)}
//             >
//               <div className={`bg-gradient-to-br ${getGradient(step.color)} p-6`}>
//                 <div className="flex items-center mb-4">
//                   <div className="bg-white/20 backdrop-blur-sm rounded-lg p-2 mr-3">
//                     {step.icon}
//                   </div>
//                   <div>
//                     <p className="text-white font-semibold">
//                       {idx === 2 ? "Final" : `Step ${idx + 1}`}
//                     </p>
//                     <h3 className="text-white text-lg">{step.title}</h3>
//                   </div>
//                 </div>
                
//                 <div className="mb-4">
//                   <p className="text-white font-bold text-2xl flex items-baseline">
//                     {step.duration} 
//                     <span className="text-sm font-normal ml-2 opacity-80">{step.subtitle}</span>
//                   </p>
//                 </div>
//               </div>

//               <div className="bg-white p-6">
//                 <ul className="space-y-3 mb-6">
//                   {step.items.map((item, i) => (
//                     <li key={i} className="flex items-start">
//                       <div className={`mt-1.5 flex-shrink-0 h-2 w-2 rounded-full bg-${step.color}-500 mr-3`}></div>
//                       <span className="text-gray-600">{item}</span>
//                     </li>
//                   ))}
//                 </ul>

//                 <button 
//                   className={`w-full py-3 px-4 rounded-lg bg-${step.color}-500 hover:bg-${step.color}-600 text-white font-medium transition-all duration-300 transform hover:scale-[1.02]`}
//                 >
//                   {step.action}
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
