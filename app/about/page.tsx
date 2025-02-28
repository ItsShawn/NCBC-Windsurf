'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function WhoWeAre() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px]">
        <div className="absolute inset-0">
          <Image
            src="/images/church-front.jpg"
            alt="New Canaan Baptist Church"
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
              Who We Are
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-opensans text-xl max-w-2xl mx-auto"
            >
              A community of believers serving Christ in Lawrenceville
            </motion.p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg">
            <h2 className="font-playfair text-3xl text-primary mb-6">Welcome to New Canaan Baptist Church</h2>
            <p>
              At New Canaan Baptist Church, we are a vibrant community of believers committed to sharing God's love 
              and spreading the Gospel in Lawrenceville and beyond. Our church family welcomes people from all walks 
              of life to join us in worship, fellowship, and service.
            </p>

            <h3 className="font-playfair text-2xl text-primary mt-8 mb-4">Our Leadership</h3>
            
            <div className="not-prose grid grid-cols-1 md:grid-cols-3 gap-8 my-8">
              {/* Pastor */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src="/images/pastor.jpg"
                    alt="Pastor Michael Soop"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h4 className="font-playfair text-xl text-primary mb-2">Pastor Michael Soop</h4>
                  <p className="text-gray-600">Senior Pastor</p>
                </div>
              </div>

              {/* TJ Singleton */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src="/images/tj-singleton.jpg"
                    alt="TJ Singleton"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h4 className="font-playfair text-xl text-primary mb-2">TJ Singleton</h4>
                  <p className="text-gray-600">Leadership Council</p>
                </div>
              </div>

              {/* Larry Elrod */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src="/images/larry-elrod.png"
                    alt="Larry Elrod"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h4 className="font-playfair text-xl text-primary mb-2">Larry Elrod</h4>
                  <p className="text-gray-600">Leadership Council</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mt-8">
              <h4 className="font-playfair text-xl text-primary mb-4">Sunday School</h4>
              <p>
                Under the leadership of our Sunday School Superintendent, Alan Lowe, we offer comprehensive Bible 
                study programs for all ages, helping our congregation grow deeper in their understanding of God's Word.
              </p>
            </div>

            <h3 className="font-playfair text-2xl text-primary mt-8 mb-4">Our Mission</h3>
            <p>
              We exist to glorify God by making disciples who love God, love people, and serve both. Through 
              worship, fellowship, discipleship, ministry, and evangelism, we seek to build a community that 
              reflects Christ's love and transforms our world.
            </p>

            <div className="bg-primary text-white p-6 rounded-lg mt-8">
              <h4 className="font-playfair text-xl mb-4">Contact Us</h4>
              <p className="mb-4">We'd love to hear from you! Reach out to us:</p>
              <ul className="space-y-2">
                <li>📞 Phone: (770) 962-2335</li>
                <li>📧 Email: pastor@mynewcanaan.org</li>
                <li>📍 Address: 922 Hi Hope Rd, Lawrenceville, GA 30043</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
