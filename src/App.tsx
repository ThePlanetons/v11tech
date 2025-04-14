import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Landing from './components/landing/Landing'
import QRLanding from './components/qr-ordering/QR-Landing'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Landing routes */}
          <Route path="/" element={<Landing />} />

          {/* qr-ordering */}
          <Route path="/products/qr-ordering" element={<QRLanding />} />


        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App