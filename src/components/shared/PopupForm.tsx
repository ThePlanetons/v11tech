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

  useEffect(() => {
    const hasVisited = localStorage.getItem('hasVisited');

    if (!hasVisited) {
      const openTimer = setTimeout(() => {
        setIsOpen(true);
      }, 5000); // open after 5 seconds

      const reopenInterval = setInterval(() => {
        if (!localStorage.getItem('hasVisited')) {
          setIsOpen(true);
        }
      }, 12000); // reopen every 12 seconds if not submitted

      return () => {
        clearTimeout(openTimer);
        clearInterval(reopenInterval);
      };
    }
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    localStorage.setItem('hasVisited', 'true');
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex pt-12 items-center justify-center backdrop-blur-sm bg-black/30 z-50 transition-all duration-300 p-4">
      <div className="bg-white rounded-3xl shadow-2xl p-10 w-full max-w-3xl max-h-[90vh] relative animate-fade-in overflow-hidden">
        <h2 className="text-4xl font-bold mb-8 text-center text-gray-800">🚀 Book a Demo</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-600 mb-1 text-sm font-medium">Full Name</label>
            <input
              type="text"
              name="fullName"
              required
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="w-full border border-green-500 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
            />
          </div>

          <div>
            <label className="block text-gray-600 mb-1 text-sm font-medium">Email ID</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full border border-green-500 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
            />
          </div>

          <div>
            <label className="block text-gray-600 mb-1 text-sm font-medium">Phone Number</label>
            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              className="w-full border border-green-500 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
            />
          </div>

          <div>
            <label className="block text-gray-600 mb-1 text-sm font-medium">Country</label>
            <input
              type="text"
              name="country"
              required
              value={formData.country}
              onChange={handleChange}
              placeholder="Enter your country"
              className="w-full border border-green-500 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
            />
          </div>

          <div>
            <label className="block text-gray-600 mb-1 text-sm font-medium">State</label>
            <input
              type="text"
              name="state"
              required
              value={formData.state}
              onChange={handleChange}
              placeholder="Enter your state"
              className="w-full border border-green-500 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
            />
          </div>

          <div>
            <label className="block text-gray-600 mb-1 text-sm font-medium">City</label>
            <input
              type="text"
              name="city"
              required
              value={formData.city}
              onChange={handleChange}
              placeholder="Enter your city"
              className="w-full border border-green-500 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-gray-600 mb-1 text-sm font-medium">Business Type</label>
            <select
              name="businessType"
              required
              value={formData.businessType}
              onChange={handleChange}
              className="w-full border border-green-500 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-green-500 transition bg-white"
            >
              <option value="">Select your business type</option>
              <option value="Restaurant">Restaurant</option>
              <option value="Coffee/Tea Shop">Coffee/Tea Shop</option>
              <option value="Cake Shop">Cake Shop</option>
              <option value="Cloud Kitchen">Cloud Kitchen</option>
            </select>
          </div>

          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold p-3 rounded-xl transition-all"
            >
              Submit
            </button>
          </div>
        </form>

        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-3xl font-bold"
        >
          &times;
        </button>
      </div>

      {/* Optional Animation */}
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
