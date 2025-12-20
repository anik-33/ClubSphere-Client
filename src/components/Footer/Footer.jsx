import React from 'react';
import { Link } from 'react-router';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-5 py-16">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-blue-400 bg-clip-text text-transparent">
              ClubSphere
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-gray-400">
              ClubSphere helps students discover, join, and manage clubs
              and events easily in one unified platform.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-blue-500 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/clubs" className="hover:text-blue-500 transition">
                  Clubs
                </Link>
              </li>
              <li>
                <Link to="/events" className="hover:text-blue-500 transition">
                  Events
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="hover:text-blue-500 transition">
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Support
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/faq" className="hover:text-blue-500 transition">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-blue-500 transition">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-blue-500 transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-blue-500 transition">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Follow Us
            </h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="h-10 w-10 flex items-center justify-center rounded-full
                           bg-gray-800 hover:bg-blue-500 transition"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="h-10 w-10 flex items-center justify-center rounded-full
                           bg-gray-800 hover:bg-blue-500 transition"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="h-10 w-10 flex items-center justify-center rounded-full
                           bg-gray-800 hover:bg-blue-500 transition"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="h-10 w-10 flex items-center justify-center rounded-full
                           bg-gray-800 hover:bg-blue-500 transition"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mt-12 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} ClubSphere. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
