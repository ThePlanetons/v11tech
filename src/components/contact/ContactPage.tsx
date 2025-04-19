

import React, { useState, FormEvent } from 'react';
import NavBar from '../shared/header/NavBar';
import Footer from '../shared/Footer';

interface FormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  option: string;
  message: string;
}

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    company: '',
    email: '',
    phone: '',
    option: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitSuccess, setSubmitSuccess] = useState<boolean>(false);

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    if (!formData.option) newErrors.option = 'Please select an option';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors({ ...errors, [name]: undefined });
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        console.log('Form submitted:', formData);
        setSubmitSuccess(true);
        setFormData({
          name: '',
          company: '',
          email: '',
          phone: '',
          option: '',
          message: ''
        });
      } catch (error) {
        console.error('Error submitting form:', error);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <> 
    <NavBar></NavBar>
    <div className="relative min-h-screen">
      {/* Navigation Bar */}
      

      {/* Content */}
      <div className="relative z-1 pt-24 pb-16 px-4">
        
       
        <div className="container mx-auto mt-5 max-w-5xl">
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="md:flex">
              {/* Map Section */}
              <div className="md:w-4 h-32 md:h-auto relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125322.4312506361!2d78.0397367!3d11.664325699999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babf1ccf52cba0b%3A0xee9989207c6cef3c!2sParasalur%2C%20Tamil%20Nadu%20609309!5e0!3m2!1sen!2sin!4v1713438803391!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Map of Parasalur"
                  className="absolute inset-0" />
              </div>

              {/* Form Section */}
              <div className="md:w-1/2 p-6 md:p-8 bg-gray-50">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Us</h2>

                {submitSuccess ? (
                  <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                    <p>Thank you for your message! We'll get back to you soon.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-gray-700 text-sm font-medium mb-1">Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-3 py-2 border rounded-md ${errors.name ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-green-500`}
                        placeholder="Your name" />
                      {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-gray-700 text-sm font-medium mb-1">Company Name</label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        placeholder="Your company (optional)" />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-1">Email *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-3 py-2 border rounded-md ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-green-500`}
                        placeholder="your.email@example.com" />
                      {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-gray-700 text-sm font-medium mb-1">Phone Number *</label>
                      <div className="flex">
                        <select className="bg-gray-100 border border-gray-300 rounded-l-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500">
                          <option value="+91">+91</option>
                          <option value="+1">+1</option>
                          <option value="+44">+44</option>
                          <option value="+61">+61</option>
                        </select>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className={`flex-1 px-3 py-2 border border-l-0 rounded-r-md ${errors.phone ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-green-500`}
                          placeholder="Phone Number" />
                      </div>
                      {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                    </div>

                    <div>
                      <label htmlFor="option" className="block text-gray-700 text-sm font-medium mb-1">Inquiry Type *</label>
                      <select
                        id="option"
                        name="option"
                        value={formData.option}
                        onChange={handleChange}
                        className={`w-full px-3 py-2 border rounded-md ${errors.option ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-green-500 bg-white`}
                      >
                        <option value="">Select option</option>
                        <option value="support">Customer Support</option>
                        <option value="sales">Sales Inquiry</option>
                        <option value="partnership">Partnership Opportunity</option>
                        <option value="feedback">Feedback</option>
                        <option value="other">Other</option>
                      </select>
                      {errors.option && <p className="text-red-500 text-xs mt-1">{errors.option}</p>}
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-gray-700 text-sm font-medium mb-1">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        placeholder="Your message here" />
                      <div className="text-right text-xs text-gray-500 mt-1">
                        {formData.message.length}/240
                      </div>
                    </div>

                    <div className="flex items-center">
                      <div className="border border-gray-300 rounded p-2 inline-block">
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            id="recaptcha"
                            className="mr-2"
                            required />
                          <label htmlFor="recaptcha" className="text-sm text-gray-700">I'm not a robot</label>
                        </div>
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full bg-green-500 text-white py-2 px-4 rounded-md font-medium ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-green-600'} transition duration-300`}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </form>
                )}

                <div className="mt-8 border-t pt-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Contact Information</h3>
                  <div className="space-y-2">
                    <p className="flex items-center text-gray-600">
                      <svg className="h-5 w-5 mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      Parasalur, Tamil Nadu 609309, India
                    </p>
                    <p className="flex items-center text-gray-600">
                      <svg className="h-5 w-5 mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      +91 9876543210
                    </p>
                    <p className="flex items-center text-gray-600">
                      <svg className="h-5 w-5 mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      contact@yourcompany.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div></>
  );
};

export default ContactPage;