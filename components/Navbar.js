import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-white flex justify-between items-center px-10 py-6 border-b border-gray-100">
      {/* Logo */}
      <Link href="/" className="flex items-center">
        <div className="w-8 h-8 bg-worthgreen rounded-full mr-3 flex items-center justify-center">
          <span className="text-white font-bold text-sm">W</span>
        </div>
      </Link>

      {/* Center Navigation */}
      <ul className="flex gap-12 text-gray-700 font-medium">
        <li>
          <Link
            href="/creators"
            className="hover:text-worthgreen transition-colors"
          >
            Creators
          </Link>
        </li>
        <li>
          <Link
            href="/questions"
            className="hover:text-worthgreen transition-colors"
          >
            Questions
          </Link>
        </li>
        <li>
          <Link href="/faq" className="hover:text-worthgreen transition-colors">
            FAQ
          </Link>
        </li>
      </ul>

      {/* Login */}
      <Link
        href="/signin"
        className="text-gray-700 font-medium hover:text-worthgreen transition-colors"
      >
        Log in
      </Link>
    </nav>
  );
};

export default Navbar;
