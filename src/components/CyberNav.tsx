'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function CyberNav() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Community', href: '/community' },
    { name: 'Events', href: '/events' },
    { name: 'Social', href: '/social' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-red-900/50 shadow-lg shadow-red-900/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <Image 
              src="/encryptedge_logo.jpg" 
              alt="EncryptEdge Logo" 
              width={40} 
              height={40} 
              className="rounded-lg border border-red-800/50 group-hover:border-red-700 transition-colors"
            />
            <div>
              <span className="text-red-700 font-bold text-xl font-mono">&lt;EncryptEdge/&gt;</span>
              <div className="text-xs text-gray-500 font-mono">// LPU Cyber Community</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-400 hover:text-red-700 transition-colors duration-200 font-medium font-mono relative group"
              >
                <span className="group-hover:text-red-700">&gt;</span> {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-700 group-hover:w-full transition-all duration-200"></span>
              </Link>
            ))}
          </div>

          {/* Social Media Links & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="https://linkedin.com/company/encryptedge" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-red-700 transition-colors duration-200"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a 
              href="https://instagram.com/encryptedge" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-red-700 transition-colors duration-200"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.80-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a 
              href="https://tinyurl.com/Encryptedge" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-2 bg-red-800 hover:bg-red-900 text-white rounded-lg transition-all duration-200 font-medium font-mono border border-red-700 shadow-lg shadow-red-900/30 hover:shadow-red-900/50"
            >
              Join Community
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-red-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-red-900/50">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-2 text-gray-400 hover:text-red-700 transition-colors duration-200 font-mono"
                onClick={() => setIsOpen(false)}
              >
                &gt; {item.name}
              </Link>
            ))}
            <div className="mt-4">
              <a 
                href="https://tinyurl.com/Encryptedge" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block w-full px-4 py-2 bg-red-800 hover:bg-red-900 text-white rounded-lg transition-colors duration-200 text-center font-mono border border-red-700"
              >
                [+] Join Community
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
