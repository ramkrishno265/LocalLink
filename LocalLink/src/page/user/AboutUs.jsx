import React from "react";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="max-w-5xl mx-auto">

        {/* Title Section */}
        <h1 className="text-4xl font-bold text-center text-purple-600">
          About LocalLink
        </h1>

        <p className="text-center text-gray-600 mt-4">
          Connecting people with trusted local service providers
        </p>

        {/* Content Section */}
        <div className="mt-10 bg-white p-8 rounded-2xl shadow-md">

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Who We Are
          </h2>

          <p className="text-gray-600 leading-7">
            LocalLink is a modern web-based platform designed to connect users
            with trusted local service providers such as electricians, plumbers,
            tutors, technicians, and more. Our goal is to make service finding
            easy, fast, and reliable.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">
            Our Mission
          </h2>

          <p className="text-gray-600 leading-7">
            Our mission is to simplify the process of finding local services by
            providing a trusted, transparent, and user-friendly platform where
            users can easily connect with verified professionals.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">
            Why LocalLink?
          </h2>

          <ul className="list-disc ml-6 text-gray-600 space-y-2">
            <li>Verified service providers</li>
            <li>Easy search and booking system</li>
            <li>Ratings and reviews for trust</li>
            <li>Fast and reliable service connection</li>
          </ul>

        </div>
      </div>
    </div>
  );
};

export default AboutUs;