import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaFacebook, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">
            Get in touch with our team for any questions or concerns
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Get In Touch</h2>
              <p className="text-gray-600 text-lg">
                We're here to help with all your dental care needs
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FaMapMarkerAlt className="text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2 text-lg">Address</h3>
                      <p className="text-gray-600">
                        <strong>Kiddle Dental Clinic & Implant Centre</strong><br />
                        G-62, Rajni Path, PC Colony<br />
                        RBI Flats Colony, Kankarbagh<br />
                        Patna, Bihar 800020, India
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FaPhone className="text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2 text-lg">Phone</h3>
                      <p className="text-gray-600 text-lg font-medium">+91 99399 01202</p>
                      <p className="text-gray-500 text-sm">Emergency: +91 99399 01202</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FaEnvelope className="text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2 text-lg">Email</h3>
                      <p className="text-gray-600">kimikumari@gmail.com</p>
                      <p className="text-gray-500 text-sm">We'll respond within 24 hours</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FaClock className="text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2 text-lg">Office Hours</h3>
                      <div className="text-gray-600 space-y-1">
                        <p>Monday - Saturday: 10:00 AM - 8:00 PM</p>
                        <p>Sunday: 10:00 AM - 1:00 PM</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-8 pt-8 border-t border-gray-200 text-center">
                <h3 className="font-semibold text-gray-800 mb-4">Follow Us</h3>
                <div className="flex justify-center space-x-4">
                  <a href="https://facebook.com" className="bg-primary-100 w-10 h-10 rounded-lg flex items-center justify-center text-primary-600 hover:bg-primary-200 transition">
                    <FaFacebook />
                  </a>
                  <a href="https://instagram.com" className="bg-primary-100 w-10 h-10 rounded-lg flex items-center justify-center text-primary-600 hover:bg-primary-200 transition">
                    <FaInstagram />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 bg-red-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-red-800 mb-4">Dental Emergency?</h2>
            <p className="text-red-600 text-lg mb-8">
              If you're experiencing a dental emergency, don't wait. Call us immediately.
            </p>
            <a 
              href="tel:+919939901202" 
              className="bg-red-600 text-white hover:bg-red-700 font-bold py-3 px-8 rounded-lg transition duration-200 inline-flex items-center space-x-2"
            >
              <FaPhone />
              <span>Emergency Line: +91 99399 01202</span>
            </a>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Schedule Your Visit?</h2>
          <p className="text-xl mb-8 text-primary-100">
            Call us today and let our experienced team take care of your dental health
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+919939901202" 
              className="bg-white text-primary-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition duration-200 inline-flex items-center justify-center space-x-2"
            >
              <FaPhone />
              <span>Call: +91 99399 01202</span>
            </a>
            <a 
              href="mailto:kimikumari@gmail.com" 
              className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-bold py-3 px-8 rounded-lg transition duration-200 inline-flex items-center justify-center space-x-2"
            >
              <FaEnvelope />
              <span>Email Us</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
