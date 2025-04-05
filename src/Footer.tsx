import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#0f172a] text-white pt-24 pb-10 overflow-hidden">
      {/* Wavy SVG Background */}
      <img src="./assets/img/Logo_Last.png" alt="Logo" className="w-32 h-auto" />


      {/* Footer Content */}
      <div className="relative z-10 text-center px-4">
        <h2 className="text-3xl font-bold mb-2 tracking-wider">V11QR</h2>
        <p className="text-sm text-gray-300">© 2025 V11QR. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
