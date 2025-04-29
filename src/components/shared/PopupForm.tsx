import React, { useState, useEffect, ChangeEvent } from 'react';

// Comprehensive countries list
const countries = [
  "India", "United States", "Canada", "Australia", "United Kingdom", "Germany", "France", "Japan", "China", "Brazil",
  "Russia", "Mexico", "Italy", "Spain", "South Africa", "Netherlands", "Singapore", "New Zealand", "United Arab Emirates",
  "Saudi Arabia", "Argentina", "Indonesia", "Switzerland", "Sweden", "Norway", "Denmark", "Belgium", "Thailand", "Turkey",
  "Malaysia", "Philippines", "Vietnam", "Pakistan", "Bangladesh", "Egypt", "Nigeria", "Kenya", "Israel", "South Korea"
];

// Expanded States Data
const statesData: { [key: string]: string[] } = {
  "India": ["Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Delhi", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"],
  "United States": ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"],
  "Canada": ["Alberta", "British Columbia", "Manitoba", "New Brunswick", "Newfoundland and Labrador", "Northwest Territories", "Nova Scotia", "Nunavut", "Ontario", "Prince Edward Island", "Quebec", "Saskatchewan", "Yukon"],
  "Australia": ["Australian Capital Territory", "New South Wales", "Northern Territory", "Queensland", "South Australia", "Tasmania", "Victoria", "Western Australia"],
  "United Kingdom": ["England", "Northern Ireland", "Scotland", "Wales"],
  "Germany": ["Baden-Württemberg", "Bavaria", "Berlin", "Brandenburg", "Bremen", "Hamburg", "Hesse", "Lower Saxony", "Mecklenburg-Vorpommern", "North Rhine-Westphalia", "Rhineland-Palatinate", "Saarland", "Saxony", "Saxony-Anhalt", "Schleswig-Holstein", "Thuringia"],
  "France": ["Auvergne-Rhône-Alpes", "Bourgogne-Franche-Comté", "Brittany", "Centre-Val de Loire", "Corsica", "Grand Est", "Hauts-de-France", "Île-de-France", "Normandy", "Nouvelle-Aquitaine", "Occitanie", "Pays de la Loire", "Provence-Alpes-Côte d'Azur"]
};

// Expanded Cities Data - Sample major cities for each state
const citiesData: { [key: string]: { [key: string]: string[] } } = {
  "India": {
    "Maharashtra": ["Mumbai", "Pune", "Nagpur", "Thane", "Nashik", "Aurangabad", "Solapur"],
    "Gujarat": ["Ahmedabad", "Surat", "Vadodara", "Rajkot", "Bhavnagar", "Jamnagar"],
    "Delhi": ["New Delhi", "North Delhi", "South Delhi", "East Delhi", "West Delhi"],
    "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai", "Tiruchirappalli", "Salem", "Tirunelveli"],
    "West Bengal": ["Kolkata", "Howrah", "Durgapur", "Asansol", "Siliguri"],
    "Karnataka": ["Bengaluru", "Mysuru", "Hubballi", "Mangaluru", "Belagavi"],
    "Uttar Pradesh": ["Lucknow", "Kanpur", "Ghaziabad", "Agra", "Varanasi", "Meerut"],
    "Telangana": ["Hyderabad", "Warangal", "Nizamabad", "Karimnagar"],
    "Rajasthan": ["Jaipur", "Jodhpur", "Udaipur", "Kota", "Bikaner", "Ajmer"],
    "Kerala": ["Thiruvananthapuram", "Kochi", "Kozhikode", "Thrissur", "Kollam"]
  },
  "United States": {
    "California": ["Los Angeles", "San Francisco", "San Diego", "San Jose", "Sacramento", "Fresno"],
    "Texas": ["Houston", "Dallas", "Austin", "San Antonio", "Fort Worth", "El Paso"],
    "New York": ["New York City", "Buffalo", "Rochester", "Syracuse", "Albany"],
    "Florida": ["Miami", "Orlando", "Tampa", "Jacksonville", "Tallahassee"],
    "Illinois": ["Chicago", "Springfield", "Rockford", "Naperville", "Peoria"],
    "Pennsylvania": ["Philadelphia", "Pittsburgh", "Allentown", "Erie", "Reading"],
    "Ohio": ["Columbus", "Cleveland", "Cincinnati", "Toledo", "Akron"]
  },
  "Canada": {
    "Ontario": ["Toronto", "Ottawa", "Mississauga", "Hamilton", "London", "Windsor"],
    "Quebec": ["Montreal", "Quebec City", "Laval", "Gatineau", "Sherbrooke"],
    "Alberta": ["Calgary", "Edmonton", "Red Deer", "Lethbridge", "Fort McMurray"],
    "British Columbia": ["Vancouver", "Victoria", "Kelowna", "Abbotsford", "Nanaimo"]
  },
  "Australia": {
    "New South Wales": ["Sydney", "Newcastle", "Wollongong", "Central Coast", "Maitland"],
    "Victoria": ["Melbourne", "Geelong", "Ballarat", "Bendigo", "Shepparton"],
    "Queensland": ["Brisbane", "Gold Coast", "Sunshine Coast", "Townsville", "Cairns"]
  },
  "United Kingdom": {
    "England": ["London", "Manchester", "Birmingham", "Liverpool", "Leeds", "Bristol"],
    "Scotland": ["Edinburgh", "Glasgow", "Aberdeen", "Dundee", "Inverness"],
    "Wales": ["Cardiff", "Swansea", "Newport", "Bangor"],
    "Northern Ireland": ["Belfast", "Derry", "Newry", "Lisburn"]
  }
};

// Business Types
const businessTypes = [
  "Restaurant", 
  "Coffee/Tea Shop",
  "Cafe", 
  "Bakery",
  "Fast Food", 
  "Fine Dining",
  "Food Truck",
  "Cake Shop", 
  "Cloud Kitchen",
  "Pub/Bar",
  "Pizzeria",
  "Ice Cream Parlor",
  "Juice Bar",
  "Breakfast & Brunch",
  "Food Delivery Service"
];

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

  const [availableStates, setAvailableStates] = useState<string[]>([]);
  const [availableCities, setAvailableCities] = useState<string[]>([]);
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);

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
      // Allow only numbers and limit to 10 digits
      const onlyNums = value.replace(/[^0-9]/g, '').slice(0, 10);
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
      setAvailableStates(statesData[value as keyof typeof statesData] || []);
      setAvailableCities([]);
    } else if (name === 'state') {
      setFormData((prev) => ({
        ...prev,
        state: value,
        city: '',
      }));
      
      const countryCities = citiesData[formData.country as keyof typeof citiesData];
      if (countryCities) {
        setAvailableCities(countryCities[value as keyof typeof countryCities] || []);
      } else {
        setAvailableCities([]);
      }
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    localStorage.setItem('hasVisited', 'true');
    setFormSubmitted(true);
    
    // Close the form after showing success message
    setTimeout(() => {
      setIsOpen(false);
      setFormSubmitted(false);
    }, 3000);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-60 p-2 md:p-4 overflow-hidden ">
      {/* Dark overlay without backdrop-blur */}
      <div className="fixed inset-0 bg-black/40 backdrop-blur z-0"></div>
      
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-white rounded-2xl shadow-2xl p-4 md:p-6 lg:p-8 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg max-h-[90vh] relative animate-fade-in overflow-y-auto z-10">
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 text-2xl font-bold bg-white rounded-full w-8 h-8 flex items-center justify-center shadow-sm cursor-pointer"
            type="button"
            aria-label="Close popup"
          >
            &times;
          </button>

          {formSubmitted ? (
            <div className="text-center py-8">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
                <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900">Thank you!</h3>
              <p className="mt-2 text-sm text-gray-500">Your demo request has been received. We'll contact you shortly.</p>
            </div>
          ) : (
            <>
              <div className="text-center mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800">🚀 Book a Demo</h2>
                {/* <p className="text-gray-500 text-sm mt-1">Fill the form below to schedule your personalized demo</p> */}
              </div>

              <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Personal Information */}
                {/* <div className="sm:col-span-2">
                  <h3 className="text-sm font-medium text-gray-700 mb-2 border-b pb-1">Personal Information</h3>
                </div> */}
                
                <div className="sm:col-span-2">
                  <label className="block text-gray-600 mb-1 text-sm font-medium">Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                    className="w-full border border-green-400 rounded-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-green-500 transition text-sm"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-600 mb-1 text-sm font-medium">Email ID</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your email"
                    className="w-full border border-green-400 rounded-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-green-500 transition text-sm"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-600 mb-1 text-sm font-medium">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="Enter your phone"
                    className="w-full border border-green-400 rounded-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-green-500 transition text-sm"
                  />
                </div>
                
                {/* Location Details */}
                {/* <div className="sm:col-span-2 mt-2">
                  <h3 className="text-sm font-medium text-gray-700 mb-2 border-b pb-1">Location Details</h3>
                </div> */}
                
                <div>
                  <label className="block text-gray-600 mb-1 text-sm font-medium">Country</label>
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    required
                    className="w-full border border-green-400 rounded-lg p-2.5 bg-white focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                  >
                    <option value="">Select Country</option>
                    {countries.map((country) => (
                      <option key={country} value={country}>{country}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-gray-600 mb-1 text-sm font-medium">State/Province</label>
                  <select
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    required
                    disabled={!formData.country}
                    className={`w-full border border-green-400 rounded-lg p-2.5 bg-white focus:outline-none focus:ring-2 focus:ring-green-500 text-sm ${!formData.country ? 'bg-gray-100' : 'bg-white'}`}
                  >
                    <option value="">Select State</option>
                    {availableStates.map((state) => (
                      <option key={state} value={state}>{state}</option>
                    ))}
                  </select>
                </div>
                
                <div className="sm:col-span-2">
                  <label className="block text-gray-600 mb-1 text-sm font-medium">City</label>
                  <select
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                    disabled={!formData.state}
                    className={`w-full border border-green-400 rounded-lg p-2.5 bg-white focus:outline-none focus:ring-2 focus:ring-green-500 text-sm ${!formData.state ? 'bg-gray-100' : 'bg-white'}`}
                  >
                    <option value="">Select City</option>
                    {availableCities.map((city) => (
                      <option key={city} value={city}>{city}</option>
                    ))}
                  </select>
                </div>
                
                {/* Business Details */}
                {/* <div className="sm:col-span-2 mt-2">
                  <h3 className="text-sm font-medium text-gray-700 mb-2 border-b pb-1">Business Details</h3>
                </div> */}
                
                <div className="sm:col-span-2">
                  <label className="block text-gray-600 mb-1 text-sm font-medium">Business Type</label>
                  <select
                    name="businessType"
                    value={formData.businessType}
                    onChange={handleChange}
                    required
                    className="w-full border border-green-400 rounded-lg p-2.5 bg-white focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                  >
                    <option value="">Select business type</option>
                    {businessTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
                
                {/* Submit Button */}
                <div className="sm:col-span-2 mt-4">
                  <button
                    type="submit"
                    className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg transition-all text-sm shadow-md flex items-center justify-center gap-2"
                  >
                    <span>Book Your Demo</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
                
                <div className="sm:col-span-2 text-center text-xs text-gray-500 mt-2">
                  By submitting this form, you agree to our Terms of Service and Privacy Policy
                </div>
              </form>
            </>
          )}

          {/* Animation */}
          <style>{`
            @keyframes fade-in {
              from { opacity: 0; transform: scale(0.95); }
              to { opacity: 1; transform: scale(1); }
            }
            .animate-fade-in {
              animation: fade-in 0.4s ease-out;
            }
          `}</style>
        </div>
      </div>
    </div>
  );
};

export default PopupForm;