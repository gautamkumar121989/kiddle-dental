import React from 'react';
import { FaCalendarAlt, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Appointments = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Book Your Appointment</h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">
            Schedule your visit with our experienced dental professionals
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Call Us to Schedule Your Appointment
              </h2>
              <p className="text-gray-600 text-lg">
                Our friendly staff will help you find the perfect time for your dental care needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaPhone className="text-primary-600 text-xl" />
                </div>
                <h3 className="font-semibold mb-2 text-lg">Call Us</h3>
                <p className="text-gray-600 text-lg font-medium">+91 99399 01202</p>
                <p className="text-gray-500 text-sm mt-1">Mon-Sat: 10AM-8PM</p>
              </div>
              
              <div className="text-center">
                <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaEnvelope className="text-primary-600 text-xl" />
                </div>
                <h3 className="font-semibold mb-2 text-lg">Email Us</h3>
                <p className="text-gray-600">kimikumari@gmail.com</p>
                <p className="text-gray-500 text-sm mt-1">We'll respond within 24 hours</p>
              </div>
              
              <div className="text-center">
                <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaCalendarAlt className="text-primary-600 text-xl" />
                </div>
                <h3 className="font-semibold mb-2 text-lg">Emergency</h3>
                <p className="text-gray-600">24/7 Emergency Line</p>
                <p className="text-gray-500 text-sm mt-1">For urgent dental needs</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Hours */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Office Hours</h2>
            
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="font-medium text-gray-700">Monday</span>
                  <span className="text-gray-600">10:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="font-medium text-gray-700">Tuesday</span>
                  <span className="text-gray-600">10:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="font-medium text-gray-700">Wednesday</span>
                  <span className="text-gray-600">10:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="font-medium text-gray-700">Thursday</span>
                  <span className="text-gray-600">10:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="font-medium text-gray-700">Friday</span>
                  <span className="text-gray-600">10:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="font-medium text-gray-700">Saturday</span>
                  <span className="text-gray-600">10:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="font-medium text-gray-700">Sunday</span>
                  <span className="text-gray-600">10:00 AM - 1:00 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Visit Our Clinic</h2>
            
            <div className="grid grid-cols-1 gap-8">
              <div className="bg-white rounded-lg shadow-md p-8">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="bg-primary-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaMapMarkerAlt className="text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Our Location</h3>
                    <p className="text-gray-600">
                      <strong>Kiddle Dental Clinic & Implant Centre</strong><br />
                      G-62, Rajni Path, PC Colony<br />
                      RBI Flats Colony, Kankarbagh<br />
                      Patna, Bihar 800020, India
                    </p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <FaPhone className="text-primary-600" />
                    <span className="text-gray-600">+91 99399 01202</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FaEnvelope className="text-primary-600" />
                    <span className="text-gray-600">kimikumari@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Schedule?</h2>
          <p className="text-xl mb-8 text-primary-100">
            Call us now and let's take care of your dental health
          </p>
          <a 
            href="tel:+919939901202" 
            className="bg-white text-primary-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition duration-200 inline-flex items-center space-x-2"
          >
            <FaPhone />
            <span>Call Now: +91 99399 01202</span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Appointments;
