import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { StarIcon, PhoneIcon, EnvelopeIcon, ChatBubbleLeftRightIcon, XMarkIcon } from '@heroicons/react/24/outline';

// Helper function to generate random star properties
const generateStars = () => {
  return [...Array(20)].map(() => ({
    delay: Math.random() * 2,
    left: Math.random() * 100,
    top: Math.random() * 100,
    animationDelay: Math.random() * 5,
  }));
};

function Contact() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  // Placeholder links—replace with your actual URLs
  const contactLinks = {
    whatsapp: 'http://wa.me/13473148538', // Replace with your WhatsApp number link
    facebook: 'https://www.facebook.com/share/1BhtZJT6tG/?mibextid=wwXIfr', // Replace with your Facebook page
    gmail: 'mailto:Constellationpaymentservicellc@gmail.com', // Gmail compose link
  };

  const stars = useMemo(() => generateStars(), []);

  return (
    <section id='contact' className="relative  py-24 overflow-hidden">
      {/* 3D Constellation Background for Luxury Depth */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="constellation">
          {stars.map((star, i) => (
            <motion.div
              key={i}
              className="star"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: star.delay, duration: 1 }}
              style={{
                left: `${star.left}%`,
                top: `${star.top}%`,
                animationDelay: `${star.animationDelay}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative max-w-5xl mx-auto px-6 text-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <ChatBubbleLeftRightIcon className="w-10 h-10 text-indigo-600" />
            <h2 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-indigo-600 via-purple-600 to-sky-600 bg-clip-text text-transparent">
              Contact Us
            </h2>
          </div>
          <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed">
            Questions about services or hiring? Reach out — we’re here to help. Connect instantly via your preferred platform.
          </p>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-white">
            <div className="flex items-center gap-3">
              <EnvelopeIcon className="w-6 h-6 text-indigo-600" />
              <span className="text-lg">mailto:Constellationpaymentservicellc@gmail.com</span>
            </div>
            <div className="flex items-center gap-3">
              <PhoneIcon className="w-6 h-6 text-indigo-600" />
              <span className="text-lg">+1 (347)-314-8538 </span>
            </div>
          </div>
        </motion.div>

        {/* Reach Out Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          whileHover={{
            scale: 1.05,
            rotateY: 5,
            boxShadow: '0 15px 40px rgba(99, 102, 241, 0.4)',
          }}
          whileTap={{ scale: 0.95 }}
          onClick={toggleModal}
          className="px-10 py-5 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold text-xl shadow-lg hover:shadow-2xl transition-all duration-300"
          aria-label="Open contact options"
        >
          Reach Out
        </motion.button>
      </div>

      {/* Modal/Popup */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-6"
            onClick={toggleModal} // Close on backdrop click
          >
            <motion.div
              initial={{ scale: 0.8, rotateY: 90, opacity: 0 }}
              animate={{ scale: 1, rotateY: 0, opacity: 1 }}
              exit={{ scale: 0.8, rotateY: 90, opacity: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-200/50 p-8 max-w-md w-full relative"
              onClick={(e) => e.stopPropagation()} // Prevent closing on modal click
            >
              <button
                onClick={toggleModal}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
                aria-label="Close modal"
              >
                <XMarkIcon className="w-6 h-6" />
              </button>
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Choose Your Contact Method</h3>
              <div className="space-y-4">
                <motion.a
                  href={contactLinks.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="flex items-center gap-4 p-4 bg-green-50 rounded-xl hover:bg-green-100 transition-colors group"
                  title="Chat on WhatsApp"
                >
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <ChatBubbleLeftRightIcon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-lg font-semibold text-gray-800">WhatsApp</span>
                </motion.a>
                <motion.a
                  href={contactLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  className="flex items-center gap-4 p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors group"
                  title="Visit on Facebook"
                >
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <StarIcon className="w-6 h-6 text-white" /> {/* Placeholder; use Facebook icon if available */}
                  </div>
                  <span className="text-lg font-semibold text-gray-800">Facebook</span>
                </motion.a>
                <motion.a
                  href={contactLinks.gmail}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="flex items-center gap-4 p-4 bg-red-50 rounded-xl hover:bg-red-100 transition-colors group"
                  title="Send via Gmail"
                >
                  <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <EnvelopeIcon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-lg font-semibold text-gray-800">Gmail</span>
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      
    </section>
  );
}

export default Contact;
