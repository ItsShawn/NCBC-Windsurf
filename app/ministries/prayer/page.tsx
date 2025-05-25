'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import PrayerRequestForm from '@/components/PrayerRequestForm';

export default function CommunityPrayer() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="bg-[#1a365d] py-16">
        <div className="max-w-4xl mx-auto text-center text-white px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-playfair text-4xl md:text-5xl mb-4"
          >
            Community Prayer Gathering
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-opensans text-xl max-w-2xl mx-auto"
          >
            Coming together in prayer, strengthening our community in faith
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg">
            <h2 className="font-playfair text-3xl text-primary mb-6">About Our Prayer Gathering</h2>
            <p>
              Every Wednesday at noon, our church family comes together for a powerful time of community prayer. This gathering is more than just a prayer meeting—it's a time of spiritual growth, mutual support, and experiencing God's presence together.
            </p>

            <div className="my-12">
              <Image
                src="/images/prayer-2.jpg"
                alt="Community members praying together"
                width={800}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>

            <h3 className="font-playfair text-2xl text-primary mt-8 mb-4">What to Expect</h3>
            <ul>
              <li>Warm, welcoming environment in our church parking lot</li>
              <li>Structured and open prayer times</li>
              <li>Scripture-based prayer focus</li>
              <li>Opportunity to share prayer requests</li>
              <li>Time for testimonies and praise reports</li>
            </ul>

            <h3 className="font-playfair text-2xl text-primary mt-8 mb-4">Prayer Focus Areas</h3>
            <p>
              Our prayer gatherings cover various aspects of community life:
            </p>
            <ul>
              <li>Personal and family needs</li>
              <li>Church ministry and growth</li>
              <li>Community concerns and outreach</li>
              <li>National and global issues</li>
              <li>Special prayer requests</li>
            </ul>

            <h3 className="font-playfair text-2xl text-primary mt-8 mb-4">Why Community Prayer?</h3>
            <p>
              Corporate prayer has been a cornerstone of Christian faith since the early church. When we pray together, we:
            </p>
            <ul>
              <li>Strengthen our faith through shared experiences</li>
              <li>Build deeper relationships within our church family</li>
              <li>Support one another through life's challenges</li>
              <li>Celebrate God's faithfulness together</li>
            </ul>

            {/* Prayer Request Form Section */}
            <div className="mt-12">
              <h3 className="font-playfair text-2xl text-primary mb-6">Submit a Prayer Request</h3>
              <p className="mb-6">
                We consider it a privilege to pray for you. Submit your prayer request below, and our prayer team will lift your needs to the Lord. 
                You can choose to keep your request confidential, and it will only be shared with our pastoral staff.
              </p>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <PrayerRequestForm />
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mt-8">
              <h4 className="font-playfair text-xl text-primary mb-4">Join Us in Prayer</h4>
              <p>
                <strong>When:</strong> Every Wednesday at 12:00 PM (Noon)<br />
                <strong>Where:</strong> Church Parking Lot<br />
                <strong>Duration:</strong> Approximately 1 hour<br />
                <br />
                For more information:<br />
                Phone: (770) 962-2335<br />
                Email: pastor@mynewcanaan.org
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
