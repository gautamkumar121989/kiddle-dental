import React from 'react';
import { FaTooth, FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-secondary-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Clinic Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <FaTooth className="text-primary-500 text-2xl" />
              <div>
                <h3 className="text-lg font-bold">Kiddle Dental</h3>
                <p className="text-sm text-gray-300">Clinic & Implant Centre</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm">
              Professional dental care and implant services with state-of-the-art technology 
              and experienced dental professionals.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <FaPhone className="text-primary-500" />
                <span className="text-sm">+91 99399 01202</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaEnvelope className="text-primary-500" />
                <span className="text-sm">kimikumari@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaMapMarkerAlt className="text-primary-500" />
                <span className="text-sm">G-62, Rajni Path, PC Colony, Kankarbagh, Patna</span>
              </div>
            </div>
          </div>

          {/* Office Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Office Hours</h4>
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex justify-between">
                <span>Mon - Sat:</span>
                <span>10:00 AM - 8:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday:</span>
                <span>10:00 AM - 1:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-4 mb-4 md:mb-0">
              <a href="https://facebook.com" className="text-gray-300 hover:text-primary-500 transition">
                <FaFacebook size={20} />
              </a>
              <a href="https://instagram.com" className="text-gray-300 hover:text-primary-500 transition">
                <FaInstagram size={20} />
              </a>
            </div>
            <p className="text-sm text-gray-300">
              © 2025 Kiddle Dental Clinic & Implant Centre. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
