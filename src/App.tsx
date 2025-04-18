import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Landing from './components/landing/Landing'
import QRLanding from './components/qr-ordering/QR-Landing'
import KDSLanding from './components/kds/KDS-Landing'
import KIOSKLanding from './components/kiosk/KIOSK-Landing'
import About from './components/about/About-Landing'


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
          <Route path="/about" element={<About/>} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App