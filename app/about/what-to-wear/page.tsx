'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function WhatToWear() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px]">
        <div className="absolute inset-0">
          <Image
            src="/images/welcome.jpg"
            alt="Welcome to New Canaan Baptist Church"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>
        <div className="relative h-full flex items-center justify-center text-white">
          <div className="text-center px-4">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-playfair text-4xl md:text-5xl mb-4"
            >
              What to Wear
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-opensans text-xl max-w-2xl mx-auto"
            >
              Come as you are, it's your heart that matters
            </motion.p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg">
            <h2 className="font-playfair text-3xl text-primary mb-6">Dress Code at New Canaan</h2>
            <p>
              At New Canaan Baptist Church, we believe that worship is about the heart, not the wardrobe. 
              We welcome you to join us in any modest, comfortable attire that allows you to focus on 
              worshiping the Lord.
            </p>

            <div className="my-8 p-6 bg-gray-50 rounded-lg">
              <h3 className="font-playfair text-2xl text-primary mb-4">Our Philosophy</h3>
              <p>
                "...for the LORD seeth not as man seeth; for man looketh on the outward appearance, but the LORD looketh on the heart." - 1 Samuel 16:7
              </p>
            </div>

            <h3 className="font-playfair text-2xl text-primary mt-8 mb-4">What You'll See</h3>
            <p>
              Our congregation comes dressed in a variety of styles:
            </p>
            <ul>
              <li>Some prefer casual attire like jeans and comfortable shirts</li>
              <li>Others may choose business casual</li>
              <li>Some enjoy dressing up in suits or dresses</li>
            </ul>

            <p className="mt-6">
              The important thing is that you feel comfortable and can focus on what truly matters - 
              worshiping God and growing in your faith. We care more about your presence than your 
              presentation.
            </p>

            <div className="bg-primary text-white p-6 rounded-lg mt-8">
              <h4 className="font-playfair text-xl mb-4">Our Welcome to You</h4>
              <p>
                Whether you come in a suit or jeans, dress or shorts, you'll find a welcoming community 
                that's eager to worship alongside you. We look forward to having you join us!
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
