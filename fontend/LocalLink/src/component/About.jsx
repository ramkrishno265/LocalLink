import React from "react";

const About = () => {
  return (
    <section className="bg-gray-100 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">

        {/* Title */}
        <h2 className="text-4xl font-bold mb-6 text-gray-800">
          About LocalLink
        </h2>

        {/* Intro */}
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          LocalLink is a platform that connects users with trusted local service
          providers like electricians, plumbers, and technicians. Our goal is to
          make finding reliable services fast, easy, and affordable.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Mission */}
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3">🎯 Our Mission</h3>
            <p className="text-gray-500">
              To connect people with skilled local professionals and provide
              reliable services anytime, anywhere.
            </p>
          </div>

          {/* Services */}
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3">🛠 What We Offer</h3>
            <ul className="text-gray-500 space-y-1">
              <li>✔ Electrician</li>
              <li>✔ Plumber</li>
              <li>✔ AC Repair</li>
              <li>✔ Home Services</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3">⭐ Why Choose Us</h3>
            <ul className="text-gray-500 space-y-1">
              <li>✔ Verified Providers</li>
              <li>✔ Fast Response</li>
              <li>✔ Affordable Pricing</li>
              <li>✔ Easy to Use</li>
            </ul>
          </div>

        </div>

        {/* How it works */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold mb-6">How It Works</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-600">

            <div className="bg-white p-6 rounded-xl shadow">
              <h4 className="font-semibold mb-2">1️⃣ Choose Service</h4>
              <p>Select the service you need from our platform.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h4 className="font-semibold mb-2">2️⃣ Contact Provider</h4>
              <p>Get in touch with the best local provider.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h4 className="font-semibold mb-2">3️⃣ Get Service</h4>
              <p>Receive fast and reliable service at your doorstep.</p>
            </div>

          </div>
        </div>

        {/* Button */}
        <div className="mt-10">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition">
            Get Started
          </button>
        </div>

      </div>
    </section>
  );
};

export default About;