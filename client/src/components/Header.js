import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaTooth, FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <FaTooth className="text-primary-600 text-2xl" />
            <div>
              <h1 className="text-xl font-bold text-gray-800">Kiddle Dental</h1>
              <p className="text-xs text-gray-600">Clinic & Implant Centre</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-primary-600 font-medium transition">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-primary-600 font-medium transition">
              About
            </Link>
            <Link to="/services" className="text-gray-700 hover:text-primary-600 font-medium transition">
              Services
            </Link>
            <Link to="/appointments" className="text-gray-700 hover:text-primary-600 font-medium transition">
              Appointments
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-primary-600 font-medium transition">
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link to="/appointments" className="btn-primary">
              Book Appointment
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col space-y-2">
              <Link
                to="/"
                className="text-gray-700 hover:text-primary-600 py-2 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-gray-700 hover:text-primary-600 py-2 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/services"
                className="text-gray-700 hover:text-primary-600 py-2 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                to="/appointments"
                className="text-gray-700 hover:text-primary-600 py-2 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Appointments
              </Link>
              <Link
                to="/contact"
                className="text-gray-700 hover:text-primary-600 py-2 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
