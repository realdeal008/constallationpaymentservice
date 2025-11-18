"use client";

import React, { useMemo } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  StarIcon,
  CurrencyDollarIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";

// Simple seeded random function for deterministic pseudo-random numbers
const seededRandom = (seed: number) => {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
};

const Hero = () => {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Generate stars deterministically to avoid SSR issues and impure functions
  const stars = useMemo(() =>
    Array.from({ length: 20 }, (_, i) => ({
      left: `${(seededRandom(i * 2) * 100).toFixed(2)}%`,
      top: `${(seededRandom(i * 2 + 1) * 100).toFixed(2)}%`,
      delay: seededRandom(i * 2 + 2) * 5,
    })), []);

  return (
    <header id="home" className="relative py-20 overflow-hidden">

      {/* 3D Constellation Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="constellation">
          {stars.map((star, i) => (
            <motion.div
              key={i}
              className="star"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: star.delay }}
              style={{
                left: star.left,
                top: star.top,
                animationDelay: `${star.delay}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT SIDE */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          <div className="flex items-center gap-2 text-indigo-600">
            <StarIcon className="w-6 h-6" />
            <span className="text-sm font-medium uppercase tracking-wide">
              Luxury Payment Solutions
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-black leading-tight bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Secure. Fast. Reliable Digital Payment Processing.
          </h1>

          <p className="text-lg text-white leading-relaxed">
            Constellation Payment Service LLC empowers businesses to purchase
            digital assets — including cryptocurrency and online services —
            through secure, compliant payment channels. Experience the stars of
            financial innovation.
          </p>

          {/* CTA BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="#services"
                onClick={(e) => handleSmoothScroll(e, "#services")}
                className="inline-flex items-center px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <CurrencyDollarIcon className="w-5 h-5 mr-2" />
                Our Services
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="#careers"
                onClick={(e) => handleSmoothScroll(e, "#careers")}
                className="inline-flex items-center px-6 py-3 rounded-xl border-2 border-indigo-200 text-indigo-600 font-semibold hover:bg-indigo-50 transition-all duration-300"
              >
                Join Our Team
              </Link>
            </motion.div>
          </div>

          {/* Fee Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <motion.div
              initial={{ rotateY: 0 }}
              whileHover={{
                rotateY: 10,
                scale: 1.03,
                transformPerspective: 800,
              }}
              className="p-4 bg-white/70 backdrop-blur-md rounded-xl shadow-lg border border-gray-200 hover:shadow-2xl transition-all duration-300"
            >
              <div className="text-sm text-white">Client Service Fee</div>
              <div className="text-2xl font-bold text-indigo-600">10%</div>
            </motion.div>

            <motion.div
              whileHover={{
                rotateY: -10,
                scale: 1.03,
                transformPerspective: 800,
              }}
              className="p-4 bg-white/70 backdrop-blur-md rounded-xl shadow-lg border border-gray-200 hover:shadow-2xl transition-all duration-300"
            >
              <div className="text-sm text-white">Agent Commission</div>
              <div className="text-2xl font-bold text-purple-600">5%</div>
            </motion.div>
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0, rotateY: 15 }}
          animate={{ scale: 1, opacity: 1, rotateY: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          whileHover={{ rotateY: 5, transformPerspective: 800 }}
          className="p-8 bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl border border-gray-100"
        >
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
            <ShieldCheckIcon className="w-5 h-5" />
            Quick Overview
          </div>

          <h3 className="text-xl font-bold text-gray-800 mb-4">How It Works</h3>

          <ol className="space-y-3 text-gray-700 list-decimal list-inside">
            <li>Client requests asset purchase</li>
            <li>We process payment via crypto, electronic, or wire</li>
            <li>Funds sent to vendor with secure logging</li>
            <li>Fees + commissions distributed transparently</li>
          </ol>

          <div className="mt-6 text-xs text-gray-500 italic">
            All transactions are conducted through registered accounts for
            compliance and security.
          </div>
        </motion.div>
      </div>
    </header>
  );
};

export default Hero;
