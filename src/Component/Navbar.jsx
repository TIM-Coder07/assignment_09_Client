"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { authClient } from "@/lib/auth-client"; // 👈 adjust path if needed

const NavbarH = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const {
    data: session,
    error,
  } = authClient.useSession();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Tutors", href: "/tutors" },
    { name: "Add Tutor", href: "/addTutor" },
    { name: "My Tutors", href: "/myTutors" },
    { name: "Booked Sessions", href: "/myBooked" },
  ];

  const isActive = (href) => pathname === href;

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/20 bg-white/70 backdrop-blur-xl shadow-sm">
      <div className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link href="/">
          <h1 className="text-2xl font-extrabold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent tracking-wide">
            MediQueue
          </h1>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`relative text-sm font-medium transition-all duration-300 ${
                isActive(item.href)
                  ? "text-purple-600"
                  : "text-gray-700 hover:text-purple-600"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Auth Section (SESSION ADDED) */}
        <div className="hidden md:flex items-center gap-4">
          {session?.user ? (
            <>
              <span className="text-sm text-gray-700 font-medium">
                {session.user.name || session.user.email}
              </span>

              <button
                onClick={() => authClient.signOut()}
                className="px-4 py-2 rounded-full bg-red-500 text-white text-sm hover:bg-red-600 transition"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="text-gray-700 hover:text-purple-600 transition font-medium"
              >
                Login
              </Link>

              <Link
                href="/signup"
                className="px-5 py-2 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium shadow-lg hover:scale-105 transition duration-300"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-3xl text-gray-700 transition"
        >
          {open ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <div className="px-6 pb-5 pt-2 bg-white/90 backdrop-blur-xl border-t border-gray-100 flex flex-col gap-4">

          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`text-sm font-medium transition ${
                isActive(item.href)
                  ? "text-purple-600"
                  : "text-gray-700 hover:text-purple-600"
              }`}
            >
              {item.name}
            </Link>
          ))}

          <div className="flex flex-col gap-3 pt-3 border-t border-gray-200">

            {session?.user ? (
              <>
                <p className="text-sm text-gray-700">
                  {session.user.name || session.user.email}
                </p>

                <button
                  onClick={() => authClient.signOut()}
                  className="py-2 rounded-full bg-red-500 text-white"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  onClick={() => setOpen(false)}
                  className="text-center py-2 rounded-full border border-purple-200 text-purple-600 hover:bg-purple-50 transition"
                >
                  Login
                </Link>

                <Link
                  href="/signup"
                  onClick={() => setOpen(false)}
                  className="text-center py-2 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:opacity-90 transition"
                >
                  Sign Up
                </Link>
              </>
            )}

          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarH;