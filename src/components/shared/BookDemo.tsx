import React, { useEffect, useState } from 'react';
import { MapPin, Phone, Mail, Check } from 'lucide-react';
import FormFields from './FormFields';
import NavigationBar from '../shared/NavigationBar';
import Footer from '../shared/Footer';
import axios from 'axios';

const BookDemo: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    state: "",
    city: "",
    product: "",
    message: ""
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [pageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setPageLoaded(true);
    }, 300);

    document.title = "Book a Demo - V11 TECH - Point of Sale";
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:3000/leads', formData);

      setIsSubmitted(true);

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
    } catch (error) {
      alert('There was an error submitting the form. Please try again later.');
    }
  };

  return (
    <>
      <NavigationBar />

      <div className="bg-green-100 min-h-screen">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 pt-22 md:pt-25">
          <div
            className="text-center"
            style={{
              opacity: pageLoaded ? 1 : 0,
              animation: pageLoaded ? 'fadeIn 0.8s ease-out forwards' : 'none'
            }}
          >
            <h2 className="text-4xl lg:text-5xl xl:text-6xl text-center leading-tight text-gray-800 v11-roboto">
              BOOK A DEMO
            </h2>

            <p className="text-sm md:text-base text-gray-600 text-center mt-2 lowercase">
              EXPERIENCE THE POWER OF OUR CUTTING-EDGE POS SALES SYSTEM TAILORED TO STREAMLINE YOUR BUSINESS OPERATIONS. OUR FEATURE-RICH SOLUTION HELPS YOU MANAGE SALES, INVENTORY, BILLING, AND CUSTOMER TRANSACTIONS EFFORTLESSLY. FILL OUT THE FORM NOW TO SCHEDULE A FREE LIVE DEMO AND SEE HOW OUR POS SYSTEM CAN TRANSFORM YOUR BUSINESS!
            </p>
          </div>

          <div className="mt-8 lg:mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
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
                    src="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
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
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <Check className="h-6 w-6 text-green-500" />
                    </div>
                    <div className="ml-3 text-base text-gray-600">
                      <p>Get personalized insights tailored to your business needs</p>
                    </div>
                  </li>

                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <Check className="h-6 w-6 text-green-500" />
                    </div>
                    <div className="ml-3 text-base text-gray-600">
                      <p>See our product's full capabilities with expert guidance</p>
                    </div>
                  </li>

                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <Check className="h-6 w-6 text-green-500" />
                    </div>

                    <div className="ml-3 text-base text-gray-600">
                      <p>Ask questions and get real-time answers from our team</p>
                    </div>
                  </li>
                </ul>

                <div className="mt-8 space-y-4">
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
                <h2 className="text-2xl font-bold text-center text-gray-700 v11-roboto mb-6">Experience the Demo Today</h2>

                {isSubmitted ? (
                  <div
                    className="py-12 flex flex-col items-center justify-center text-center"
                    style={{
                      animation: 'pulse 1.5s ease-in-out infinite',
                    }}
                  >
                    <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                      <Check className="h-6 w-6 text-green-600" />
                    </div>
                    <h3 className="text-lg font-medium text-gray-900">Demo request submitted!</h3>
                    <p className="mt-2 text-gray-600">
                      Our team will contact you shortly to confirm your demo appointment.
                    </p>
                    <p className="mt-5 text-blue-600 underline">
                      <a
                        href="https://play.google.com/store/apps/details?id=com.v11tech.mobkms"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Open in Play Store
                      </a>
                    </p>
                  </div>
                ) : (
                  <FormFields
                    formData={formData}
                    onChange={handleChange}
                    onSubmit={handleSubmit}
                    buttonText="Book Demo"
                  />
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

export default BookDemo