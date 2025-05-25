'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ChildrensMinistry() {
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
            Children's Ministry
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-opensans text-xl max-w-2xl mx-auto"
          >
            Building strong foundations of faith for the next generation
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg">
            <h2 className="font-playfair text-3xl text-primary mb-6">Welcome to Our Children's Ministry</h2>
            <p>
              At New Canaan Baptist Church, we believe that children are not just the future of the church—they are an important part of our church today. Our Children's Ministry provides a safe, nurturing environment where children can learn about God's love and develop a strong foundation in their faith. <strong>Nursery is provided for all services for children 4 and under.</strong>
            </p>

            <div className="my-8">
              <Image
                src="/images/kids-2.jpg"
                alt="Children engaged in activities"
                width={800}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>

            <h3 className="font-playfair text-2xl text-primary mt-8 mb-4">What We Offer</h3>
            <ul>
              <li>Sunday School (9:45 AM): Age-appropriate Bible lessons, activities, and music</li>
              <li>Wednesday Kid’s Program (6:30 PM): Bible lessons, activities and games</li>
              <li>Youth & Young Adult Revival (end of July): Annual Youth Revival</li>
              <li>Vacation Bible School (Summer): A week of fun, friends, and faith</li>
              <li>Special Events: Holiday celebrations and family activities</li>
            </ul>

            <h3 className="font-playfair text-2xl text-primary mt-8 mb-4">Our Approach</h3>
            <p>
              We use engaging, age-appropriate methods to teach Biblical truths. Through stories, songs, crafts, and activities, children learn about:
            </p>
            <ul>
              <li>God's unconditional love</li>
              <li>The life and teachings of Jesus</li>
              <li>Biblical values and character development</li>
              <li>The importance of prayer and worship</li>
            </ul>

            <h3 className="font-playfair text-2xl text-primary mt-8 mb-4">Get Involved</h3>
            <p>
              We welcome parents to get involved in our Children's Ministry. Whether you'd like to volunteer, have questions, or want to learn more about our programs, please contact us.
            </p>

            <div className="bg-gray-50 p-6 rounded-lg mt-8">
              <h4 className="font-playfair text-xl text-primary mb-4">Contact Children's Ministry</h4>
              <p>
                For more information about our Children's Ministry, please contact:<br />
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
