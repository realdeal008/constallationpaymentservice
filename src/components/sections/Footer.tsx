"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  StarIcon,
  ShieldCheckIcon,
  DocumentTextIcon,
  ArrowUpIcon,
} from "@heroicons/react/24/outline";

function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const [stars] = useState(() => [...Array(12)].map(() => ({
    delay: Math.random() * 1.5,
    left: Math.random() * 100,
    top: Math.random() * 100,
    animationDelay: Math.random() * 4,
  })));

  return (
    <footer className="relative py-12 mt-16 overflow-hidden">
      {/* 3D Constellation Background */}
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

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand / Logo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-3"
          >
            <motion.div
              whileHover={{ rotateY: 10, scale: 1.05 }}
              className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold shadow-lg"
            >
              <StarIcon className="w-5 h-5" />
            </motion.div>
            <div>
              <div className="text-lg font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Constellation Payment
              </div>
              <div className="text-sm text-white">Service LLC</div>
            </div>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col md:flex-row gap-6 md:gap-8 justify-center"
          >
            <motion.div whileHover={{ scale: 1.1, rotateY: 5 }}>
              <Link
                href="/privacy"
                className="flex items-center gap-2 text-white hover:text-indigo-600 transition-colors duration-300 group"
              >
                <ShieldCheckIcon className="w-5 h-5 group-hover:text-indigo-600" />
                Privacy
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.1, rotateY: -5 }}>
              <Link
                href="/terms"
                className="flex items-center gap-2 text-white hover:text-indigo-600 transition-colors duration-300 group"
              >
                <DocumentTextIcon className="w-5 h-5 group-hover:text-indigo-600" />
                Terms
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Side — Copyright + Back To Top */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col items-end gap-4"
          >
            <div className="text-sm text-white text-center md:text-right">
              © {new Date().getFullYear()} Constellation Payment Service LLC — All rights reserved.
            </div>

            <motion.button
              whileHover={{
                scale: 1.1,
                rotateY: 10,
                boxShadow: "0 10px 25px rgba(99, 102, 241, 0.3)",
              }}
              whileTap={{ scale: 0.9 }}
              onClick={scrollToTop}
              className="p-3 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <ArrowUpIcon className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </div>


    </footer>
  );
}

export default Footer;
