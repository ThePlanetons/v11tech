// import React from "react";
// import avatar from "./assets/img/avatar.jpeg";
import "../../index.css";
import { motion } from 'framer-motion';

const reviews = [
  {
    name: "Tonima Mozeja One",
    company: "Almas Market",
    stars: 4,
    text:
      "Poze Software's AI solutions have transformed our operations. It's efficient, intuitive, and has significantly improved our workflow. Truly impressive support and performance.",
    avatar: "/assets/img/avatar.jpeg",
    date: "5 Apr 2023",
  },
  {
    name: "Tonima Mozeja Two",
    company: "Almas Market",
    stars: 4,
    text:
      "Poze Software's AI solutions have transformed our operations. It's efficient, intuitive, and has significantly improved our workflow. Truly impressive support and performance.",
    avatar: "/assets/img/avatar.jpeg",
    date: "5 Apr 2023",
  },
  {
    name: "Tonima Mozeja Three",
    company: "Almas Market",
    stars: 4,
    text:
      "Poze Software's AI solutions have transformed our operations. It's efficient, intuitive, and has significantly improved our workflow. Truly impressive support and performance.",
    avatar: "/assets/img/avatar.jpeg",
    date: "5 Apr 2023",
  },
  {
    name: "Tonima Mozeja Four",
    company: "Almas Market",
    stars: 4,
    text:
      "Poze Software's AI solutions have transformed our operations. It's efficient, intuitive, and has significantly improved our workflow. Truly impressive support and performance.",
    avatar: "/assets/img/avatar.jpeg",
    date: "5 Apr 2023",
  },
  {
    name: "Tonima Mozeja Five",
    company: "Almas Market",
    stars: 4,
    text:
      "Poze Software's AI solutions have transformed our operations. It's efficient, intuitive, and has significantly improved our workflow. Truly impressive support and performance.",
    avatar: "/assets/img/avatar.jpeg",
    date: "5 Apr 2023",
  },
  {
    name: "Tonima Mozeja Six",
    company: "Almas Market",
    stars: 4,
    text:
      "Poze Software's AI solutions have transformed our operations. It's efficient, intuitive, and has significantly improved our workflow. Truly impressive support and performance.",
    avatar: "/assets/img/avatar.jpeg",
    date: "5 Apr 2023",
  },
  {
    name: "Tonima Mozeja Seven",
    company: "Almas Market",
    stars: 4,
    text:
      "Poze Software's AI solutions have transformed our operations. It's efficient, intuitive, and has significantly improved our workflow. Truly impressive support and performance.",
    avatar: "/assets/img/avatar.jpeg",
    date: "5 Apr 2023",
  }
];

const Comment = () => {
  return (
    <div className="bg flex flex-col justify-center items-center min-h-screen overflow-x-hidden relative">
      {/* Background bubbles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => {
          const size = Math.floor(Math.random() * 40) + 10;
          const left = Math.floor(Math.random() * 100);
          const top = Math.floor(Math.random() * 100);
          const opacity = (Math.random() * 0.2 + 0.1).toFixed(2);
          const duration = Math.floor(Math.random() * 10) + 5;
          const delay = Math.floor(Math.random() * 5);

          return (
            <div
              key={i}
              className="absolute rounded-full"
              style={{
                width: size,
                height: size,
                left: `${left}%`,
                top: `${top}%`,
                opacity,
                backgroundColor: "rgba(255,255,255,0.2)",
                animation: `float ${duration}s ease-in-out ${delay}s infinite`,
              }}
            />
          );
        })}
      </div>

      {/* Heading */}
      <motion.div
        className="text-center mb-10 md:mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.2 } },
        }}
      >
        <motion.p
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: {
              opacity: 1,
              x: 0,
              transition: { type: 'spring', stiffness: 100 }
            }
          }}
          className="font-semibold text-4xl md:text-5xl mb-4 bg-dark"
        >
          Clients Feedback
        </motion.p>

        <motion.h2
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: {
              opacity: 1,
              x: 0,
              transition: { type: 'spring', stiffness: 100, delay: 0.2 }
            }
          }}
          className="text-3xl md:text-5xl font-extrabold leading-tight text-gray-800 v11-roboto tracking-wide"
        >
          Voices of Delights Testimonials That <br />
          Speak to Our Excellence
        </motion.h2>
      </motion.div>

      {/* Carousel Content */}
      <div className="w-full h-100 relative z-10">
        <div className="group overflow py-5 px-4">
          <div className="runner-track flex gap-6 transition-transform duration-700 ease-out group-hover:pause-animation">
            {[...reviews, ...reviews].map((review, index) => (
              <div
                key={index}
                className="flex-none w-72 bg-white rounded-2xl p-5 shadow-lg flex flex-col justify-between min-h-64 transition-all duration-500 hover:scale-105 animate-bob"
              >
                <div className="stars text-2xl mb-4">
                  <div className="flex flex-row">
                    <img
                      src={review.avatar}
                      alt={`Avatar of ${review.name}`}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <p className="bg-dark font-semibold text-base">{review.name}</p>
                      <p className="text-sm">{review.company}</p>
                    </div>
                  </div>
                </div>

                <div className="text-base leading-relaxed mb-5 flex-grow text-gray-700 text-justify">
                  {review.text}
                </div>

                <div className="text-yellow-400 flex">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>{i < review.stars ? "★" : "☆"}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Animation Keyframes */}
      <style>
        {`
          @keyframes scrollLoop {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          .runner-track {
            display: flex;
            gap: 1.5rem;
            width: max-content;
            animation: scrollLoop 20s linear infinite;
          }

          .group:hover .runner-track {
            animation-play-state: paused;
          }

          @keyframes float {
            0% {
              transform: translateY(0) rotate(0);
            }
            50% {
              transform: translateY(-20px) rotate(10deg);
            }
            100% {
              transform: translateY(0) rotate(10deg);
            }
          }

          @keyframes bobUpDown {
            0%, 100% {
              transform: translateY(10px);
            }
            50% {
              transform: translateY(-10px);
            }
          }

          .animate-bob {
            animation: bobUpDown 3s ease-in-out infinite;
          }
        `}
      </style>
    </div>
  );
};

export default Comment;
