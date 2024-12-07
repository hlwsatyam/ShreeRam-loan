import React from "react";
import { motion } from "framer-motion";

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600 text-white">
      <div className="container mx-auto px-6 py-16">
        {/* Title Section */}
        <motion.h1
          className="text-4xl font-bold text-center mb-10"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Contact Us | संपर्क करें
        </motion.h1>

        {/* Contact Info Section */}
        <motion.div
          className="grid md:grid-cols-2 gap-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Office Address */}
          <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Our Office</h2>
            <p className="text-lg mb-2">Reliance Jio Corporate Office</p>
            <p className="text-lg mb-4">Mumbai, India</p>
            <div className="text-3xl text-purple-600 flex space-x-4">
              <i className="fas fa-map-marker-alt"></i>
              <span>Location: Mumbai</span>
            </div>
          </div>

          {/* Contact Details */}
          <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Contact Details</h2>
            <p className="text-lg mb-2">
              <i className="fas fa-phone-alt text-purple-600 mr-2"></i> 
              +91-XXXXX-XXXXX
            </p>
            <p className="text-lg mb-4">
              <i className="fas fa-envelope text-purple-600 mr-2"></i>
              towersupport@reliancejio.com
            </p>
            <div className="text-lg">
              <i className="fas fa-clock text-purple-600 mr-2"></i> 
              Open: Mon - Fri (9 AM - 6 PM)
            </div>
          </div>
        </motion.div>

        {/* Social Media Links */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Follow Us</h2>
          <div className="flex justify-center space-x-6 text-4xl">
            <a
              href="#"
              className="text-blue-500 hover:text-blue-700 transition"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook"></i>
            </a>
            <a
              href="#"
              className="text-blue-400 hover:text-blue-600 transition"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="#"
              className="text-pink-600 hover:text-pink-800 transition"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="#"
              className="text-blue-800 hover:text-blue-900 transition"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactUs;
