import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Logo & About */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">
            LocalLink
          </h2>
          <p className="text-gray-400">
            Connecting you with trusted local service providers quickly and easily.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/services" className="hover:text-white">Services</a></li>
            <li><a href="/about" className="hover:text-white">About</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Services
          </h3>
          <ul className="space-y-2">
            <li>Electrician</li>
            <li>Plumber</li>
            <li>AC Repair</li>
            <li>Home Cleaning</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Contact
          </h3>
          <p>Email: support@locallink.com</p>
          <p>Phone: +880 1234-567890</p>
          <p>Location: Dhaka, Bangladesh</p>

          <div>
            <a href="/admin-login" className="hover:text-red-400">
              Admin Panel
            </a>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="text-center text-gray-500 mt-10 border-t border-gray-700 pt-6">
        © {new Date().getFullYear()} LocalLink. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;