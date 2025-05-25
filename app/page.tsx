'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import ContactSection from '@/components/ContactSection';
import Link from 'next/link';

const rotatingWords = ["Loves", "Prays", "Forgives", "Welcomes", "Cares"];

export default function Home() {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <Image
            src="/images/choir.jpg"
            alt="New Canaan Baptist Church Choir"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-30" />
        </div>
        <div className="relative z-10 h-full flex items-center justify-center text-white">
          <div className="text-center">
            <h1 className="font-playfair text-5xl md:text-7xl mb-4 drop-shadow-lg">
              The Church That{' '}
              <motion.span
                key={rotatingWords[wordIndex]}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="text-secondary inline-block"
              >
                {rotatingWords[wordIndex]}
              </motion.span>
            </h1>
            <p className="font-opensans text-xl md:text-2xl mt-4 drop-shadow-lg">
              Where faith meets community in Lawrenceville, GA
            </p>
          </div>
        </div>
      </section>

      {/* Meet the Pastor Section */}
      <section className="relative py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="relative bg-white rounded-lg shadow-2xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="relative h-[500px] md:h-auto">
                <Image
                  src="/images/pastor.jpg"
                  alt="Pastor of New Canaan Baptist Church"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
              <div className="p-12 flex flex-col justify-center">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="font-playfair text-4xl text-primary mb-2">
                    Meet Our Pastor
                  </h2>
                  <h3 className="font-opensans text-2xl text-primary font-semibold mb-4">
                    Michael Soop
                  </h3>
                  <p className="font-opensans text-gray-600 text-lg mb-8 leading-relaxed">
                    Leading our congregation with wisdom, compassion, and a deep commitment
                    to Christ's teachings. Our pastor brings years of experience in
                    ministry and a heart for serving families in our community.
                  </p>
                  <div className="mt-8 text-center">
                    <Link 
                      href="/about" 
                      className="inline-block bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors"
                    >
                      Learn more about our leadership
                    </Link>
                  </div>
                </motion.div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Ministries Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-playfair text-4xl text-primary text-center mb-12">
            Our Ministries
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Children's Ministry",
                image: "kids-1.jpg",
                description: "Building strong foundations of faith every Sunday morning through engaging Bible lessons and activities"
              },
              {
                title: "Community Prayer Gathering",
                image: "kids-2.jpg",
                description: "Join us every Wednesday at noon as we come together as a community to pray, share, and support one another"
              },
              {
                title: "SimpleSteps",
                image: "/simplestepslogo.png",
                description: "A ministry focused on helping individuals break free from addiction and take simple steps toward a deeper relationship with Christ"
              }
            ].map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-48">
                  <Image
                    src={`/images/${program.image}`}
                    alt={program.title}
                    fill
                    className="object-contain p-4 bg-white"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-playfair text-xl text-primary mb-2">
                    {program.title}
                  </h3>
                  <p className="font-opensans text-gray-600">
                    {program.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />
    </main>
  );
}
