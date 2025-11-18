"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  StarIcon,
  ShieldCheckIcon,
  EyeIcon,
  LightBulbIcon,
  ChartBarIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/outline";

interface FeatureCardProps {
  title: string;
  desc: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const FeatureCard = ({ title, desc, icon: Icon }: FeatureCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    whileHover={{ rotateY: 5, scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
    className="p-6 bg-white/80 backdrop-blur-md rounded-2xl shadow-lg border border-gray-200/50 group hover:shadow-2xl transition-all duration-300 cursor-pointer"
  >
    <div className="flex items-center gap-3 mb-4">
      <Icon className="w-8 h-8 text-indigo-600" />
      <h3 className="font-bold text-xl text-gray-800">{title}</h3>
    </div>
    <p className="text-gray-600 leading-relaxed">{desc}</p>
    <div className="mt-4 text-sm text-indigo-600 font-medium group-hover:translate-x-2 transition-transform">
      Learn more →
    </div>
  </motion.div>
);

interface StatCardProps {
  label: string;
  value: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const StatCard = ({ label, value, icon: Icon }: StatCardProps) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6 }}
    whileHover={{ rotateY: -5, scale: 1.05, boxShadow: "0 15px 30px rgba(0,0,0,0.1)" }}
    className="p-6 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl shadow-lg border border-gray-200/50 flex flex-col items-center text-center hover:shadow-xl transition-all duration-300"
  >
    <Icon className="w-10 h-10 text-indigo-600 mb-3" />
    <div className="text-sm text-gray-500 uppercase tracking-wide">{label}</div>
    <div className="text-3xl font-bold text-gray-800 mt-1">{value}</div>
  </motion.div>
);

const About = () => (
  <section id="about" className="section">
    {/* Constellation background */}
    <div className="absolute inset-0 pointer-events-none">
      <div className="constellation">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="star"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>
    </div>

    <div className="relative max-w-7xl mx-auto px-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <div className="flex items-center justify-center gap-2 mb-4">
          <StarIcon className="w-8 h-8 text-indigo-600" />
          <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            About Constellation Payment Service LLC
          </h2>
        </div>
        <p className="text-lg text-white max-w-3xl mx-auto leading-relaxed">
          We are a third-party payment processing company specializing in digital asset purchases. We act as an intermediary to ensure transactions are accurate, secure, and compliant with business-account requirements.
        </p>
      </motion.div>

      {/* Mission & Vision */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          whileHover={{ rotateY: 10, scale: 1.02 }}
          className="p-8 bg-white/90 backdrop-blur-lg rounded-3xl shadow-xl border border-gray-200/50"
        >
          <div className="flex items-center gap-3 mb-4">
            <ShieldCheckIcon className="w-10 h-10 text-indigo-600" />
            <h4 className="text-2xl font-bold text-gray-800">Our Mission</h4>
          </div>
          <p className="text-gray-600 leading-relaxed">
            To provide safe, fast, and reliable financial services that support the growing global demand for digital asset transactions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          whileHover={{ rotateY: -10, scale: 1.02 }}
          className="p-8 bg-white/90 backdrop-blur-lg rounded-3xl shadow-xl border border-gray-200/50"
        >
          <div className="flex items-center gap-3 mb-4">
            <EyeIcon className="w-10 h-10 text-purple-600" />
            <h4 className="text-2xl font-bold text-gray-800">Vision & Values</h4>
          </div>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-center gap-2">
              <StarIcon className="w-5 h-5 text-indigo-500" /> Security: Protecting every transaction with cutting-edge compliance.
            </li>
            <li className="flex items-center gap-2">
              <LightBulbIcon className="w-5 h-5 text-indigo-500" /> Efficiency: Streamlining processes for speed and reliability.
            </li>
            <li className="flex items-center gap-2">
              <EyeIcon className="w-5 h-5 text-indigo-500" /> Transparency: Clear, honest communication at every step.
            </li>
            <li className="flex items-center gap-2">
              <ChartBarIcon className="w-5 h-5 text-indigo-500" /> Growth: Fostering innovation and expansion in digital finance.
            </li>
          </ul>
        </motion.div>
      </div>

      {/* Feature Cards */}
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} className="mb-16">
        <h3 className="text-3xl font-bold text-center mb-8 text-white">Key Features</h3>
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard title="Secure Transactions" desc="End-to-end encryption and compliance ensure your digital assets are protected." icon={ShieldCheckIcon} />
          <FeatureCard title="Fast Processing" desc="Lightning-quick payments via crypto, wire, or electronic channels." icon={CurrencyDollarIcon} />
          <FeatureCard title="Global Reach" desc="Supporting businesses worldwide with scalable, reliable solutions." icon={StarIcon} />
        </div>
      </motion.div>

      {/* Stat Cards */}
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8 }}>
        <h3 className="text-3xl font-bold text-center mb-8 text-white">Our Impact</h3>
        <div className="grid md:grid-cols-4 gap-6">
          <StatCard label="Transactions Processed" value="10K+" icon={ChartBarIcon} />
          <StatCard label="Client Satisfaction" value="98%" icon={StarIcon} />
          <StatCard label="Global Partners" value="500+" icon={ShieldCheckIcon} />
          <StatCard label="Years in Service" value="5+" icon={LightBulbIcon} />
        </div>
      </motion.div>
    </div>


  </section>
);

export default About;
