import React, { useEffect, useState } from 'react';
import { MapPin, Phone, Mail, Check, Calendar, Loader2 } from 'lucide-react';
import NavigationBar from '../shared/NavigationBar';
import Footer from '../shared/Footer';
// import axios from 'axios';

// Country data
interface Country {
  code: string;
  name: string;
  phoneCode: string;
  phoneRegex?: RegExp;
}

const countries: Country[] = [
  { code: "US", name: "United States", phoneCode: "+1", phoneRegex: /^(\+?1)?[2-9]\d{2}[2-9](?!11)\d{6}$/ },
  { code: "IN", name: "India", phoneCode: "+91", phoneRegex: /^(\+?91|0)?[6789]\d{9}$/ },
  { code: "UK", name: "United Kingdom", phoneCode: "+44", phoneRegex: /^(\+?44|0)?[1-9]\d{9}$/ },
  { code: "CA", name: "Canada", phoneCode: "+1", phoneRegex: /^(\+?1)?[2-9]\d{2}[2-9](?!11)\d{6}$/ },
  { code: "AU", name: "Australia", phoneCode: "+61", phoneRegex: /^(\+?61|0)?[2-578](?:[2-8]\d{7}|9\d{8})$/ },
  { code: "SG", name: "Singapore", phoneCode: "+65", phoneRegex: /^(\+?65)?[689]\d{7}$/ },
  { code: "AE", name: "UAE", phoneCode: "+971", phoneRegex: /^(\+?971|0)?5[024568]\d{7}$/ },
  { code: "DE", name: "Germany", phoneCode: "+49", phoneRegex: /^(\+?49|0)?[1-9](?:[0-9]\d{1,11}|(?:[0-9]\d{3,7}))$/ },
  { code: "FR", name: "France", phoneCode: "+33", phoneRegex: /^(\+?33|0)?[1-9](?:[0-9]\d{8})$/ },
  { code: "BR", name: "Brazil", phoneCode: "+55", phoneRegex: /^(\+?55|0)?[1-9]{2}(?:[2-9]|9[1-9])[0-9]{7}$/ },
  { code: "JP", name: "Japan", phoneCode: "+81", phoneRegex: /^(\+?81|0)?[1-9]\d{8,9}$/ },
  { code: "MX", name: "Mexico", phoneCode: "+52", phoneRegex: /^(\+?52|0)?[1-9]\d{9}$/ },
  { code: "IT", name: "Italy", phoneCode: "+39", phoneRegex: /^(\+?39|0)?[3]\d{8,9}$/ },
  { code: "ES", name: "Spain", phoneCode: "+34", phoneRegex: /^(\+?34|0)?[6|7|9]\d{8}$/ },
  { code: "KR", name: "South Korea", phoneCode: "+82", phoneRegex: /^(\+?82|0)?[1-9]\d{7,8}$/ }
];

const statesByCountry: Record<string, string[]> = {
  US: ["California", "New York", "Texas", "Florida", "Illinois", "Pennsylvania", "Ohio", "Michigan", "Georgia", "North Carolina"],
  IN: ["Maharashtra", "Karnataka", "Tamil Nadu", "Delhi", "Gujarat", "Uttar Pradesh", "West Bengal", "Telangana", "Rajasthan", "Kerala"],
  UK: ["England", "Scotland", "Wales", "Northern Ireland"],
  CA: ["Ontario", "Quebec", "British Columbia", "Alberta", "Manitoba", "Saskatchewan", "Nova Scotia", "New Brunswick"],
  AU: ["New South Wales", "Victoria", "Queensland", "Western Australia", "South Australia", "Tasmania"],
  SG: ["Central Region", "East Region", "North Region", "North-East Region", "West Region"],
  AE: ["Dubai", "Abu Dhabi", "Sharjah", "Ajman", "Fujairah", "Umm Al Quwain", "Ras Al Khaimah"],
  DE: ["Bavaria", "Berlin", "Hamburg", "Hesse", "North Rhine-Westphalia", "Baden-Württemberg", "Saxony"],
  FR: ["Île-de-France", "Provence-Alpes-Côte d'Azur", "Nouvelle-Aquitaine", "Auvergne-Rhône-Alpes", "Occitanie"],
  BR: ["São Paulo", "Rio de Janeiro", "Minas Gerais", "Bahia", "Rio Grande do Sul"],
  JP: ["Tokyo", "Osaka", "Hokkaido", "Kyoto", "Fukuoka"],
  MX: ["Mexico City", "Jalisco", "Nuevo León", "Puebla", "Veracruz"],
  IT: ["Lombardy", "Lazio", "Campania", "Sicily", "Veneto"],
  ES: ["Madrid", "Catalonia", "Andalusia", "Valencia", "Galicia"],
  KR: ["Seoul", "Busan", "Incheon", "Daegu", "Daejeon"]
};

const citiesByState: Record<string, string[]> = {
  // United States
  "California": ["Los Angeles", "San Francisco", "San Diego", "San Jose", "Sacramento"],
  "New York": ["New York City", "Buffalo", "Rochester", "Yonkers", "Syracuse"],
  "Texas": ["Houston", "Austin", "Dallas", "San Antonio", "Fort Worth"],
  "Florida": ["Miami", "Orlando", "Tampa", "Jacksonville", "St. Petersburg"],

  // India
  "Maharashtra": ["Mumbai", "Pune", "Nagpur", "Thane", "Nashik"],
  "Karnataka": ["Bangalore", "Mysore", "Hubli", "Mangalore", "Belgaum"],
  "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai", "Salem", "Tiruchirappalli"],
  "Delhi": ["New Delhi", "Delhi NCR", "Gurgaon", "Noida", "Faridabad"],

  // United Kingdom
  "England": ["London", "Manchester", "Birmingham", "Liverpool", "Leeds"],
  "Scotland": ["Edinburgh", "Glasgow", "Aberdeen", "Dundee", "Inverness"],
  "Wales": ["Cardiff", "Swansea", "Newport", "Bangor", "St. Davids"],
  "Northern Ireland": ["Belfast", "Derry", "Lisburn", "Newry", "Armagh"],

  // Add more cities for other states...
  // This is a truncated list for brevity
};

// Enhanced Select Component
interface SelectOption {
  value: string;
  label: string;
}

interface EnhancedSelectProps {
  id: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: SelectOption[];
  placeholder: string;
  required?: boolean;
  disabled?: boolean;
  className?: string;
}

const EnhancedSelect: React.FC<EnhancedSelectProps> = ({
  id,
  name,
  value,
  onChange,
  options,
  placeholder,
  required = false,
  disabled = false,
  className = ""
}) => {
  return (
    <select
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      disabled={disabled}
      className={`mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm form-input transition-all duration-200 ${className}`}
      style={{
        backgroundColor: value ? '#f0fdf4' : '',
        borderColor: value ? '#16a34a' : '',
        color: value ? '#166534' : ''
      }}
    >
      <option value="">{placeholder}</option>
      {options.map(option => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

// Phone Input Component
interface PhoneInputProps {
  value: string;
  countryCode: string;
  onChange: (phone: string, countryCode: string) => void;
  phoneIsValid: boolean;
  required?: boolean;
  placeholder?: string;
}

const PhoneInput: React.FC<PhoneInputProps> = ({
  value,
  countryCode,
  onChange,
  phoneIsValid,
  required = false,
  placeholder = "Phone number"
}) => {
  const [localPhone, setLocalPhone] = useState(value);
  const [localCountryCode, setLocalCountryCode] = useState(countryCode);

  // Removed automatic country code detection to allow manual input

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const phoneValue = e.target.value;
    setLocalPhone(phoneValue);
    onChange(phoneValue, localCountryCode);
  };

  const handleCountryCodeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLocalCountryCode(e.target.value);
    onChange(localPhone, e.target.value);
  };

  return (
    <div className="flex phone-input-container">
      <select
        value={localCountryCode}
        onChange={handleCountryCodeChange}
        required={required}
        className="border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm form-input country-code-select transition-all duration-200 bg-white"
        style={{
          backgroundColor: localCountryCode ? '#f0fdf4' : '',
          borderColor: localCountryCode ? '#16a34a' : '',
          color: localCountryCode ? '#166534' : ''
        }}
      >
        <option value="">Code</option>
        {countries.map(country => (
          <option key={country.code} value={country.phoneCode}>
            {country.phoneCode} ({country.code})
          </option>
        ))}
      </select>
      <input
        type="tel"
        value={localPhone}
        onChange={handlePhoneChange}
        required={required}
        placeholder={placeholder}
        className={`phone-input ${!phoneIsValid ? 'invalid-input' : 'border-gray-300'} block w-full border rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm form-input`}
      />
    </div>
  );
};

// Main Form Data Interface
interface FormData {
  name: string;
  email: string;
  countryCode: string;
  phone: string;
  country: string;
  state: string;
  city: string;
  businessType: string;
  additionalInfo: string;
  phoneIsValid: boolean;
  emailIsValid: boolean;
}

// Main BookDemo Component
const BookDemo: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    countryCode: "",
    phone: "",
    country: "",
    state: "",
    city: "",
    businessType: "",
    additionalInfo: "",
    phoneIsValid: true,
    emailIsValid: true,
  });

  const [availableStates, setAvailableStates] = useState<string[]>([]);
  const [availableCities, setAvailableCities] = useState<string[]>([]);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [pageLoaded, setPageLoaded] = useState(false);

  // Page load animation
  useEffect(() => {
    setTimeout(() => {
      setPageLoaded(true);
    }, 300);

    document.title = "Book a Demo - V11 TECH - Point of Sale";
  }, []);

  // Update states when country changes
  useEffect(() => {
    if (formData.country) {
      const countryCode = countries.find(c => c.name === formData.country)?.code || "";
      const states = countryCode ? statesByCountry[countryCode as keyof typeof statesByCountry] || [] : [];
      setAvailableStates(states);
      setFormData(prev => ({ ...prev, state: "", city: "" }));
      setAvailableCities([]);
    } else {
      setAvailableStates([]);
      setAvailableCities([]);
    }
  }, [formData.country]);

  // Update cities when state changes
  useEffect(() => {
    if (formData.state) {
      const cities = citiesByState[formData.state as keyof typeof citiesByState] || [];
      setAvailableCities(cities);
      setFormData(prev => ({ ...prev, city: "" }));
    } else {
      setAvailableCities([]);
    }
  }, [formData.state]);

  // Add custom styles for animations
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      /* Change blue hover to green in dropdown */
      select option:hover,
      select option:focus,
      select option:active,
      select option:checked {
        background-color: #16a34a !important;
        color: blue !important;
      }
      
      /* For Webkit browsers */
      select option:checked {
        background: linear-gradient(#16a34a, #16a34a) !important;
      }
      
      /* Changing the checkbox color */
      input[type="checkbox"] {
        accent-color: #16a34a;
      }

      /* Phone input styling */
      .phone-input-container {
        display: flex;
      }
      
      .country-code-select {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
        min-width: 90px;
      }
      
      .phone-input {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        flex: 1;
      }

      /* Animations */
      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }

      @keyframes slideInFromLeft {
        from { opacity: 0; transform: translateX(-30px); }
        to { opacity: 1; transform: translateX(0); }
      }

      @keyframes slideInFromRight {
        from { opacity: 0; transform: translateX(30px); }
        to { opacity: 1; transform: translateX(0); }
      }

      @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.03); }
        100% { transform: scale(1); }
      }

      .form-input:focus {
        box-shadow: 0 0 0 2px rgba(22, 163, 74, 0.3);
        transition: all 0.3s ease;
      }

      .form-field {
        transition: all 0.3s ease;
      }

      // .form-field:hover {
      //   transform: translateY(-2px);
      // }
      
      .error-message {
        color: #ef4444;
        font-size: 0.75rem;
        margin-top: 0.25rem;
        animation: fadeIn 0.3s ease-out forwards;
      }
      
      .invalid-input {
        border-color: #ef4444 !important;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const isValidEmail = emailRegex.test(value);

      setFormData(prev => ({
        ...prev,
        [name]: value,
        emailIsValid: value === "" || isValidEmail
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handlePhoneChange = (phone: string, countryCode: string) => {
    // Allow manual input by just checking the length
    const isValidPhone = phone === "" || phone.length >= 7;

    setFormData(prev => ({
      ...prev,
      phone,
      countryCode,
      phoneIsValid: isValidPhone
    }));
  };

  const validateForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = emailRegex.test(formData.email);
    const isValidPhone = formData.phone.length >= 7;

    setFormData(prev => ({
      ...prev,
      emailIsValid: isValidEmail,
      phoneIsValid: isValidPhone
    }));

    return isValidEmail && isValidPhone;
  };

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();

  //   try {
  //     await axios.post('http://localhost:5000/api/send-enquiry', formData);
  //     alert('Message sent!');
  //   } catch (error) {
  //     console.error('Error sending message', error);
  //     alert('Failed to send message.');
  //   }
  // };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      setFormData({
        name: "",
        email: "",
        countryCode: "",
        phone: "",
        country: "",
        state: "",
        city: "",
        businessType: "",
        additionalInfo: "",
        phoneIsValid: true,
        emailIsValid: true,
      });

      setAvailableStates([]);
      setAvailableCities([]);

      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }, 1500);
  };

  // Transform data for select options
  const countryOptions = countries.map(country => ({
    value: country.name,
    label: country.name
  }));

  const stateOptions = availableStates.map(state => ({
    value: state,
    label: state
  }));

  const cityOptions = availableCities.map(city => ({
    value: city,
    label: city
  }));

  const businessTypeOptions = [
    { value: "restaurant", label: "Restaurant" },
    { value: "coffeeTea", label: "Coffee/Tea Shop" },
    { value: "cakeShop", label: "Cake Shop" },
    { value: "cloudKitchen", label: "Cloud Kitchen" },
    // { value: "qsr", label: "Quick Service Restaurant" },
    // { value: "bars", label: "Bars" },
    // { value: "foodCourts", label: "Food Courts" },
    // { value: "bakeryShops", label: "Bakery Shops" },
    // { value: "fastFood", label: "Fast Food" },
    // { value: "retail", label: "Retail Store" },
    // { value: "grocery", label: "Grocery Store" },
    // { value: "pharmacy", label: "Pharmacy" },
    // { value: "clothing", label: "Clothing Store" },
    // { value: "electronics", label: "Electronics Store" },
    // { value: "other", label: "Other" }
  ];

  return (
    <>
      <NavigationBar />
      <div className="bg-green-100 min-h-screen">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 pt-25">
          <div
            className="text-center"
            style={{
              opacity: pageLoaded ? 1 : 0,
              animation: pageLoaded ? 'fadeIn 0.8s ease-out forwards' : 'none'
            }}
          >
            <h2 className="text-3xl md:text-6xl text-center leading-tight text-gray-800 v11-roboto">
              BOOK A DEMO
            </h2>

            <p className="text-sm md:text-base text-gray-600 text-center mt-2 lowercase">
              EXPERIENCE THE POWER OF OUR CUTTING-EDGE POS SALES SYSTEM TAILORED TO STREAMLINE YOUR BUSINESS OPERATIONS. OUR FEATURE-RICH SOLUTION HELPS YOU MANAGE SALES, INVENTORY, BILLING, AND CUSTOMER TRANSACTIONS EFFORTLESSLY. FILL OUT THE FORM NOW TO SCHEDULE A FREE LIVE DEMO AND SEE HOW OUR POS SYSTEM CAN TRANSFORM YOUR BUSINESS!
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Company Info */}
            <div
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              style={{
                opacity: pageLoaded ? 1 : 0,
                animation: pageLoaded ? 'slideInFromLeft 0.8s ease-out forwards' : 'none',
                animationDelay: '0.2s'
              }}
            >
              <div className="h-80 bg-gray-300">
                <div className="w-full h-full flex items-center justify-center bg-green-50 overflow-hidden">
                  <img
                    src="/assets/img/book-demo.jpg"
                    alt="Product Showcase"
                    className="h-full w-full object-cover"
                    style={{
                      transform: pageLoaded ? 'scale(1)' : 'scale(1.1)',
                      transition: 'transform 1.5s ease-out'
                    }}
                  />
                </div>
              </div>

              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Book a Demo?</h2>

                <ul className="space-y-4">
                  <li
                    className="flex items-start"
                    style={{
                      opacity: pageLoaded ? 1 : 0,
                      animation: pageLoaded ? 'fadeIn 0.5s ease-out forwards' : 'none',
                      animationDelay: '0.4s'
                    }}
                  >
                    <div className="flex-shrink-0">
                      <Check className="h-6 w-6 text-green-500" />
                    </div>
                    <div className="ml-3 text-base text-gray-600">
                      <p>Get personalized insights tailored to your business needs</p>
                    </div>
                  </li>

                  <li
                    className="flex items-start"
                    style={{
                      opacity: pageLoaded ? 1 : 0,
                      animation: pageLoaded ? 'fadeIn 0.5s ease-out forwards' : 'none',
                      animationDelay: '0.6s'
                    }}
                  >
                    <div className="flex-shrink-0">
                      <Check className="h-6 w-6 text-green-500" />
                    </div>
                    <div className="ml-3 text-base text-gray-600">
                      <p>See our product's full capabilities with expert guidance</p>
                    </div>
                  </li>

                  <li
                    className="flex items-start"
                    style={{
                      opacity: pageLoaded ? 1 : 0,
                      animation: pageLoaded ? 'fadeIn 0.5s ease-out forwards' : 'none',
                      animationDelay: '0.8s'
                    }}
                  >
                    <div className="flex-shrink-0">
                      <Check className="h-6 w-6 text-green-500" />
                    </div>
                    <div className="ml-3 text-base text-gray-600">
                      <p>Ask questions and get real-time answers from our team</p>
                    </div>
                  </li>
                </ul>

                <div
                  className="mt-8 space-y-4"
                  style={{
                    opacity: pageLoaded ? 1 : 0,
                    animation: pageLoaded ? 'fadeIn 0.8s ease-out forwards' : 'none',
                    animationDelay: '1s'
                  }}
                >
                  <h3 className="text-lg font-medium text-gray-900">Contact Information</h3>

                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <Phone className="h-6 w-6 text-green-500" />
                    </div>
                    <div className="ml-3 text-base text-gray-600">
                      <p>+1 (555) 123-4567</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <Mail className="h-6 w-6 text-green-500" />
                    </div>
                    <div className="ml-3 text-base text-gray-600">
                      <p>demos@v11tech.com</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <MapPin className="h-6 w-6 text-green-500" />
                    </div>
                    <div className="ml-3 text-base text-gray-600">
                      <p>123 Business Avenue</p>
                      <p>Tech Park, City 12345</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Demo Booking Form */}
            <div
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              style={{
                opacity: pageLoaded ? 1 : 0,
                animation: pageLoaded ? 'slideInFromRight 0.8s ease-out forwards' : 'none',
                animationDelay: '0.3s'
              }}
            >
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Schedule Your Demo</h2>

                {isSubmitted ? (
                  <div
                    className="py-12 flex flex-col items-center justify-center text-center"
                    style={{
                      animation: 'pulse 1.5s ease-in-out infinite'
                    }}
                  >
                    <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                      <Check className="h-6 w-6 text-green-600" />
                    </div>
                    <h3 className="text-lg font-medium text-gray-900">Demo request submitted!</h3>
                    <p className="mt-2 text-gray-600">Our team will contact you shortly to confirm your demo appointment.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="form-field">
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm form-input"
                      />
                    </div>

                    <div className="form-field">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email ID <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className={`mt-1 block w-full border ${!formData.emailIsValid ? 'invalid-input' : 'border-gray-300'} rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm form-input`}
                      />
                      {!formData.emailIsValid && (
                        <p className="error-message">Please enter a valid email address</p>
                      )}
                    </div>

                    <div className="form-field">
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <PhoneInput
                        value={formData.phone}
                        countryCode={formData.countryCode}
                        onChange={handlePhoneChange}
                        phoneIsValid={formData.phoneIsValid}
                        required
                      />
                      {!formData.phoneIsValid && (
                        <p className="error-message">Please enter a valid phone number</p>
                      )}
                    </div>

                    <div className="form-field">
                      <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                        Country <span className="text-red-500">*</span>
                      </label>
                      <EnhancedSelect
                        id="country"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        options={countryOptions}
                        placeholder="Select Country"
                        required
                      />
                    </div>

                    <div className="form-field">
                      <label htmlFor="state" className="block text-sm font-medium text-gray-700">
                        State <span className="text-red-500">*</span>
                      </label>
                      <EnhancedSelect
                        id="state"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        options={stateOptions}
                        placeholder="Select State"
                        required
                        disabled={!formData.country}
                      />
                    </div>

                    <div className="form-field">
                      <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                        City <span className="text-red-500">*</span>
                      </label>
                      <EnhancedSelect
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        options={cityOptions}
                        placeholder="Select City"
                        required
                        disabled={!formData.state}
                      />
                    </div>

                    <div className="form-field">
                      <label htmlFor="businessType" className="block text-sm font-medium text-gray-700">
                        Business Type <span className="text-red-500">*</span>
                      </label>
                      <EnhancedSelect
                        id="businessType"
                        name="businessType"
                        value={formData.businessType}
                        onChange={handleChange}
                        options={businessTypeOptions}
                        placeholder="Select option"
                        required
                      />
                    </div>

                    <div className="form-field">
                      <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700">
                        Additional Information
                      </label>
                      <textarea
                        id="additionalInfo"
                        name="additionalInfo"
                        rows={4}
                        value={formData.additionalInfo}
                        onChange={handleChange}
                        placeholder="Let us know about your specific interests or questions"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm form-input"
                      />
                    </div>

                    <div>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:bg-green-300 transition-all duration-300 hover:shadow-lg"
                        style={{
                          animation: !isSubmitting ? 'pulse 2s infinite' : 'none'
                        }}
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="animate-spin h-5 w-5 mr-2" />
                            Scheduling...
                          </>
                        ) : (
                          <>
                            <Calendar className="h-5 w-5 mr-2" />
                            Book Demo
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BookDemo;