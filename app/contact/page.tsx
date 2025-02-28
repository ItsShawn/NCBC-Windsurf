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

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-playfair text-3xl text-primary mb-8 text-center">Find Us</h2>
          <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.2856067437164!2d-83.9892!3d33.9892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f5bf55555555%3A0x555555555555555!2s922%20Hi%20Hope%20Rd%2C%20Lawrenceville%2C%20GA%2030043!5e0!3m2!1sen!2sus!4v1551234567890!5m2!1sen!2sus"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
