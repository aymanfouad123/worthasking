"use client";

import React from "react";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

const Navbar = () => {
  const { data: session, status } = useSession();

  return (
    <nav className="bg-white flex justify-between items-center px-10 py-6">
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
            About
          </Link>
        </li>
      </ul>

      {/* Auth Section */}
      <div className="flex items-center gap-4">
        {status === "loading" ? (
          <span className="text-gray-500">Loading...</span>
        ) : session ? (
          <>
            <img
              src={session.user.image}
              alt={session.user.name}
              className="w-8 h-8 rounded-full"
            />
            <button
              onClick={() => signOut()}
              className="text-gray-700 hover:text-worthgreen transition-colors"
            >
              Sign out
            </button>
          </>
        ) : (
          <Link
            href="/auth/signin"
            className="text-gray-700 font-medium hover:text-worthgreen transition-colors"
          >
            Log in
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
