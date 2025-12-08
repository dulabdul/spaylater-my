'use client';

import { useState } from 'react';
import Link from 'next/link';
import { NAVIGATION_LINKS } from '@/constants';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className='sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>
          {/* Logo Sisi Kiri */}
          <div className='flex-shrink-0'>
            <Link
              href='/'
              className='text-2xl font-bold text-shopee'>
              Cashout<span className='text-gray-800'>PayLater</span>
            </Link>
          </div>

          {/* Desktop Menu Sisi Kanan */}
          <nav className='hidden md:flex space-x-8'>
            {NAVIGATION_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className='text-gray-600 hover:text-shopee transition-colors font-medium'>
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className='md:hidden'>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className='text-gray-600 hover:text-shopee focus:outline-none'>
              <svg
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'>
                {isOpen ? (
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M6 18L18 6M6 6l12 12'
                  />
                ) : (
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M4 6h16M4 12h16M4 18h16'
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className='md:hidden bg-white border-t'>
          <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
            {NAVIGATION_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className='block px-3 py-2 text-base font-medium text-gray-700 hover:text-shopee hover:bg-gray-50'>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
