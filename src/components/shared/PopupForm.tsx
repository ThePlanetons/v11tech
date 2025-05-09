import React, { useState, useEffect, ChangeEvent } from 'react';
import FormFields, { FormData } from './FormFields';
import axios from 'axios';

const PopupForm: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    country: '',
    state: '',
    city: '',
    product: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);

  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscKey);
    }

    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [isOpen]);

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
      }, 18000);
      return () => {
        clearTimeout(openTimer);
        clearInterval(reopenInterval);
      };
    }
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    if (name === 'phone') {
      const onlyNums = value.replace(/[^0-9]/g, '').slice(0, 10);
      setFormData((prev) => ({
        ...prev,
        [name]: onlyNums,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const VITE_API_BASE_URL = import.meta.env.VITE_VITE_API_BASE_URL;

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      await axios.post(VITE_API_BASE_URL + 'leads', formData);

      localStorage.setItem('hasVisited', 'true');
      setFormSubmitted(true);

      setFormData({
        name: "",
        email: "",
        phone: "",
        country: "",
        state: "",
        city: "",
        product: "",
        message: ""
      });

      // setIsOpen(false);
      // setFormSubmitted(false);
    } catch (error) {
      alert('There was an error submitting the form. Please try again later.');
    }
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-60 p-2 md:p-4 overflow-hidden">
      <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-0"></div>
      
      <div className="flex items-center justify-center h-full">
        <div className="bg-white rounded-2xl shadow-2xl p-4 md:p-6 md:pt-0 lg:p-8 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg max-h-[90vh] relative animate-fade-in overflow-y-auto z-10">
          <div className="sticky top-0 right-0 z-20 flex justify-end w-full">
            <button
              onClick={handleClose}
              className="text-gray-400 hover:text-gray-600 text-2xl font-bold bg-white rounded-full w-8 h-8 flex items-center justify-center shadow-sm cursor-pointer"
              type="button"
              aria-label="Close popup"
            >
              &times;
            </button>
          </div>

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
              <div className="text-center overflow-hidden">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800">🚀 Book a Demo</h2>
              </div>

              <FormFields 
                formData={formData}
                onChange={handleChange}
                onSubmit={handleSubmit}
                buttonText="Book Your Demo"
              />
            </>
          )}

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