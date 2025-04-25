import React, { useState, useEffect } from "react";
import { MapPin, Phone, Mail, Check, Loader2, Calendar, Lock } from "lucide-react";
import NavigationBar from './NavigationBar';
import Footer from '../shared/Footer';

const BookDemo = () => {
  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    email: "",
    businessType: "",
    mobile: "",
    isWhatsapp: false,
    additionalInfo: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [otp, setOtp] = useState("");
  const [generatedOtp, setGeneratedOtp] = useState("");
  const [pageLoaded, setPageLoaded] = useState(false);

  // Page load animation
  useEffect(() => {
    // Set pageLoaded state to true after a slight delay to trigger animations
    setTimeout(() => {
      setPageLoaded(true);
    }, 300);
  }, []);

  // Add custom styles for the select dropdown and animations
  useEffect(() => {
    // Add custom CSS to handle the hover state and animations
    const style = document.createElement("style");
    style.textContent = `
      /* Change blue hover to green in dropdown */
      select#businessType option:hover,
      select#businessType option:focus,
      select#businessType option:active,
      select#businessType option:checked {
        background-color: #16a34a !important; /* Green-600 */
        color: white !important;
      }
      
      /* For Webkit browsers */
      select#businessType option:checked {
        background: linear-gradient(#16a34a, #16a34a) !important;
      }
      
      /* Changing the checkbox color */
      input[type="checkbox"] {
        accent-color: #16a34a;
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

      .form-field:hover {
        transform: translateY(-2px);
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = type === "checkbox" && e.target instanceof HTMLInputElement ? e.target.checked : undefined;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleOtpChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOtp(e.target.value);
  };

  const sendOtp = () => {
    if (!formData.mobile) {
      alert("Please enter a valid mobile number");
      return;
    }

    // Generate a random 6-digit OTP
    const randomOtp = Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedOtp(randomOtp);

    // In a real application, you would send this OTP to the user's mobile
    console.log("Generated OTP:", randomOtp);
    alert(`For demo purposes, your OTP is: ${randomOtp}`);

    setOtpSent(true);
  };

  const verifyOtp = () => {
    if (otp === generatedOtp) {
      setOtpVerified(true);
      alert("Mobile number verified successfully!");
    } else {
      alert("Invalid OTP. Please try again.");
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!captchaVerified) {
      alert("Please verify that you are not a robot.");
      return;
    }

    if (!otpVerified) {
      alert("Please verify your mobile number with OTP.");
      return;
    }

    setIsSubmitting(true);

    // Simulating form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: "",
        companyName: "",
        email: "",
        businessType: "",
        mobile: "",
        isWhatsapp: false,
        additionalInfo: "",
      });

      setOtpSent(false);
      setOtpVerified(false);
      setOtp("");

      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }, 1500);
  };

  const verifyCaptcha = () => {
    setCaptchaVerified(!captchaVerified);
  };

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
            <h1 className="text-5xl font-extrabold text-gray-900 sm:text-6xl">
              Book A Demo
            </h1>
            <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
              Experience the power of our cutting-edge POS Sales System tailored to streamline your business operations. Our feature-rich solution helps you manage sales, inventory, billing, and customer transactions effortlessly. Fill out the form now to schedule a free live demo and see how our POS system can transform your business!
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
                {/* Product showcase image with subtle animation */}
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
                  {/* Animated list items */}
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
                      <p>demos@yourcompany.com</p>
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

            {/* Demo Booking Form with animations */}
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
                      <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">
                        Company Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="companyName"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm form-input"
                      />
                    </div>

                    <div className="form-field">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Business Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm form-input"
                      />
                    </div>

                    <div className="form-field">
                      <label htmlFor="businessType" className="block text-sm font-medium text-gray-700">
                        Business Type <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="businessType"
                        name="businessType"
                        value={formData.businessType}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm form-input"
                      >
                        <option value="">Select option</option>
                        <option value="restaurant">Restaurant</option>
                        <option value="qsr">QSR(Quick Service Restaurant)</option>
                        <option value="bars">Bars</option>
                        <option value="foodCourts">Food Courts</option>
                        <option value="chains">Chains</option>
                        <option value="cloudKitchens">Cloud Kitchens</option>
                        <option value="canteens">Canteens</option>
                        <option value="bakeryShops">Bakery shops</option>
                        <option value="boutique">Boutique</option>
                      </select>
                    </div>

                    <div className="form-field">
                      <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">
                        Mobile Number <span className="text-red-500">*</span>
                      </label>
                      <div className="mt-1 flex">
                        <input
                          type="tel"
                          id="mobile"
                          name="mobile"
                          value={formData.mobile}
                          onChange={handleChange}
                          required
                          disabled={otpVerified}
                          className="block w-full border border-gray-300 rounded-l-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm form-input"
                        />
                        <button
                          type="button"
                          onClick={sendOtp}
                          disabled={!formData.mobile || otpVerified}
                          className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-r-md transition-all duration-300 hover:shadow-md"
                          style={{
                            transform: formData.mobile && !otpVerified ? 'translateY(0)' : 'translateY(0)',
                            transition: 'all 0.3s ease'
                          }}
                        >
                          {otpSent ? "Resend OTP" : "Send OTP"}
                        </button>
                      </div>
                    </div>

                    {otpSent && !otpVerified && (
                      <div
                        className="form-field"
                        style={{
                          animation: 'fadeIn 0.6s ease-out forwards'
                        }}
                      >
                        <label htmlFor="otp" className="block text-sm font-medium text-gray-700">
                          Enter OTP <span className="text-red-500">*</span>
                        </label>
                        <div className="mt-1 flex">
                          <input
                            type="text"
                            id="otp"
                            maxLength={6}
                            value={otp}
                            onChange={handleOtpChange}
                            className="block w-full border border-gray-300 rounded-l-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm form-input"
                          />
                          <button
                            type="button"
                            onClick={verifyOtp}
                            className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-r-md transition-all duration-300 hover:shadow-md"
                          >
                            Verify
                          </button>
                        </div>
                      </div>
                    )}

                    {otpVerified && (
                      <div
                        className="flex items-center text-green-600"
                        style={{
                          animation: 'fadeIn 0.6s ease-out forwards'
                        }}
                      >
                        <Lock className="h-5 w-5 mr-2" />
                        <span className="text-sm font-medium">Mobile number verified</span>
                      </div>
                    )}

                    <div className="flex items-center form-field">
                      <input
                        id="isWhatsapp"
                        name="isWhatsapp"
                        type="checkbox"
                        checked={formData.isWhatsapp}
                        onChange={handleChange}
                        className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                      />
                      <label htmlFor="isWhatsapp" className="ml-2 block text-sm text-gray-700">
                        This is also my WhatsApp number
                      </label>
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

                    <div
                      className="flex items-center form-field"
                      style={{
                        transition: 'all 0.3s ease'
                      }}
                    >
                      <div
                        onClick={verifyCaptcha}
                        className={`flex items-center cursor-pointer p-3 border ${captchaVerified ? 'border-green-500 bg-green-50' : 'border-gray-300'} rounded transition-all duration-300`}
                      >
                        <input
                          type="checkbox"
                          checked={captchaVerified}
                          readOnly
                          className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                        />
                        <span className="ml-2 text-sm text-gray-700">I'm not a robot</span>
                        {captchaVerified &&
                          <Check
                            className="h-4 w-4 ml-2 text-green-500"
                            style={{
                              animation: 'fadeIn 0.4s ease-out forwards'
                            }}
                          />
                        }
                      </div>
                    </div>

                    <div>
                      <button
                        type="submit"
                        disabled={isSubmitting || !otpVerified}
                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:bg-green-300 transition-all duration-300 hover:shadow-lg"
                        style={{
                          transform: otpVerified && !isSubmitting ? 'translateY(0)' : 'translateY(0)',
                          animation: otpVerified && !isSubmitting ? 'pulse 2s infinite' : 'none'
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