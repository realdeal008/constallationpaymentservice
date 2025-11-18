"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  StarIcon,
  HomeIcon,
  InformationCircleIcon,
  CogIcon,
  BriefcaseIcon,
  PhoneIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

const Nav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className=" backdrop-blur-lg shadow-lg sticky top-0 z-50 "
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          whileHover={{ rotateY: 10, scale: 1.05 }}
          className="flex items-center gap-3 cursor-pointer"
        >
          <Link href="/" className="flex items-center gap-3">
            <motion.div
              whileHover={{ boxShadow: "0 0 20px rgba(99, 102, 241, 0.5)" }}
              className="w-12 h-12 rounded-full bg-gradient-to-br from-sky-500 to-indigo-600 flex items-center justify-center text-white font-bold shadow-lg relative"
            >
              <StarIcon className="w-6 h-6 absolute inset-0 m-auto opacity-30" />
              CP
            </motion.div>

            <div>
              <div className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Constellation Payment
              </div>
              <div className="text-sm text-white">Payment Service LLC</div>
            </div>
          </Link>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {[
            { name: "Home", href: "#home", icon: HomeIcon },
            { name: "About", href: "#about", icon: InformationCircleIcon },
            { name: "Services", href: "#services", icon: CogIcon },
            { name: "Careers", href: "#careers", icon: BriefcaseIcon },
            { name: "Contact", href: "#contact", icon: PhoneIcon },
          ].map((item) => (
            <motion.div key={item.name} whileHover={{ scale: 1.1 }} className="relative">
              <Link href={item.href} onClick={(e) => handleSmoothScroll(e, item.href)} className="flex items-center gap-2 group">
                <item.icon className="w-5 h-5" />
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </motion.div>
          ))}

          <motion.div whileHover={{ scale: 1.05, rotateY: 5 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="#contact"
              onClick={(e) => handleSmoothScroll(e, "#contact")}
              className="ml-6 inline-flex items-center px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              Become a Partner
            </Link>
          </motion.div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={toggleMobileMenu}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMobileMenuOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden  backdrop-blur-md border-t border-gray-200/50 shadow-lg"
        >
          <div className="px-6 py-4 space-y-4">
            {[
              { name: "Home", href: "#home", icon: HomeIcon },
              { name: "About", href: "#about", icon: InformationCircleIcon },
              { name: "Services", href: "#services", icon: CogIcon },
              { name: "Careers", href: "#careers", icon: BriefcaseIcon },
              { name: "Contact", href: "#contact", icon: PhoneIcon },
            ].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  handleSmoothScroll(e, item.href);
                  toggleMobileMenu();
                }}
                className="flex items-center gap-2 py-2 hover:text-indigo-600 transition-colors"
              >
                <item.icon className="w-5 h-5" />
                {item.name}
              </Link>
            ))}

            <Link
              href="/partner"
              onClick={toggleMobileMenu}
              className="block mt-4 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold text-center shadow-lg"
            >
              Become a Partner
            </Link>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Nav;
