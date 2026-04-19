import React from "react";

const AboutPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">

      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          About LocalLink
        </h1>
        <p className="max-w-2xl mx-auto text-lg">
          Connecting people with trusted local service providers quickly,
          easily, and reliably.
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-16">

        {/* About Intro */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            LocalLink is a smart platform designed to connect users with skilled
            local service providers such as electricians, plumbers, and home
            service experts. Our mission is to make everyday services easily
            accessible for everyone.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">

          <div className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3">🎯 Our Mission</h3>
            <p className="text-gray-500">
              To simplify the process of finding reliable local services and
              empower skilled professionals by connecting them with customers.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3">🚀 Our Vision</h3>
            <p className="text-gray-500">
              To become the most trusted platform for local service connections,
              ensuring quality, trust, and convenience for everyone.
            </p>
          </div>

        </div>

        {/* Why Choose Us */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold mb-10">Why Choose Us</h2>

          <div className="grid md:grid-cols-4 gap-6">

            <div className="bg-white p-6 rounded-xl shadow">
              <h4 className="font-semibold mb-2">✔ Trusted Providers</h4>
              <p className="text-gray-500 text-sm">
                Verified and experienced professionals.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h4 className="font-semibold mb-2">⚡ Fast Service</h4>
              <p className="text-gray-500 text-sm">
                Quick response and service delivery.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h4 className="font-semibold mb-2">💰 Affordable</h4>
              <p className="text-gray-500 text-sm">
                Budget-friendly service options.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h4 className="font-semibold mb-2">📱 Easy to Use</h4>
              <p className="text-gray-500 text-sm">
                Simple and user-friendly platform.
              </p>
            </div>

          </div>
        </div>

        {/* How It Works */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-10">
            How It Works
          </h2>

          <div className="grid md:grid-cols-3 gap-6 text-center">

            <div className="bg-white p-6 rounded-xl shadow">
              <h4 className="font-semibold mb-2">1️⃣ Choose Service</h4>
              <p className="text-gray-500">
                Select the service you need.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h4 className="font-semibold mb-2">2️⃣ Contact Provider</h4>
              <p className="text-gray-500">
                Connect with a trusted provider.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h4 className="font-semibold mb-2">3️⃣ Get Service</h4>
              <p className="text-gray-500">
                Enjoy fast and reliable service.
              </p>
            </div>

          </div>
        </div>

        {/* Call To Action */}
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">
            Ready to get started?
          </h2>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition">
            Find Services
          </button>
        </div>

      </div>
    </div>
  );
};

export default AboutPage;