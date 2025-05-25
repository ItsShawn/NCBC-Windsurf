'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Church Info */}
          <div className="space-y-4">
            <h3 className="font-playfair text-2xl">New Canaan Baptist Church</h3>
            <p className="font-opensans">
              Where faith meets community in Lawrenceville, GA
            </p>
            <div className="flex space-x-4">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/mynewcanaan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-secondary transition-colors"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.77,7.46H14.5v-1.9c0-.9.6-1.1,1-1.1h3V.5h-4.33C10.24.5,9.5,3.44,9.5,5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4Z"/>
                </svg>
              </a>
              {/* YouTube */}
              <a
                href="https://www.youtube.com/@mynewcanaan/streams"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-secondary transition-colors"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.5,6.2A3,3,0,0,0,21.4,4c-1.9-.5-9.4-.5-9.4-.5s-7.5,0-9.4.5A3,3,0,0,0,.5,6.2,31.8,31.8,0,0,0,0,12a31.8,31.8,0,0,0,.5,5.8A3,3,0,0,0,2.6,20c1.9.5,9.4.5,9.4.5s7.5,0,9.4-.5a3,3,0,0,0,2.1-2.2A31.8,31.8,0,0,0,24,12,31.8,31.8,0,0,0,23.5,6.2ZM9.6,15.6V8.4l6.2,3.6Z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-playfair text-xl mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about/who-we-are" className="hover:text-secondary transition-colors">
                  Who We Are
                </Link>
              </li>
              <li>
                <Link href="/abou/beliefs" className="hover:text-secondary transition-colors">
                  Our Beliefs
                </Link>
              </li>
              <li>
                <Link href="https://youtube.com/@mynewcanaan/streams" className="hover:text-secondary transition-colors">
                  Sermons
                </Link>
              </li>
              <li>
                <Link 
                  href="https://www.paypal.com/donate?hosted_button_id=DZHZCJQDXFM52"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-secondary transition-colors"
                >
                  Give Online
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Times */}
          <div>
            <h4 className="font-playfair text-xl mb-4">Service Times</h4>
            <ul className="space-y-2">
              <li>Sunday School: 9:45 AM</li>
              <li>Sunday Morning Service: 10:45 AM</li>
              <li>Choir Practice: 4:30 PM</li>
              <li>Sunday Evening Service: 5:00 PM</li>
              <br/>
              <li>Wednesday Fellowship Dinner: 6:00 PM</li>
              <li>Wednesday Kid's Program: 6:30 PM</li>
              <li>Wednesday Adult Bible Study: 7:00 PM</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-playfair text-xl mb-4">Contact Us</h4>
            <ul className="space-y-2">
              <li>922 Hi Hope Road</li>
              <li>Lawrenceville, GA 30043</li>
              <li>Phone: (770) 962-2335</li>
              <li>Email: pastor@mynewcanaan.org</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} New Canaan Baptist Church. All rights reserved. Made by{' '}
            <a href="https://shawnhenly.com" className="hover:text-secondary transition-colors">
              Shawn Henly
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
