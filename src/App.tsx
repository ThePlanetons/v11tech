import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Landing from './components/landing/Landing'
import QRLanding from './components/qr-ordering/QR-Landing'
import KDSLanding from './components/kds/KDS-Landing'
import KIOSKLanding from './components/kiosk/KIOSK-Landing'
import About from './components/about/About-Landing'
import ContactPage from './components/contact/ContactPage'
import Service from './components/service/service-Landing'
import Customer from './components/customer/QR-Landing'


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Landing routes */}
          <Route path="/" element={<Landing />} />

          {/* QR Landing */}
          <Route path="/products/qr-ordering" element={<QRLanding />} />

          {/* KDS Landing */}
          <Route path="/products/kds" element={<KDSLanding />} />

          {/* KIOSK Landing */}
          <Route path="/products/kiosk" element={<KIOSKLanding />} />

          {/* About */}
          <Route path="/about" element={<About />} />
 
          {/* service */}
          <Route path="/service" element={<Service />} />

          {/* customer */}
          <Route path="/customer" element={<Customer />} />

          {/* Contact */}
          <Route path="/Contact" element={<ContactPage />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App