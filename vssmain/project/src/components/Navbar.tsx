import React, { useState } from 'react';
import { Menu, X, Shield } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  window.addEventListener('scroll', handleScroll);

  return (
    <nav
      className={`fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm ${
        isScrolled ? 'shadow-lg bg-white' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Shield className="h-8 w-8 text-primary-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">Viswam Security</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-gray-700 hover:text-primary-600 transition-colors"
            >
              Home
            </a>
            <a
              href="#services"
              className="text-gray-700 hover:text-primary-600 transition-colors"
            >
              Services
            </a>
            <a
              href="#about"
              className="text-gray-700 hover:text-primary-600 transition-colors"
            >
              About
            </a>
            <a
              href="#careers"
              className="text-gray-700 hover:text-primary-600 transition-colors"
            >
              Careers
            </a>
            <a
              href="#contact"
              className="bg-primary-600 text-white px-4 py-2 rounded-md hover:bg-primary-700 transition-colors"
            >
              Contact Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-primary-600 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            <a
              href="#home"
              className="block px-3 py-2 text-gray-700 hover:text-primary-600 transition-colors"
            >
              Home
            </a>
            <a
              href="#services"
              className="block px-3 py-2 text-gray-700 hover:text-primary-600 transition-colors"
            >
              Services
            </a>
            <a
              href="#about"
              className="block px-3 py-2 text-gray-700 hover:text-primary-600 transition-colors"
            >
              About
            </a>
            <a
              href="#careers"
              className="block px-3 py-2 text-gray-700 hover:text-primary-600 transition-colors"
            >
              Careers
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 text-primary-600 font-medium"
            >
              Contact Us
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
