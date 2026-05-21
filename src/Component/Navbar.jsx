"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { authClient } from "@/lib/auth-client";
import ProfileMenu from "./ProfileMenu";
import ThemeToggle from "./ExtraFetures/ThemeToggle";

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

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const handleLogout = async () => {
    await authClient.signOut();
    setOpen(false);
    router.refresh();
    router.push("/login");
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl shadow-sm">
      <div className="max-w-7xl mx-auto px-5 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <h1 className="text-2xl font-extrabold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
            MediQueue
          </h1>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition ${
                isActive(item.href)
                  ? "text-purple-600 dark:text-purple-400"
                  : "text-gray-700 dark:text-gray-300 hover:text-purple-600"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Right Actions (Desktop) */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />

          {session?.user ? (
            <>
              <span className="text-sm text-gray-700 dark:text-gray-300">
                {session.user.name || session.user.email}
              </span>
              <ProfileMenu handleLogout={handleLogout} />
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="text-sm text-gray-700 dark:text-gray-300 hover:text-purple-600"
              >
                Login
              </Link>

              <Link
                href="/signup"
                className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-sm"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-3xl text-gray-700 dark:text-gray-300"
        >
          {open ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-[600px]" : "max-h-0"
        }`}
      >
        <div className="px-6 pb-5 pt-4 bg-white/90 dark:bg-gray-900/90 border-t flex flex-col gap-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`text-sm font-medium ${
                isActive(item.href)
                  ? "text-purple-600"
                  : "text-gray-700 dark:text-gray-300"
              }`}
            >
              {item.name}
            </Link>
          ))}

          {/* Theme + Auth */}
          <div className="flex flex-col gap-3 pt-3 border-t border-gray-200 dark:border-gray-700">
            {session?.user ? (
              <>
                <p className="text-sm text-gray-700 dark:text-gray-300">
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
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600 dark:text-gray-300">
                Theme
              </span>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarH;
