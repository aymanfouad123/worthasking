import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-gray-600 flex justify-between items-center px-7 py-4">
      <Link
        href="/"
        className="logo font-bold text-2xl hover:text-gray-300 transition-colors"
      >
        WorthAsking
      </Link>
      <ul className="flex justify-around gap-6">
        <li>
          <Link href="/" className="hover:text-gray-300 transition-colors">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-gray-300 transition-colors">
            About
          </Link>
        </li>
        <li>
          <Link
            href="/signin"
            className="hover:text-gray-300 transition-colors"
          >
            Sign In
          </Link>
        </li>
        <li>
          <Link
            href="/register"
            className="hover:text-gray-300 transition-colors"
          >
            Register
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
