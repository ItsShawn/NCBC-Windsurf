'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    botField: '' // honeypot for spam
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Honeypot: if this has any value, it's a bot
    if (formData.botField !== '') {
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch(
        'https://formsubmit.co/ajax/newcanaan1976@gmail.com',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            message: formData.message,
            _subject: 'New Contact Message from mynewcanaan.org',
            _template: 'box',
            _honey: formData.botField, // FormSubmit honeypot field
            _captcha: 'false',
          }),
        }
      );

      if (!response.ok) {
        throw new Error('FormSubmit request failed');
      }

      setStatus('success');
      setFormData({ name: '', email: '', message: '', botField: '' });

      setTimeout(() => setStatus('idle'), 4000);
    } catch (err) {
      console.error(err);
      setStatus('error');
      setErrorMessage('Failed to send message. Please try again later.');
    }
  };

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-lg shadow-lg overflow-hidden"
        >
          <div className="grid md:grid-cols-2 gap-8 p-8">
            {/* Contact Form */}
            <div>
              <h2 className="font-playfair text-3xl text-primary mb-6">
                Contact Us
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Hidden honeypot field for bots */}
                <input
                  type="text"
                  name="botField"
                  value={formData.botField}
                  onChange={(e) =>
                    setFormData({ ...formData, botField: e.target.value })
                  }
                  className="hidden"
                  autoComplete="off"
                  tabIndex={-1}
                />

                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>

                {status === 'error' && (
                  <div className="text-red-600 text-sm">{errorMessage}</div>
                )}
                {status === 'success' && (
                  <div className="text-green-600 text-sm">
                    Message sent successfully!
                  </div>
                )}

                <div>
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className={`w-full ${
                      status === 'loading'
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-primary hover:bg-primary-dark'
                    } text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2`}
                  >
                    {status === 'loading' ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
              </form>
            </div>

            {/* Contact Information (unchanged) */}
            <div className="space-y-8">
              <div>
                <h3 className="font-playfair text-xl text-primary mb-4">
                  Service Times
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>Sunday School: 9:45 AM</li>
                  <li>Sunday Morning Service: 10:45 AM</li>
                  <li>Sunday Evening Service: 5:00 PM</li>
                  <br />
                  <li>Wednesday Fellowship Dinner: 6:00 PM</li>
                  <li>Wednesday Kid&apos;s Program: 6:30 PM</li>
                  <li>Wednesday Adult Bible Study: 6:45 PM</li>
                </ul>
              </div>

              <div>
                <h3 className="font-playfair text-xl text-primary mb-4">
                  Location
                </h3>
                <p className="text-gray-600">
                  922 Hi Hope Road
                  <br />
                  Lawrenceville, GA 30043
                </p>
              </div>

              <div>
                <h3 className="font-playfair text-xl text-primary mb-4">
                  Contact
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>Pastor Michael Soop</li>
                  <li>Phone: (770) 962-2335</li>
                  <li>Email: pastor@mynewcanaan.org</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
