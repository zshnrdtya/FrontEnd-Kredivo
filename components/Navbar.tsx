'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '/merchant', label: 'Merchant Kami' },
    { href: '/partner', label: 'Jadi Partner' },
    { href: '/promo', label: 'Promo' },
    { href: '/faq', label: 'FAQ' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative h-8 w-32">
              <Image
                src="/Kredivo-logo.webp"
                alt="Kredivo Logo"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? 'text-sky-500'
                    : 'text-gray-700 hover:text-sky-500'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center space-x-4">
              <button className="text-sm font-medium text-gray-700 hover:text-sky-500">
                ID / EN
              </button>
              <a
                href="https://play.google.com/store/apps/details?id=com.finaccel.android&pid=homepage&deep_link_value=kredivo%3A%2F%2F&shortlink=homepage&source_caller=ui&af_dp=kredivo%3A%2F%2F"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-colors font-medium"
              >
                Daftar
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-sky-500 focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  pathname === link.href
                    ? 'text-sky-500 bg-sky-50'
                    : 'text-gray-700 hover:text-sky-500 hover:bg-sky-50'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="px-3 py-2">
              <button className="text-base font-medium text-gray-700 hover:text-sky-500 mb-2">
                ID / EN
              </button>
            </div>
            <div className="px-3 py-2">
              <a
                href="https://play.google.com/store/apps/details?id=com.finaccel.android&pid=homepage&deep_link_value=kredivo%3A%2F%2F&shortlink=homepage&source_caller=ui&af_dp=kredivo%3A%2F%2F"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full px-6 py-2 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-colors font-medium text-center"
              >
                Daftar
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
