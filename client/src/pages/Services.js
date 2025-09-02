import React from 'react';
import { Link } from 'react-router-dom';
import { FaTooth, FaCalendarAlt } from 'react-icons/fa';

const Services = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Our Dental Services</h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">
            Advanced dental procedures and treatments performed at our state-of-the-art clinic
          </p>
        </div>
      </section>

      {/* Services Gallery */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Treatment Gallery</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive dental care from routine cleanings to advanced surgical procedures
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Service Image 1 - Root Canal Treatment */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48 bg-gray-100">
                <img 
                  src="/images/services/rootcanal.jpg" 
                  alt="Root Canal Treatment - Advanced endodontic procedure"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="hidden w-full h-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
                  <FaTooth className="text-white text-4xl opacity-80" />
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-800 mb-2">ROOT CANAL TREATMENT</h3>
                <p className="text-gray-600 text-sm">Single visit RCT with advanced technology</p>
              </div>
            </div>

            {/* Service Image 2 - Crown & Bridge */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48 bg-gray-100">
                <img 
                  src="/images/services/service-2.jpeg" 
                  alt="Crown & Bridge Treatment - Custom dental restorations"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="hidden w-full h-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
                  <FaTooth className="text-white text-4xl opacity-80" />
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-800 mb-2">CROWN & BRIDGE</h3>
                <p className="text-gray-600 text-sm">Custom restorations for damaged teeth</p>
              </div>
            </div>

            {/* Service Image 3 - Child Dentistry */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48 bg-gray-100">
                <img 
                  src="/images/services/service-3.jpeg" 
                  alt="Child Dentistry - Pediatric dental care"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="hidden w-full h-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
                  <FaTooth className="text-white text-4xl opacity-80" />
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-800 mb-2">CHILD DENTISTRY</h3>
                <p className="text-gray-600 text-sm">Gentle dental care for children</p>
              </div>
            </div>

            {/* Service Image 4 - Dental Implant */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48 bg-gray-100">
                <img 
                  src="/images/services/service-4.jpeg" 
                  alt="Dental Implant - Permanent tooth replacement"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="hidden w-full h-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
                  <FaTooth className="text-white text-4xl opacity-80" />
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-800 mb-2">DENTAL IMPLANT</h3>
                <p className="text-gray-600 text-sm">Permanent tooth replacement solutions</p>
              </div>
            </div>

            {/* Service Image 5 - Cosmetic Dentistry */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48 bg-gray-100">
                <img 
                  src="/images/services/service-5.jpeg" 
                  alt="Cosmetic Dentistry - Smile enhancement treatments"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="hidden w-full h-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
                  <FaTooth className="text-white text-4xl opacity-80" />
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-800 mb-2">COSMETIC DENTISTRY</h3>
                <p className="text-gray-600 text-sm">Smile enhancement and beautification</p>
              </div>
            </div>

            {/* Service Image 6 - Dental Braces */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48 bg-gray-100">
                <img 
                  src="/images/services/service-6.jpeg" 
                  alt="Dental Braces - Orthodontic treatment"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="hidden w-full h-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
                  <FaTooth className="text-white text-4xl opacity-80" />
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-800 mb-2">DENTAL BRACES</h3>
                <p className="text-gray-600 text-sm">Straighten teeth with modern braces</p>
              </div>
            </div>

            {/* Service Image 7 - Dental & Oral Surgery */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48 bg-gray-100">
                <img 
                  src="/images/services/service-7.jpeg" 
                  alt="Dental & Oral Surgery - Advanced surgical procedures"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="hidden w-full h-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
                  <FaTooth className="text-white text-4xl opacity-80" />
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-800 mb-2">DENTAL & ORAL SURGERY</h3>
                <p className="text-gray-600 text-sm">Advanced surgical dental procedures</p>
              </div>
            </div>

            {/* Service Image 8 - Early Diagnosis of Oral Cancer */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48 bg-gray-100">
                <img 
                  src="/images/services/service-8.jpeg" 
                  alt="Early Diagnosis of Oral Cancer - Preventive screening"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="hidden w-full h-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
                  <FaTooth className="text-white text-4xl opacity-80" />
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-800 mb-2">EARLY DIAGNOSIS OF ORAL CANCER</h3>
                <p className="text-gray-600 text-sm">Preventive screening and early detection</p>
              </div>
            </div>

            {/* Service Image 9 - Treatment of Oral Diseases */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48 bg-gray-100">
                <img 
                  src="/images/services/service-9.jpeg" 
                  alt="Treatment of Oral Diseases - Comprehensive oral care"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="hidden w-full h-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
                  <FaTooth className="text-white text-4xl opacity-80" />
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-800 mb-2">TREATMENT OF ORAL DISEASES</h3>
                <p className="text-gray-600 text-sm">Comprehensive oral health management</p>
              </div>
            </div>

            {/* Service Image 10 - Treatment of Gum Diseases */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48 bg-gray-100">
                <img 
                  src="/images/services/service-10.jpeg" 
                  alt="Treatment of Gum Diseases - Periodontal care"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="hidden w-full h-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
                  <FaTooth className="text-white text-4xl opacity-80" />
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-800 mb-2">TREATMENT OF GUM DISEASES</h3>
                <p className="text-gray-600 text-sm">Advanced periodontal treatments</p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <Link to="/appointments" className="bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 px-6 rounded-lg transition duration-200 inline-flex items-center space-x-2">
              <FaCalendarAlt />
              <span>Book Your Treatment</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
