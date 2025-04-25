import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Landing from './components/landing/Landing'
import QRLanding from './components/qr-ordering/QR-Landing'
import KDSLanding from './components/kds/KDS-Landing'
import KIOSKLanding from './components/kiosk/KIOSK-Landing'
import About from './components/about/About-Landing'
import ContactPage from './components/contact/ContactPage'
import Services from './components/service/Landing-Services'
import Customer from './components/customer/Landing-Customer'
import PrivacyPolicy from './components/shared/PrivacyandPolicy'
import Termsandcondition from './components/shared/TermsandConditions'
import BookDemo from './components/shared/BookDemo';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Home Landing */}
          <Route path="/" element={<Landing />} />

          {/* QR Landing */}
          <Route path="/products/qr-ordering" element={<QRLanding />} />

          {/* KDS Landing */}
          <Route path="/products/kds" element={<KDSLanding />} />

          {/* KIOSK Landing */}
          <Route path="/products/kiosk" element={<KIOSKLanding />} />

          {/* About */}
          <Route path="/about-us" element={<About />} />

          {/* Services */}
          <Route path="/services" element={<Services />} />

          {/* Customers */}
          <Route path="/customers" element={<Customer />} />

          {/* Contact */}
          <Route path="/contact-us" element={<ContactPage />} />

          {/* Privacy Policy */}
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />

          {/* Terms Conditions */}
          <Route path="/terms-and-conditions" element={<Termsandcondition />} />

          {/* Book Demo */}
          <Route path="/Book-Demo" element={<BookDemo />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App