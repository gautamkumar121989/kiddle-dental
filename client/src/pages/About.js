import React from 'react';
import { FaUserMd, FaGraduationCap, FaAward, FaHeart, FaShieldAlt } from 'react-icons/fa';

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-6">About Kiddle Dental</h1>
            <p className="text-xl text-gray-600">
              Providing exceptional dental care and implant services with a commitment 
              to patient comfort and satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Kiddle Dental Clinic & Implant Centre was founded with a simple mission: 
                to provide world-class dental care in a comfortable and welcoming environment. 
                Our team of experienced professionals is dedicated to helping you achieve 
                optimal oral health and a beautiful smile.
              </p>
              <p className="text-gray-600 mb-6">
                Our dental practice has built a reputation for excellence in both general 
                dentistry and specialized implant procedures. Our state-of-the-art facility 
                is equipped with the latest technology to ensure the best possible outcomes 
                for our patients.
              </p>
              <div className="grid grid-cols-1 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-600">1000+</div>
                  <div className="text-sm text-gray-600">Happy Patients</div>
                </div>
              </div>
            </div>
            <div className="relative bg-gray-100 rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/images/office.jpg" 
                alt="Kiddle Dental Clinic Office Interior" 
                className="w-full h-80 object-contain"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="hidden bg-gray-200 h-80 rounded-lg flex items-center justify-center">
                <p className="text-gray-500">[Office Photo Coming Soon]</p>
              </div>
              {/* Optional overlay with clinic name */}
              <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white px-4 py-2 rounded-lg">
                <p className="text-sm font-medium">Our Modern Clinic</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Values</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaHeart className="text-primary-600 text-2xl" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Compassionate Care</h3>
              <p className="text-gray-600 text-sm">
                We treat every patient with kindness and understanding
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaGraduationCap className="text-primary-600 text-2xl" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Continuous Learning</h3>
              <p className="text-gray-600 text-sm">
                Staying updated with the latest dental techniques and technology
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaAward className="text-primary-600 text-2xl" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Excellence</h3>
              <p className="text-gray-600 text-sm">
                Committed to delivering the highest quality dental care
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaShieldAlt className="text-primary-600 text-2xl" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Safety First</h3>
              <p className="text-gray-600 text-sm">
                Maintaining the highest standards of safety and hygiene
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
