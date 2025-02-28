'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function OurBeliefs() {
  const beliefs = [
    {
      title: "God",
      content: "We believe in one God who exists in three persons: Father, Son and Holy Spirit, equal in essence while distinct in personality and function.",
      reference: "Ex 20:2,3; Mt 28:19; I Cor. 8:6"
    },
    {
      title: "Jesus' Birth",
      content: "We believe Jesus Christ is the eternal Son of God that He was conceived by the Holy Ghost and born of a virgin named Mary and is wholly God and wholly man.",
      reference: "John 1:1-14; Luke 1:35; Gal 4:4"
    },
    {
      title: "Holy Spirit",
      content: "We believe that the Holy Spirit is the agent of the new birth through conviction and regeneration. That the Holy Spirit seals, indwells, and baptizes every believer into the body of Christ at the moment of salvation. He fills, empowers, and distributes gifts to believers.",
      reference: "John 3:5; Eph. 1:13; Rom. 8:9; I Cor. 12:13"
    },
    {
      title: "Bible",
      content: "We believe that the sixty-six books of the Old and New Testament were given by inspiration of God, not by the will of man but as holy men of God spake as they were moved by the Holy Ghost and as such they are the rule and reason in faith and practice.",
      reference: "II Tim 3:16,17; II Peter 1:19-21; Psalms 119:105"
    },
    {
      title: "Sin",
      content: "We believe Adam was created in the image of God that as a result of his sin the penalty of physical and spiritual death passed upon all mankind. This imputed sin is evidenced by all men being sinners by nature and practice.",
      reference: "Rom. 5:12; Rom. 3:23"
    },
    {
      title: "Jesus' Death",
      content: "We believe that Jesus voluntarily gave His life on the cross of Calvary as a substitutionary sacrifice for all mankind. He not only died to pay the penalty for man's sin but He shed His blood to provide the price of redemption, to redeem the race from the bondage of sin.",
      reference: "Is. 53:6; II Cor. 5:21; I Peter 1:18"
    },
    {
      title: "Jesus' Resurrection",
      content: "We believe that after Jesus was crucified, He was buried and on the third day He was resurrected and seen of men for forty days; after which He ascended and is seated at the right hand of the Father and intercedes on our behalf as our Great High Priest. We wait for His promised return at which time He will fulfill the Old and New Testament scriptures concerning the end of this age.",
      reference: "Mt 28:1-7; Acts 1:8-11; Heb 4:4-16; John 14"
    },
    {
      title: "Salvation",
      content: "We believe salvation is by grace through faith and follows conviction and repentance without the merit of any works of the flesh.",
      reference: "Eph. 2:8,9; Gal 2:16"
    },
    {
      title: "The Church",
      content: "We believe that the local church is the agency through which God has chosen to fulfill the Great Commission. We believe a scripturally patterned church consists of a constituted body of baptized believers in Christ Jesus having been converted prior to immersion. The pattern of scripture dictates the necessity of the office of Pastor and Deacon. All other offices fall under the autonomy of each congregation.",
      reference: "Acts 2:41-47"
    },
    {
      title: "Ordinances",
      content: "We believe the ordinances of the Lord's Supper and believer's baptism should be administered to born again converts under the authority of a local church. As a testimony of their new birth and a declaration of Christ's death and promised return.",
      reference: "Mt 28:18-20; Acts 8:26-39; I Cor. 11:23-28"
    },
    {
      title: "Eternal Security",
      content: "We believe in the eternal security of all born again believers in Christ Jesus.",
      reference: "John 6:39,40; John 10:28,29; Rom. 8:35-39; I Peter 1:5"
    },
    {
      title: "Resurrection",
      content: "We believe in the bodily resurrection of all the race. The just to everlasting blessedness and the unjust to everlasting punishment.",
      reference: "John 5:28,29; Rev 21:1-8"
    }
  ];

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px]">
        <div className="absolute inset-0">
          <Image
            src="/images/bible.jpg"
            alt="Our Beliefs at New Canaan Baptist Church"
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
              Our Beliefs
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-opensans text-xl max-w-2xl mx-auto"
            >
              Standing firm on God's Word
            </motion.p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg">
            <p className="lead">
              At New Canaan Baptist Church, we hold to the fundamental truths of the Christian faith 
              as revealed in Scripture. Below are the key doctrines that shape our beliefs and practice.
            </p>

            <div className="not-prose space-y-8 mt-12">
              {beliefs.map((belief, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
                >
                  <h3 className="font-playfair text-2xl text-primary mb-4">{belief.title}</h3>
                  <p className="text-gray-700 mb-4">{belief.content}</p>
                  <p className="text-sm text-gray-500 italic">{belief.reference}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
