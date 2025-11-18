"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import {
  StarIcon,
  BriefcaseIcon,
  CheckCircleIcon,
  UserGroupIcon,
  EnvelopeIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";

export default function Careers() {
  // Prevent hydration mismatch (random positions break SSR)
  const stars = useMemo(() => {
    return [...Array(18)].map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: Math.random() * 2,
      animDelay: Math.random() * 5,
    }));
  }, []);

  return (
    <section id="careers" className="section">
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
                left: star.left,
                top: star.top,
                animationDelay: `${star.animDelay}s`,
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
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <BriefcaseIcon className="w-10 h-10 text-indigo-600" />
            <h2 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-indigo-600 via-purple-600 to-sky-600 bg-clip-text text-transparent">
              Careers — Join Our Team
            </h2>
          </div>
          <p className="text-xl text-white max-w-4xl mx-auto leading-relaxed">
            We hire motivated individuals to process client transactions and ensure secure
            delivery of funds to vendors. Be part of a forward-thinking team shaping the
            future of digital payments.
          </p>
        </motion.div>

        {/* Job Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, x: -40, rotateY: 15 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            whileHover={{
              rotateY: 10,
              scale: 1.05,
              boxShadow:
                "0 25px 50px rgba(0,0,0,0.15), 0 0 30px rgba(99, 102, 241, 0.3)",
            }}
            className="group p-8 bg-white/70 backdrop-blur-xl rounded-3xl shadow-xl border border-gray-200/50 hover:border-indigo-300/50 transition-all duration-500 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-100/20 to-purple-100/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
            <div className="relative z-10">
              <motion.div
                whileHover={{ rotate: 10, scale: 1.1 }}
                className="flex items-center gap-4 mb-6"
              >
                <BriefcaseIcon className="w-12 h-12 text-indigo-600 group-hover:text-purple-600 transition-colors duration-300" />
                <h4 className="text-2xl font-bold text-gray-800 group-hover:text-indigo-700 transition-colors duration-300">
                  About the Job
                </h4>
              </motion.div>

              <ul className="space-y-3 text-gray-600 leading-relaxed">
                <li className="flex items-start gap-3">
                  <CheckCircleIcon className="w-5 h-5 text-green-500 mt-0.5" />
                  Process digital asset payments on behalf of clients
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircleIcon className="w-5 h-5 text-green-500 mt-0.5" />
                  Work with cryptocurrency, wire, and electronic transfers
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircleIcon className="w-5 h-5 text-green-500 mt-0.5" />
                  Manage business accounts used for transactions
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircleIcon className="w-5 h-5 text-green-500 mt-0.5" />
                  Communicate with vendors and ensure accuracy
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, x: 40, rotateY: -15 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            whileHover={{
              rotateY: -10,
              scale: 1.05,
              boxShadow:
                "0 25px 50px rgba(0,0,0,0.15), 0 0 30px rgba(147, 51, 234, 0.3)",
            }}
            className="group p-8 bg-white/70 backdrop-blur-xl rounded-3xl shadow-xl border border-gray-200/50 hover:border-purple-300/50 transition-all duration-500 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-100/20 to-indigo-100/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
            <div className="relative z-10">
              <motion.div
                whileHover={{ rotate: -10, scale: 1.1 }}
                className="flex items-center gap-4 mb-6"
              >
                <UserGroupIcon className="w-12 h-12 text-purple-600 group-hover:text-indigo-600 transition-colors duration-300" />
                <h4 className="text-2xl font-bold text-gray-800 group-hover:text-purple700 transition-colors duration-300">
                  Requirements & Benefits
                </h4>
              </motion.div>

              <ul className="space-y-3 text-gray-600 leading-relaxed">
                <li className="flex items-start gap-3">
                  <CheckCircleIcon className="w-5 h-5 text-green-500 mt-0.5" />
                  Have or be willing to open a business account
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircleIcon className="w-5 h-5 text-green-500 mt-0.5" />
                  Detail-oriented and reliable
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircleIcon className="w-5 h-5 text-green-500 mt-0.5" />
                  Knowledge of crypto/payments is a plus
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircleIcon className="w-5 h-5 text-green-500 mt-0.5" />
                  LLC registration support & training provided
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircleIcon className="w-5 h-5 text-green-500 mt-0.5" />
                  5% commission per completed transaction
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Apply Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center bg-white/70 backdrop-blur-xl rounded-3xl shadow-xl border border-gray-200/50 p-8"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <EnvelopeIcon className="w-10 h-10 text-indigo-600" />
            <h4 className="text-3xl font-bold text-gray-800">How to Apply</h4>
          </motion.div>

          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            Send your CV and a short note to{" "}
            <strong className="text-indigo-600">
             Constellationpaymentservicellc@gmail.com
            </strong>{" "}
            or use the contact form on our site. We’ll reach out with next steps.
          </p>

        </motion.div>
      </div>


    </section>
  );
}
