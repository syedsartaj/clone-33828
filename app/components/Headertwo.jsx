'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Headertwo({ compname }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="h-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 h-full flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold">
          {compname}
        </Link>

        {/* Hamburger Menu */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>

        {/* Navigation */}
        <nav
          className={`${
            isOpen ? 'block' : 'hidden'
          } md:flex flex-col md:flex-row absolute md:static top-16 left-0 w-full md:w-auto bg-gradient-to-r from-blue-600 to-purple-600 md:bg-transparent md:space-x-6 p-4 md:p-0`}
        >
          <Link href="/contact" className="py-2 md:py-0 hover:text-gray-200 block">
            Services
          </Link>
          <Link href="/about" className="py-2 md:py-0 hover:text-gray-200 block">
            About
          </Link>
          <Link href="/BlogList" className="py-2 md:py-0 hover:text-gray-200 block">
            Blog
          </Link>
          <Link href="/contactus" className="py-2 md:py-0 hover:text-gray-200 block">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
