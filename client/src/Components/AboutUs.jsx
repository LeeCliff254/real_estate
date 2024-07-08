// src/components/AboutUs.js

import React from 'react';

const AboutUs = () => {
  return (
    <div className="bg-gray-100">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Section 1: Introduction */}
        <section className="mb-12">
          <div className="text-center">
            <h2 className="text-4xl font-extrabold text-gray-800 mb-4">Welcome to Keja Yetu</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Keja Yetu is your premier destination for finding the perfect home or property. Whether you're buying, selling, or renting, we are here to make the process smooth and hassle-free.
            </p>
          </div>
        </section>

        {/* Section 2: Mission Statement */}
        <section className="mb-12">
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Mission</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our mission is to connect buyers and renters with the best properties that fit their needs and budget. We are committed to providing exceptional service and ensuring satisfaction every step of the way.
            </p>
          </div>
        </section>

        {/* Section 3: Services */}
        <section className="mb-12">
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Services</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              At Keja Yetu, we offer a range of services including property listings, virtual tours, real estate consultations, and more. Our dedicated team is here to assist you in finding your dream home.
            </p>
          </div>
        </section>

        {/* Section 4: Contact Us */}
        <section className="mb-12">
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Contact Us</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Have questions? Need assistance? Contact us today to start your journey towards finding your dream home!
            </p>
            <div className="flex justify-center">
              <a href="#" className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg shadow-md">Contact Us</a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
