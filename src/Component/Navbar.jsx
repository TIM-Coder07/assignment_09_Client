"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { authClient } from "@/lib/auth-client";
import ProfileMenu from "./ProfileMenu";

const NavbarH = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const { data: session } = authClient.useSession();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Tutors", href: "/tutors" },
    { name: "Add Tutor", href: "/addTutor" },
    { name: "My Tutors", href: "/myTutors" },
    { name: "Booked Sessions", href: "/myBooked" },
  ];

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const handleLogout = async () => {
    await authClient.signOut();
    setOpen(false);
    router.refresh(); // UI update after logout
    router.push("/login");
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/20 bg-white/70 backdrop-blur-xl shadow-sm">
      <div className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <h1 className="text-2xl font-extrabold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
            MediQueue
          </h1>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition ${
                isActive(item.href)
                  ? "text-purple-600"
                  : "text-gray-700 hover:text-purple-600"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Desktop Auth */}
        <div className="hidden md:flex items-center gap-4">
          {session?.user ? (
            <>
              <span className="text-sm text-gray-700 font-medium">
                {session.user.name || session.user.email}
              </span>

              <ProfileMenu handleLogout={handleLogout} />
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="text-gray-700 hover:text-purple-600 font-medium"
              >
                Login
              </Link>

              <Link
                href="/signup"
                className="px-5 py-2 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-3xl text-gray-700"
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
        <div className="px-6 pb-5 pt-2 bg-white/90 border-t flex flex-col gap-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`text-sm font-medium ${
                isActive(item.href)
                  ? "text-purple-600"
                  : "text-gray-700 hover:text-purple-600"
              }`}
            >
              {item.name}
            </Link>
          ))}

          <div className="flex flex-col gap-3 pt-3 border-t">
            {session?.user ? (
              <>
                <p className="text-sm text-gray-700">
                  {session.user.name || session.user.email}
                </p>

                <ProfileMenu handleLogout={handleLogout} />
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  onClick={() => setOpen(false)}
                  className="text-center py-2 border rounded-full text-purple-600"
                >
                  Login
                </Link>

                <Link
                  href="/signup"
                  onClick={() => setOpen(false)}
                  className="text-center py-2 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white"
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
