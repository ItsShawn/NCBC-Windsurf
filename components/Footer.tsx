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
              <a href="#" className="text-white hover:text-secondary transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.77,7.46H14.5v-1.9c0-.9.6-1.1,1-1.1h3V.5h-4.33C10.24.5,9.5,3.44,9.5,5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4Z"/>
                </svg>
              </a>
              <a href="#" className="text-white hover:text-secondary transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,2.2c3.2,0,3.6,0,4.9.1,3.3.1,4.8,1.7,4.9,4.9.1,1.3.1,1.6.1,4.8,0,3.2,0,3.6-.1,4.8-.1,3.2-1.7,4.8-4.9,4.9-1.3.1-1.6.1-4.9.1-3.2,0-3.6,0-4.8-.1-3.3-.1-4.8-1.7-4.9-4.9-.1-1.3-.1-1.6-.1-4.8,0-3.2,0-3.6.1-4.8C2.4,4,4,2.4,7.2,2.3,8.5,2.2,8.8,2.2,12,2.2ZM12,0C8.7,0,8.3,0,7,0,2.7.1.1,2.7,0,7c-.1,1.3-.1,1.7-.1,5S0,15.7.1,17c.1,4.3,2.7,6.9,7,7,1.3.1,1.7.1,5,.1s3.7,0,5-.1c4.3-.1,6.9-2.7,7-7,.1-1.3.1-1.7.1-5s0-3.7-.1-5c-.1-4.3-2.7-6.9-7-7C15.7,0,15.3,0,12,0Z"/>
                  <path d="M12,5.8A6.2,6.2,0,1,0,18.2,12,6.2,6.2,0,0,0,12,5.8Zm0,10.2A4,4,0,1,1,16,12,4,4,0,0,1,12,16Z"/>
                  <circle cx="18.4" cy="5.6" r="1.4"/>
                </svg>
              </a>
              <a href="#" className="text-white hover:text-secondary transition-colors">
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
                <Link href="https://youtube.com/@mynewcanaan/videos" className="hover:text-secondary transition-colors">
                  Sermons
                </Link>
              </li>
              <li>
                <Link 
                  href="https://www.paypal.com/donate?token=We8FRvSo7MZrXbs77XHXQBCx6yG1QpYVmnwnzUBHNgSgYeb58gZ2N4u0KWFibIOHLalnlkIhrW935pxW"
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
              <li>Sunday School: 9:30 AM</li>
              <li>Sunday Worship: 10:45 AM</li>
              <li>Wednesday Bible Study: 7:00 PM</li>
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
