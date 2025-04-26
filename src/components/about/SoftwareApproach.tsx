import { useEffect } from "react";
import { CheckCircle, Calendar, ShoppingCart, Globe } from "lucide-react";

const steps = [
    {
        title: "Step 1",
        subtitle: "Understand Business Need",
        icon: <Calendar size={32} className="text-green-500" />,
        highlightText: "60 Min",
        highlightSubtext: "Discussion",
        items: [
            "Sign-up your details",
            "How we solve the problem",
            "How much we charge for solution",
            "Explain our scope of work",
            "Transparent service offering",
            "Q & A Sessions",
        ],
    },
    {
        title: "Step 2",
        subtitle: "Order your Machine",
        icon: <ShoppingCart size={32} className="text-green-500" />,
        highlightText: "Make 50%",
        highlightSubtext: "advance",
        items: [
            "We build your system",
            "Test your system E2E",
            "Offer potential passive earning",
            "Demo session invite",
            "Satisfaction & Evaluation",
            "Schedule time for Installation",
        ],
    },
    {
        title: "Final",
        subtitle: "Run your business digitally",
        icon: <Globe size={32} className="text-green-500" />,
        highlightText: "30 Min",
        highlightSubtext: "Installation",
        items: [
            "Lifetime support",
            "Regular revenue",
            "No manpower shortage",
            "Fully digital payments",
            "Zero error possibility",
            "Monitor from anywhere",
        ],
    },
];

export default function SoftwareApproach() {
    useEffect(() => {
        // Animation for cards on scroll
        const cards = document.querySelectorAll('.step-card');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, { threshold: 0.1 });

        cards.forEach(card => {
            observer.observe(card);
        });

        return () => {
            cards.forEach(card => {
                observer.unobserve(card);
            });
        };
    }, []);

    return (
        <section className="bg-white pb-24 md:px-36">
            <div className="container mx-auto px-4">
                <div className="text-center mb-3">
                    <h2 className="text-4xl font-bold text-gray-800 v11-roboto tracking-wide mb-4">
                        Our <span className="text-green-500 v11-roboto tracking-wide">Approach</span>
                    </h2>
                    <div className="w-24 h-1 bg-green-500 mx-auto mb-6"></div>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Transparent Plans, Find the perfect software fit for your needs
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-3">
                    {steps.map((step, idx) => (
                        <div
                            key={idx}
                            className="step-card opacity-0 transform translate-y-8 transition-all duration-700 bg-white rounded-2xl shadow-lg p-8 flex flex-col items-start hover:shadow-2xl border-t-4 border-green-500"
                            style={{ transitionDelay: `${idx * 100}ms` }}
                        >
                            {/* Green highlight banner */}

                            <div className="flex items-center mb-6">
                                <div className="p-3 bg-green-100 rounded-full">
                                    {step.icon}
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-2xl font-bold text-gray-800">{step.title}</h3>
                                    <p className="text-green-500 font-medium text-lg">{step.subtitle}</p>
                                </div>
                            </div>

                            <div className="w-full -mx-8 -mt-8 pl-7 py-2">
                                <div className="  p-4 flex items-center">
                                    <span className="text-xl md:text-3xl text-gray-700 font-bold mr-2">{step.highlightText}</span>
                                    <span className="text-xl text-green-500">{step.highlightSubtext}</span>
                                </div>
                            </div>

                            <ul className="space-y-3 flex-1 w-full">
                                {step.items.map((item, i) => (
                                    <li key={i} className="flex items-start group">
                                        <CheckCircle className="mt-1 mr-3 text-green-500 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" size={20} />
                                        <span className="text-gray-700 group-hover:text-green-700 transition-colors duration-300">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="w-full">
                                <div className="h-1 w-0 bg-green-500 group-hover:w-full transition-all duration-300 step-progress"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
        .step-card.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
      `}</style>
        </section>
    );
}