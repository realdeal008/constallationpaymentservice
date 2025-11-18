"use client";

import React from "react";
import { motion } from "framer-motion";

import {
  CurrencyDollarIcon,
  StarIcon,
  CogIcon,
  ArrowPathIcon,
  BuildingOfficeIcon,
  UserGroupIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";

const starData = [...Array(20)].map(() => ({
  delay: Math.random() * 1.5,
  left: Math.random() * 100,
  top: Math.random() * 100,
  animationDelay: Math.random() * 6,
}));

function Services() {
  const services = [
    {
      title: "Digital Asset Payment Processing",
      desc: "Purchase NFTs, tokens, and other digital assets on behalf of clients with seamless, secure handling.",
      icon: CurrencyDollarIcon,
    },
    {
      title: "Cryptocurrency Payments",
      desc: "Execute crypto-based payouts with full verification, tracking, and compliance.",
      icon: StarIcon,
    },
    {
      title: "Electronic Payments",
      desc: "Support for ACH and domestic electronic channels with fast, reliable clearance.",
      icon: CogIcon,
    },
    {
      title: "Wire Transfers",
      desc: "Local and international wire transfer services with real-time updates.",
      icon: ArrowPathIcon,
    },
    {
      title: "LLC & Business Setup",
      desc: "Full assistance in forming an LLC and opening verified business accounts.",
      icon: BuildingOfficeIcon,
    },
    {
      title: "Partner Program",
      desc: "Agents earn 5% commission with exclusive tools and support.",
      icon: UserGroupIcon,
    },
  ];

  return (
    <section id="services" className="section">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="constellation">
          {starData.map((star, i) => (
            <motion.div
              key={i}
              className="star"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: star.delay }}
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
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <StarIcon className="w-10 h-10 text-indigo-600" />
            <h2 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-indigo-600 via-purple-600 to-sky-600 bg-clip-text text-transparent">
              Our Services
            </h2>
          </div>

          <p className="text-xl text-white max-w-3xl mx-auto">
            Luxury-grade digital payment solutions designed for speed, trust,
            and global business expansion.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50, rotateY: 15 }}
                animate={{ opacity: 1, y: 0, rotateY: 0 }}
                transition={{ delay: index * 0.15, duration: 0.7 }}
                whileHover={{
                  rotateY: 10,
                  scale: 1.05,
                }}
                className="p-8 bg-white/70 backdrop-blur-xl rounded-3xl shadow-xl border border-gray-200/50 cursor-pointer relative group"
              >
                <div className="flex items-center gap-4 mb-6">
                  <Icon className="w-12 h-12 text-indigo-600 group-hover:text-purple-600 transition" />
                  <h4 className="text-2xl font-bold text-gray-800">
                    {service.title}
                  </h4>
                </div>

                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.desc}
                </p>

                <div className="flex items-center text-indigo-600 font-semibold group-hover:text-purple-600 transition">
                  Learn more
                  <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>


    </section>
  );
}

export default Services;
