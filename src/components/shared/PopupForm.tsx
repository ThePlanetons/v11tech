import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  country: string;
  state: string;
  city: string;
  businessType: string;
}

// Sample data (you can expand later)
const countries = ['India', 'USA', 'Canada', 'Australia'];

const statesData: { [key: string]: string[] } = {
  India: ['Maharashtra', 'Gujarat', 'Karnataka', 'Delhi'],
  USA: ['California', 'Texas', 'Florida', 'New York'],
  Canada: ['Ontario', 'Quebec', 'British Columbia', 'Alberta'],
  Australia: ['New South Wales', 'Victoria', 'Queensland', 'Western Australia'],
};

const citiesData: { [key: string]: { [key: string]: string[] } } = {
  India: {
    Maharashtra: ['Mumbai', 'Pune', 'Nagpur'],
    Gujarat: ['Ahmedabad', 'Surat', 'Vadodara'],
    Karnataka: ['Bangalore', 'Mysore', 'Mangalore'],
    Delhi: ['New Delhi', 'Old Delhi'],
  },
  USA: {
    California: ['Los Angeles', 'San Francisco', 'San Diego'],
    Texas: ['Houston', 'Dallas', 'Austin'],
    Florida: ['Miami', 'Orlando', 'Tampa'],
    NewYork: ['New York City', 'Buffalo', 'Rochester'],
  },
  Canada: {
    Ontario: ['Toronto', 'Ottawa', 'Hamilton'],
    Quebec: ['Montreal', 'Quebec City'],
    BritishColumbia: ['Vancouver', 'Victoria'],
    Alberta: ['Calgary', 'Edmonton'],
  },
  Australia: {
    'New South Wales': ['Sydney', 'Newcastle'],
    Victoria: ['Melbourne', 'Geelong'],
    Queensland: ['Brisbane', 'Gold Coast'],
    'Western Australia': ['Perth', 'Fremantle'],
  },
};

const PopupForm: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    country: '',
    state: '',
    city: '',
    businessType: '',
  });

  const [availableStates, setAvailableStates] = useState<string[]>([]);
  const [availableCities, setAvailableCities] = useState<string[]>([]);

  useEffect(() => {
    const hasVisited = localStorage.getItem('hasVisited');

    if (!hasVisited) {
      const openTimer = setTimeout(() => {
        setIsOpen(true);
      }, 5000);

      const reopenInterval = setInterval(() => {
        if (!localStorage.getItem('hasVisited')) {
          setIsOpen(true);
        }
      }, 12000);

      return () => {
        clearTimeout(openTimer);
        clearInterval(reopenInterval);
      };
    }
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    if (name === 'phone') {
      const onlyNums = value.replace(/[^0-9]/g, '').slice(0, 10); // only numbers and max 10 digits
      setFormData((prev) => ({
        ...prev,
        [name]: onlyNums,
      }));
    } else if (name === 'country') {
      setFormData((prev) => ({
        ...prev,
        country: value,
        state: '',
        city: '',
      }));
      setAvailableStates(statesData[value] || []);
      setAvailableCities([]);
    } else if (name === 'state') {
      setFormData((prev) => ({
        ...prev,
        state: value,
        city: '',
      }));
      setAvailableCities(citiesData[formData.country]?.[value] || []);
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    localStorage.setItem('hasVisited', 'true');
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm bg-black/30 z-50 transition-all duration-300 p-2 md:p-4 overflow-y-auto">
      <div className="bg-white rounded-xl md:rounded-3xl shadow-2xl p-4 md:p-8 lg:p-10 w-full md:max-w-3xl max-h-[95vh] relative animate-fade-in overflow-y-auto">
        {/* Close Button - Repositioned and resized for mobile */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-2 right-2 md:top-4 md:right-4 text-gray-400 hover:text-gray-600 text-2xl md:text-3xl font-bold bg-white rounded-full w-8 h-8 md:w-10 md:h-10 flex items-center justify-center"
          aria-label="Close popup"
        >
          &times;
        </button>
        
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 lg:mb-8 text-center text-gray-800 pt-2">🚀 Book a Demo</h2>
        
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {/* Full Name */}
          <div>
            <label className="block text-gray-600 mb-1 text-sm font-medium">Full Name</label>
            <input
              type="text"
              name="fullName"
              required
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="w-full border border-green-500 rounded-lg md:rounded-xl p-2 md:p-3 focus:outline-none focus:ring-2 focus:ring-green-500 transition text-base"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-600 mb-1 text-sm font-medium">Email ID</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full border border-green-500 rounded-lg md:rounded-xl p-2 md:p-3 focus:outline-none focus:ring-2 focus:ring-green-500 transition text-base"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-gray-600 mb-1 text-sm font-medium">Phone Number</label>
            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              className="w-full border border-green-500 rounded-lg md:rounded-xl p-2 md:p-3 focus:outline-none focus:ring-2 focus:ring-green-500 transition text-base"
            />
          </div>

          {/* Country */}
          <div>
            <label className="block text-gray-600 mb-1 text-sm font-medium">Country</label>
            <select
              name="country"
              required
              value={formData.country}
              onChange={handleChange}
              className="w-full border border-green-500 rounded-lg md:rounded-xl p-2 md:p-3 bg-white focus:outline-none focus:ring-2 focus:ring-green-500 transition text-base"
            >
              <option value="">Select Country</option>
              {countries.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </div>

          {/* State */}
          <div>
            <label className="block text-gray-600 mb-1 text-sm font-medium">State</label>
            <select
              name="state"
              required
              value={formData.state}
              onChange={handleChange}
              className="w-full border border-green-500 rounded-lg md:rounded-xl p-2 md:p-3 bg-white focus:outline-none focus:ring-2 focus:ring-green-500 transition text-base"
              disabled={!availableStates.length}
            >
              <option value="">Select State</option>
              {availableStates.map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>
          </div>

          {/* City */}
          <div>
            <label className="block text-gray-600 mb-1 text-sm font-medium">City</label>
            <select
              name="city"
              required
              value={formData.city}
              onChange={handleChange}
              className="w-full border border-green-500 rounded-lg md:rounded-xl p-2 md:p-3 bg-white focus:outline-none focus:ring-2 focus:ring-green-500 transition text-base"
              disabled={!availableCities.length}
            >
              <option value="">Select City</option>
              {availableCities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>

          {/* Business Type */}
          <div className="md:col-span-2">
            <label className="block text-gray-600 mb-1 text-sm font-medium">Business Type</label>
            <select
              name="businessType"
              required
              value={formData.businessType}
              onChange={handleChange}
              className="w-full border border-green-500 rounded-lg md:rounded-xl p-2 md:p-3 bg-white focus:outline-none focus:ring-2 focus:ring-green-500 transition text-base"
            >
              <option value="">Select your business type</option>
              <option value="Restaurant">Restaurant</option>
              <option value="Coffee/Tea Shop">Coffee/Tea Shop</option>
              <option value="Cake Shop">Cake Shop</option>
              <option value="Cloud Kitchen">Cloud Kitchen</option>
            </select>
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2 mt-2">
            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold p-2 md:p-3 rounded-lg md:rounded-xl transition-all text-base md:text-lg"
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      {/* Animation Styles */}
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in {
          animation: fade-in 0.4s ease-out;
        }
      `}</style>
    </div>
  );
};

export default PopupForm;