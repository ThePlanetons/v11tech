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
    <NavBar />

    {/* Contact Summary Section with Background Effect */}
    <div className="relative overflow-hidden bg-gradient-to-r from-green-600 to-green-800 text-white">
      {/* Background Pattern */}
      {/* <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          backgroundSize: "24px 24px"
        }}></div>
      </div> */}
      
      <div className="container mx-auto px-6 py-16 pb-24 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h1>
          <p className="text-lg md:text-xl opacity-90 mb-8">
            Have questions or need assistance? Our team is here to help you with anything you need.
          </p>
          
          <div className="flex flex-wrap justify-center gap-8 mt-8">
            <div className="flex items-center px-4 py-3 bg-green-300 bg-opacity-10 backdrop-blur-sm rounded-lg">
              <div className="bg-green bg-opacity-20 p-3 rounded-full mr-3">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p className="text-sm opacity-80">Call Us</p>
                <p className="font-medium">+91 9876543210</p>
              </div>
            </div>
            
            <div className="flex items-center px-4 py-3 bg-green-300 bg-opacity-10 backdrop-blur-sm rounded-lg">
              <div className="bg-green bg-opacity-20 p-3 rounded-full mr-3">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-sm opacity-80">Email</p>
                <p className="font-medium">contact@yourcompany.com</p>
              </div>
            </div>
            
            <div className="flex items-center px-4 py-3 bg-green-300 bg-opacity-10 backdrop-blur-sm rounded-lg">
              <div className="bg-green bg-opacity-20 p-3 rounded-full mr-3">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="text-sm opacity-80">Location</p>
                <p className="font-medium">Parasalur, Tamil Nadu</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave Divider */}
      
        
      <div className="container mx-auto px-8 pb-12">
        <div className="flex justify-between text-white text-sm md:text-base">
          <span>India</span>
          <span>Hong Kong</span>
          <span>Dubai</span>
          <span>United Kingdom</span>
        </div>
      </div>

        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" fill="#ffffff">
          <path d="M0,64L80,58.7C160,53,320,43,480,48C640,53,800,75,960,80C1120,85,1280,75,1360,69.3L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
        </svg> */}
    
    </div>
    
    <div className="relative min-h-screen">
      {/* Content */}
      <div className="relative z-0 pb-32 px-4/mx-auto  max-w-l">
        {/* <div className="container mx-auto mt-5 max-w-l"> */}
          <div className="bg-white  shadow-xl overflow-hidden">
            <div className="md:flex">
              {/* Map Section */}
              <div className="md:w-1/2 h-96 md:h-auto relative">
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
              <div className="md:w-1/2 p-6 md:p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Us</h2>

                {submitSuccess ? (
                  <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                    <p>Thank you for your message! We'll get back to you soon.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-gray-700 bg-white text-sm font-medium mb-1"></label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-3 py-2 bg-white border rounded-md ${errors.name ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-green-500`}
                        placeholder="Name" />
                      {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                    </div>

                    <div>
                      <label htmlFor="company" className="block bg-white text-gray-700 text-sm font-medium mb-1"></label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border bg-white border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        placeholder="Company Name" />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-1"></label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-3 py-2 bg-white border rounded-md ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-green-500`}
                        placeholder="*****@example.com" />
                      {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-gray-700 text-sm font-medium mb-1"></label>
                      <div className="flex">
                        <select className="bg-white border border-gray-300 rounded-l-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500">
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
                          className={`flex-1 px-3 py-2 bg-white border border-l-0 rounded-r-md ${errors.phone ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-green-500`}
                          placeholder="Phone Number" />
                      </div>
                      {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                    </div>

                    <div>
                      <label htmlFor="option" className="block text-gray-700 text-sm font-medium mb-1"></label>
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
                      <label htmlFor="message" className="block text-gray-700 text-sm font-medium mb-1"></label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full bg-white px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        placeholder="Your message here" />
                      <div className="text-right text-xs text-gray-500 mt-1">
                        {formData.message.length}/240
                      </div>
                    </div>

                    <div className="flex py-2 items-center">
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="recaptcha"
                          className="mr-2"
                          required />
                        <label htmlFor="recaptcha" className="text-sm text-green-500">I'm not a robot</label>
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full bg-green-500 text-white py-2 px-4 rounded-md font-medium ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-black'} transition duration-300`}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        {/* </div> */}
      </div>
      <Footer />
    </div>
    </>
  );
};

export default ContactPage;