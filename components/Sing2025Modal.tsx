'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

interface Sing2025ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sing2025Modal: React.FC<Sing2025ModalProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            transition={{ duration: 0.3 }}
            className="relative bg-white rounded-lg shadow-2xl overflow-hidden max-w-3xl w-full mx-4"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
          >
            <button
              onClick={onClose}
              className="absolute top-2 right-2 z-10 text-white bg-black bg-opacity-50 rounded-full p-1 hover:bg-opacity-75 transition-opacity"
              aria-label="Close modal"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <Link href="https://gettysburg.singglobal.com/" target="_blank" rel="noopener noreferrer">
              <div className="relative">
                <Image
                  src="/images/sing2025.png"
                  alt="Sing! Getty Music Worship Conference 2025"
                  width={1200}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Sing2025Modal;
