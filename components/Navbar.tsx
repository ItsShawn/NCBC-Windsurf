'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
  {
    name: 'Home',
    href: '/',
    dropdown: false
  },
  {
    name: 'About',
    href: '#',
    dropdown: true,
    items: [
      { name: 'Who We Are', href: '/about' },
      { name: 'What to Wear', href: '/about/what-to-wear' },
      { name: 'Our Beliefs', href: '/about/beliefs' }
    ]
  },
  {
    name: 'Ministries',
    href: '#',
    dropdown: true,
    items: [
      { name: "Children's Ministry", href: '/ministries/children' },
      { name: 'Community Prayer Gathering', href: '/ministries/prayer' },
      { 
        name: 'SimpleSteps', 
        href: 'https://gotanaddiction.com',
        external: true 
      }
    ]
  },
  {
    name: 'Contact',
    href: '/contact',
    dropdown: false
  }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="font-playfair text-2xl text-primary">
              NCBC
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="nav-link"
                >
                  {item.name}
                </Link>

                {item.dropdown && activeDropdown === item.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-xl py-2"
                  >
                    {item.items?.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        target={subItem.external ? "_blank" : undefined}
                        rel={subItem.external ? "noopener noreferrer" : undefined}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </div>
            ))}
            
            <Link
              href="https://www.paypal.com/donate?token=We8FRvSo7MZrXbs77XHXQBCx6yG1QpYVmnwnzUBHNgSgYeb58gZ2N4u0KWFibIOHLalnlkIhrW935pxW"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Give Online
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              {isOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <div key={item.name}>
                  <button
                    onClick={() => {
                      if (item.dropdown) {
                        setActiveDropdown(activeDropdown === item.name ? null : item.name);
                      }
                    }}
                    className="w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </button>
                  
                  {item.dropdown && activeDropdown === item.name && (
                    <div className="pl-4">
                      {item.items?.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          target={subItem.external ? "_blank" : undefined}
                          rel={subItem.external ? "noopener noreferrer" : undefined}
                          className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link
                href="https://www.paypal.com/donate?token=We8FRvSo7MZrXbs77XHXQBCx6yG1QpYVmnwnzUBHNgSgYeb58gZ2N4u0KWFibIOHLalnlkIhrW935pxW"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-3 py-2 text-base font-medium bg-secondary text-white rounded-md"
              >
                Give Online
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
