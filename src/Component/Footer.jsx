"use client";

import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-white via-purple-50 to-indigo-50 border-t border-purple-100 mt-10">
      
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        
        {/* Brand */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-purple-700">
            MediQueue
          </h2>

          <p className="text-gray-600 mt-4 text-sm sm:text-base leading-relaxed max-w-md">
            A smart tutor booking system that connects students with tutors
            and makes scheduling simple, fast, and organized.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-3 mt-5">
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-purple-600 text-white hover:bg-purple-700 transition duration-300"
            >
              <FaFacebookF />
            </a>

            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-sky-500 text-white hover:bg-sky-600 transition duration-300"
            >
              <FaTwitter />
            </a>

            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-pink-500 text-white hover:bg-pink-600 transition duration-300"
            >
              <FaInstagram />
            </a>

            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-700 text-white hover:bg-blue-800 transition duration-300"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Quick Links
          </h3>

          <div className="flex flex-col gap-3 text-gray-600 text-sm sm:text-base">
            <Link
              href="/"
              className="hover:text-purple-600 transition duration-300"
            >
              Home
            </Link>

            <Link
              href="/tutors"
              className="hover:text-purple-600 transition duration-300"
            >
              Tutors
            </Link>

            <Link
              href="/addTutor"
              className="hover:text-purple-600 transition duration-300"
            >
              Add Tutor
            </Link>

            <Link
              href="/myTutors"
              className="hover:text-purple-600 transition duration-300"
            >
              My Tutors
            </Link>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Contact
          </h3>

          <div className="space-y-3 text-gray-600 text-sm sm:text-base">
            <p>Email: support@mediqueue.com</p>
            <p>Phone: +880 1234 567 890</p>
            <p>Location: Dhaka, Bangladesh</p>
          </div>

          {/* CTA Button */}
          <button className="mt-5 px-5 py-2.5 rounded-lg bg-purple-600 text-white font-medium hover:bg-purple-700 transition duration-300">
            Contact Us
          </button>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-purple-100">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-gray-500">
          
          <p>
            © {new Date().getFullYear()} MediQueue. All rights reserved by TAJ.
          </p>

          <p>
            Designed with ❤️ for modern learning
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
