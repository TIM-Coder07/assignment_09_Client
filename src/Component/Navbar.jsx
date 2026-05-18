"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavbarH = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Tutors", href: "/tutors" },
    { name: "Add Tutor", href: "/addTutor" },
    { name: "My Tutors", href: "/myTutors" },
    { name: "Booked Sessions", href: "/myBooked" },
  ];

  const isActive = (href) => pathname === href;

  const accent = "text-purple-600";
  const accentHover = "hover:text-purple-600";
  const underline = "bg-purple-600";
  const button = "bg-gradient-to-r from-purple-600 to-indigo-600";

  return (
    <nav
      className="sticky top-0 z-50 
bg-linear-to-r from-white via-purple-50 to-indigo-50
backdrop-blur-md
border-b border-purple-100
shadow-sm px-5 py-3 flex justify-between items-center"
    >
      {/* Logo */}
      <div className="font-extrabold text-xl tracking-wide text-purple-700">
        MediQueue
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-8">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`relative font-medium transition duration-200 ${
              isActive(item.href) ? accent : `text-gray-600 ${accentHover}`
            }`}
          >
            {item.name}

            <span
              className={`absolute left-0 -bottom-1 h-[2px] transition-all duration-300 ${
                isActive(item.href) ? `w-full ${underline}` : "w-0"
              }`}
            />
          </Link>
        ))}
      </div>

      {/* Auth buttons */}
      <div className="hidden md:flex gap-3 items-center">
        <Link
          href="/login"
          className={`text-gray-600 ${accentHover} transition`}
        >
          Login
        </Link>

        <Link
          href="/signup"
          className={`px-4 py-1.5 rounded-full text-white font-medium ${button} hover:opacity-90 transition shadow-md`}
        >
          Sign Up
        </Link>
      </div>

      {/* Mobile Toggle */}
      <button
        className="md:hidden text-2xl text-gray-700"
        onClick={() => setOpen(!open)}
      >
        {open ? "✕" : "☰"}
      </button>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-14 left-0 w-full bg-white/95 backdrop-blur-md shadow-lg border-t border-gray-200 p-5 flex flex-col gap-4 md:hidden animate-in fade-in slide-in-from-top">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`font-medium transition ${
                isActive(item.href)
                  ? "text-purple-600"
                  : "text-gray-700 hover:text-purple-600"
              }`}
            >
              {item.name}
            </Link>
          ))}

          <Link
            href="/login"
            onClick={() => setOpen(false)}
            className="text-gray-600 hover:text-purple-600"
          >
            Login
          </Link>

          <button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-2 rounded-full hover:opacity-90 transition">
            Sign Up
          </button>
        </div>
      )}
    </nav>
  );
};

export default NavbarH;
