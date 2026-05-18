'use client'

import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-white via-purple-50 to-indigo-50 border-t border-purple-100 mt-10">

      <div className="max-w-6xl mx-auto px-5 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-extrabold text-purple-700">
            MediQueue
          </h2>
          <p className="text-gray-600 mt-3 text-sm leading-relaxed">
            A smart tutor booking system that connects students with tutors
            and makes scheduling simple, fast, and organized.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-3">Quick Links</h3>
          <div className="flex flex-col gap-2 text-gray-600">
            <Link href="/" className="hover:text-purple-600 transition">Home</Link>
            <Link href="/tutors" className="hover:text-purple-600 transition">Tutors</Link>
            <Link href="/addTutor" className="hover:text-purple-600 transition">Add Tutor</Link>
            <Link href="/myTutors" className="hover:text-purple-600 transition">My Tutors</Link>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-3">Contact</h3>
          <p className="text-gray-600 text-sm">Email: support@mediqueue.com</p>
          <p className="text-gray-600 text-sm mt-1">Phone: +880 1234 567 890</p>

          <div className="flex gap-3 mt-4">
            <button className="px-3 py-1 text-sm rounded-full bg-purple-600 text-white hover:bg-purple-700 transition">
              Facebook
            </button>
            <button className="px-3 py-1 text-sm rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition">
              Twitter
            </button>
          </div>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="border-t border-purple-100 text-center py-4 text-gray-500 text-sm">
        © {new Date().getFullYear()} MediQueue. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;