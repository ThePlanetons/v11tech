import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { FeatureType } from '../types';
import { useNavigate } from 'react-router-dom';

interface FeatureCardProps {
  feature: FeatureType;
  index: number;
}

const setup: React.FC<FeatureCardProps> = ({ feature }) => {
  const [flipped] = useState(false);
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate('/book-a-demo');
  };

  return (
    <div className="feature-box opacity-0 transform translate-y-8 transition-all duration-700 h-[350px] sm:h-[320px] md:h-[400px]"
      onClick={handleCardClick}>
      <div className="card-flip h-full">
        <div
          className={`card-flip-inner h-full ${flipped ? 'flipped' : ''}`}
        >
          {/* Front of card */}
          <div className="card-front bg-white p-5 md:p-6 rounded-lg shadow-lg flex flex-col h-full">
            <div className="mb-4 flex items-center justify-center">
              <div className="icon-container p-3 rounded-full bg-green-100 transition-all duration-500">
                {feature.icon}
              </div>
            </div>
            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3 text-center sm:text-left">
              {feature.title}
            </h3>
            <p className="text-gray-600 mb-4 flex-grow text-center sm:text-left text-sm md:text-base">
              {feature.description}
            </p>
            <a className="mt-auto inline-flex items-center font-medium justify-center sm:justify-start group"
              onClick={(e) => e.stopPropagation()} // Prevent card flip
            >
              <span className="text-green-500 group-hover:text-green-700 transition-colors duration-300">
                Book a call
              </span>
              <ArrowUpRight className="ml-1 w-4 h-4 text-green-500 group-hover:text-green-700 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>

          {/* Back of card (shown on flip) */}
          <div className="card-back shadow-lg p-4">
            <div className="relative w-full h-full overflow-hidden rounded-lg">
              <img
                src={feature.imageUrl}
                alt={feature.title}
                className="object-cover w-full h-full rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/0 to-transparent flex flex-col justify-end p-4">
                <h3 className="text-lg md:text-xl font-bold text-black mb-2">{feature.title}</h3>
                <a href="#" className="inline-flex items-center font-medium">
                  <span className="text-black transition-colors duration-300">
                    Learn more
                  </span>
                  <ArrowUpRight className="ml-1 w-4 h-4 text-gray-800" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default setup;