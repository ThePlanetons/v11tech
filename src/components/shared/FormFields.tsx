import React, { ChangeEvent } from 'react';

// Business Types
const businessTypes = [
  "Restaurant", 
  "Coffee/Tea Shop",
  "Cake Shop", 
  "Cloud Kitchen",
];

export interface FormData {
  fullName: string;
  email: string;
  phone: string;
  country: string;
  state: string;
  city: string;
  businessType: string;
  additionalInfo: string;
}

interface FormFieldsProps {
  formData: FormData;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
  buttonText?: string;
}

const FormFields: React.FC<FormFieldsProps> = ({
  formData,
  onChange,
  onSubmit,
  buttonText = "Submit"
}) => {
  return (
    <form onSubmit={onSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      
      
      <div className="sm:col-span-2">
        <label className="block text-gray-600 mb-1 text-sm font-medium">
          Full Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={onChange}
          required
          placeholder="Enter your full name"
          className="w-full border border-green-400 rounded-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-green-500 transition text-sm"
        />
      </div>
      
      <div>
        <label className="block text-gray-600 mb-1 text-sm font-medium">
          Email ID <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={onChange}
          required
          placeholder="Enter your email"
          className="w-full border border-green-400 rounded-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-green-500 transition text-sm"
        />
      </div>
      
      <div>
        <label className="block text-gray-600 mb-1 text-sm font-medium">
          Phone Number <span className="text-red-500">*</span>
        </label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={onChange}
          required
          placeholder="Enter your phone"
          className="w-full border border-green-400 rounded-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-green-500 transition text-sm"
        />
      </div>

      <div>
        <label className="block text-gray-600 mb-1 text-sm font-medium">
          Country <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="country"
          value={formData.country}
          onChange={onChange}
          required
          placeholder="Enter your country"
          className="w-full border border-green-400 rounded-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-green-500 transition text-sm"
        />
      </div>
      
      <div>
        <label className="block text-gray-600 mb-1 text-sm font-medium">
          State/Province <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="state"
          value={formData.state}
          onChange={onChange}
          required
          placeholder="Enter your state"
          className="w-full border border-green-400 rounded-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-green-500 transition text-sm"
        />
      </div>
      
      <div>
        <label className="block text-gray-600 mb-1 text-sm font-medium">
          City <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={onChange}
          required
          placeholder="Enter your city"
          className="w-full border border-green-400 rounded-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-green-500 transition text-sm"
        />
      </div>
     
      <div>
        <label className="block text-gray-600 mb-1 text-sm font-medium">
          Business Type <span className="text-red-500">*</span>
        </label>
        <select
          name="businessType"
          value={formData.businessType}
          onChange={onChange}
          required
          className="w-full border border-green-400 rounded-lg p-2.5 bg-white focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
        >
          <option value="">Select business type</option>
          {businessTypes.map((type) => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
      </div>

      <div className="sm:col-span-2">
        <label className="block text-gray-600 mb-1 text-sm font-medium">
          Additional Information
        </label>
        <textarea
          name="additionalInfo"
          value={formData.additionalInfo}
          onChange={onChange}
          placeholder="Please provide any additional details about your business"
          className="w-full border border-green-400 rounded-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-green-500 transition text-sm h-12 resize-none"
        />
      </div>
      
      <div className="sm:col-span-2 mt-4">
        <button
          type="submit"
          className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg transition-all text-sm shadow-md flex items-center justify-center gap-2"
        >
          <span>{buttonText}</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
      
      <div className="sm:col-span-2 text-center text-xs text-gray-500 mt-2">
        By submitting this form, you agree to our Terms of Service and Privacy Policy
      </div>
    </form>
  );
};

export default FormFields;