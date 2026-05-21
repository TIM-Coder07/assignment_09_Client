import React from "react";
import {
  Target,
  Sparkles,
  ShieldCheck,
  CalendarCheck,
  Users,
  BookOpen,
  GraduationCap,
  Laptop,
} from "lucide-react";

const AboutPage = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-14">

      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">About MediQueue</h1>
        <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
          A modern tutor booking platform that simplifies learning, removes
          scheduling conflicts, and connects students with the right tutors
          instantly.
        </p>
      </div>

      {/* Mission */}
      <div className="grid md:grid-cols-2 gap-10 items-center mb-20">

        <div>
          <div className="flex items-center gap-2 mb-3">
            <Target className="text-blue-600" />
            <h2 className="text-2xl font-semibold">Our Mission</h2>
          </div>

          <p className="text-gray-600 leading-relaxed">
            MediQueue aims to make tutor booking effortless and organized. We
            help students find qualified tutors, check availability in real
            time, and book sessions without manual coordination. Our system
            ensures smooth scheduling and eliminates time conflicts.
          </p>
        </div>

        {/* Why box */}
        <div className="bg-white border rounded-xl shadow-sm p-6">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Sparkles className="text-yellow-500" />
            Why MediQueue?
          </h3>

          <ul className="space-y-3 text-gray-600">
            <li className="flex items-center gap-2">
              <CalendarCheck size={18} /> Real-time availability
            </li>
            <li className="flex items-center gap-2">
              <ShieldCheck size={18} /> Secure JWT authentication
            </li>
            <li className="flex items-center gap-2">
              <BookOpen size={18} /> Instant booking system
            </li>
            <li className="flex items-center gap-2">
              <Users size={18} /> Smart slot management
            </li>
          </ul>
        </div>
      </div>

      {/* Features */}
      <div className="mb-20">
        <h2 className="text-2xl font-semibold text-center mb-10">
          ✨ Key Features
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {/* Card 1 */}
          <div className="p-6 rounded-xl border hover:shadow-lg transition">
            <GraduationCap className="text-blue-600 mb-3" />
            <h3 className="font-semibold mb-2">Tutor Management</h3>
            <p className="text-gray-600 text-sm">
              Add, update, and manage tutors with detailed profiles including
              subject, availability, and experience.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-6 rounded-xl border hover:shadow-lg transition">
            <CalendarCheck className="text-green-600 mb-3" />
            <h3 className="font-semibold mb-2">Smart Booking System</h3>
            <p className="text-gray-600 text-sm">
              Book sessions easily with automatic slot tracking and date-based
              restrictions to avoid conflicts.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-6 rounded-xl border hover:shadow-lg transition">
            <ShieldCheck className="text-purple-600 mb-3" />
            <h3 className="font-semibold mb-2">Secure Authentication</h3>
            <p className="text-gray-600 text-sm">
              Email/password + Google login with JWT-based private routes.
            </p>
          </div>

        </div>
      </div>

      {/* How it works */}
      <div className="mb-20">
        <h2 className="text-2xl font-semibold text-center mb-10">
          ⚙️ How It Works
        </h2>

        <div className="grid md:grid-cols-4 gap-6 text-center">

          <div className="p-4 border rounded-xl">
            <Users className="mx-auto mb-2 text-blue-600" />
            <h4 className="font-semibold">Register</h4>
            <p className="text-gray-600 text-sm">
              Create account or login with Google
            </p>
          </div>

          <div className="p-4 border rounded-xl">
            <Laptop className="mx-auto mb-2 text-green-600" />
            <h4 className="font-semibold">Browse</h4>
            <p className="text-gray-600 text-sm">
              Explore tutors by subject
            </p>
          </div>

          <div className="p-4 border rounded-xl">
            <CalendarCheck className="mx-auto mb-2 text-purple-600" />
            <h4 className="font-semibold">Book</h4>
            <p className="text-gray-600 text-sm">
              Select time slot & confirm session
            </p>
          </div>

          <div className="p-4 border rounded-xl">
            <BookOpen className="mx-auto mb-2 text-orange-600" />
            <h4 className="font-semibold">Learn</h4>
            <p className="text-gray-600 text-sm">
              Start your learning journey
            </p>
          </div>

        </div>
      </div>

      {/* Footer */}
      <div className="text-center border-t pt-10">
        <p className="text-gray-600 text-sm max-w-2xl mx-auto">
          Built with React, Node.js, Express, MongoDB and JWT authentication
          focusing on performance, scalability, and real-world usability.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;