"use client";
import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-blue-600 to-indigo-700 shadow-lg text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center space-x-4">
            {/* Logo */}
            <Link href="/" className="text-2xl font-bold">
              ✈️ VuelosApp
            </Link>
            {/* Main Nav Links */}
            <div className="hidden md:flex space-x-6">
              <Link href="/" className="hover:text-gray-200">
                Home
              </Link>
              <Link href="/about" className="hover:text-gray-200">
                About
              </Link>
              <Link href="/services" className="hover:text-gray-200">
                Services
              </Link>
              <Link href="/contact" className="hover:text-gray-200">
                Contact
              </Link>
            </div>
          </div>
          {/* Right Side - Profile & Menu Toggle */}
          <div className="flex items-center space-x-4">
            {/* Profile Button */}
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md hidden md:block">
              My Profile
            </button>
            {/* Mobile Menu Button */}
            <button
              type="button"
              className="md:hidden text-gray-200 hover:text-white focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className="md:hidden" id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            href="/"
            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-blue-500"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-blue-500"
          >
            About
          </Link>
          <Link
            href="/services"
            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-blue-500"
          >
            Services
          </Link>
          <Link
            href="/contact"
            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-blue-500"
          >
            Contact
          </Link>
          <button className="block w-full px-3 py-2 rounded-md text-base font-medium text-white bg-blue-500 hover:bg-blue-600 mt-2">
            My Profile
          </button>
        </div>
      </div>
    </nav>
  );
}
