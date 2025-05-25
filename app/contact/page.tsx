'use client';

import { motion } from 'framer-motion';
import ContactSection from '@/components/ContactSection';

export default function Contact() {
  return (
    <main className="pt-20">
      {/* Page Header */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="font-playfair text-4xl md:text-5xl mb-4">Contact Us</h1>
            <p className="font-opensans text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
              We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />

      {/* Directions Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-playfair text-3xl text-primary mb-6 text-center">Getting to New Canaan</h2>
          <p className="font-opensans text-gray-700 text-lg leading-relaxed">
            Our church is located at <strong>922 Hi Hope Rd, Lawrenceville, GA 30043</strong>, just a few minutes off Highway 316 and convenient to I-85.
          </p>

          <div className="mt-6 space-y-4 text-gray-700 text-base">
            <p><strong>If you're coming from I-85:</strong> Take Exit 106 for GA-316 E toward Lawrenceville/Athens. Continue for about 5.5 miles, then take the GA-120 exit toward Lawrenceville/Duluth. Turn right onto GA-120 E/W Pike St. After about 1.5 miles, turn left onto Hi Hope Rd. The church will be on your right.</p>

            <p><strong>If you're coming from Sugarloaf Parkway:</strong> Head east on Sugarloaf Pkwy and turn right onto GA-120 E. After passing downtown Lawrenceville, turn left onto Hi Hope Rd. The church will be a short drive down on the right-hand side.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
