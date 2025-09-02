import React from 'react';
import { Link } from 'react-router-dom';
import { FaTooth, FaUserMd, FaClock, FaShieldAlt, FaCalendarAlt, FaStar } from 'react-icons/fa';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Your Smile is Our Priority
            </h1>
            <p className="text-xl mb-8 text-primary-100">
              Professional dental care and implant services with state-of-the-art technology 
              at Kiddle Dental Clinic & Implant Centre
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/appointments" className="bg-white text-primary-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition duration-200">
                Book Appointment
              </Link>
              <Link to="/contact" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-bold py-3 px-8 rounded-lg transition duration-200">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose Kiddle Dental?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We combine advanced dental technology with compassionate care to provide 
              the best possible dental experience for our patients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaUserMd className="text-primary-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Dentists</h3>
              <p className="text-gray-600">
                Our team of experienced and certified dental professionals provides top-quality care.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaShieldAlt className="text-primary-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Advanced Technology</h3>
              <p className="text-gray-600">
                State-of-the-art equipment and latest techniques for optimal results.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaClock className="text-primary-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Flexible Hours</h3>
              <p className="text-gray-600">
                Convenient scheduling options to fit your busy lifestyle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services with Image */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Dental Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Professional dental care with advanced technology and compassionate service
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image Section */}
            <div className="order-2 lg:order-1 bg-gray-100 rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/images/dental-services.jpg" 
                alt="Professional dental consultation at Kiddle Dental Clinic" 
                className="w-full h-80 object-contain"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
              <div className="hidden bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg p-8 text-white text-center h-80 flex flex-col justify-center">
                <FaTooth className="text-6xl mb-4 mx-auto opacity-80" />
                <h3 className="text-2xl font-bold mb-2">Professional Dental Care</h3>
                <p className="text-blue-100">Advanced dental services with state-of-the-art technology</p>
              </div>
            </div>
            
            {/* Services List */}
            <div className="order-1 lg:order-2">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <FaTooth className="text-primary-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Dental X-Ray</h3>
                    <p className="text-gray-600">Advanced digital X-ray technology for accurate diagnosis and treatment planning.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <FaUserMd className="text-primary-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Full Mouth Rehabilitation</h3>
                    <p className="text-gray-600">Comprehensive restoration of your entire mouth for optimal function and aesthetics.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <FaClock className="text-primary-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Single Visit RCT</h3>
                    <p className="text-gray-600">Efficient root canal treatment completed in a single appointment for your convenience.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <FaShieldAlt className="text-primary-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">CAD/CAM Dentistry</h3>
                    <p className="text-gray-600">Computer-aided design and manufacturing for precise dental restorations.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Link to="/appointments" className="btn-primary inline-flex items-center space-x-2">
                  <FaCalendarAlt />
                  <span>Schedule Consultation</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Info */}
      <section className="py-8 bg-primary-50">
        <div className="container mx-auto px-4 text-center">
          <div className="text-gray-600">
            <p className="font-semibold text-lg text-gray-800 mb-2">Kiddle Dental Clinic & Implant Centre</p>
            <p>📍 G-62, Rajni Path, PC Colony, RBI Flats Colony</p>
            <p>Kankarbagh, Patna, Bihar 800020, India</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">What Our Patients Say</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "From the moment I arrived, I was impressed by the clear and detailed information provided about my treatment options. Dr Jyotsana took the time to explain everything in a way that was easy to understand, making sure I felt fully informed every step of the way. She was very honest and upfront about what was necessary and what wasn't, never pushing unnecessary procedures. This transparency built a level of trust that is rare in Dentistry."
              </p>
              <div className="font-semibold">- Gautam Kumar</div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "Had a satisfactory experience there. The doctor treats her patients very gently. I had my scaling done and it was handled with care without any haste. I would recommend this clinic if you're looking for any dental treatments in Patna."
              </p>
              <div className="font-semibold">- Meenu Roy</div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "I stay in Pune but my wife is from Patna, while my recent visit to Patna had some discomfort in my teeth and terribly needed to visit a dentist.
I met Dr Jyotsana and she instantly diagnosed the issue and in no time she cured the issue with minimum procedure.
She is very knowledgeable and beliefs in fair practice not like other dental clinic where one is experimented upon.
Highly recommend for any Dental care."
              </p>
              <div className="font-semibold">- Vikash Thakur</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Smile?</h2>
          <p className="text-xl mb-8 text-primary-100">
            Schedule your appointment today and take the first step towards better oral health.
          </p>
          <Link to="/appointments" className="bg-white text-primary-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition duration-200 inline-flex items-center space-x-2">
            <FaCalendarAlt />
            <span>Book Your Appointment</span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
