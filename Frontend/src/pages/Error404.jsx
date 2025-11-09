import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";

const Error404 = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white px-6 text-center">
      {/* Animated Icon */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8, type: "spring" }}
        className="mb-6"
      >
        <FaExclamationTriangle size={80} className="text-red-500" />
      </motion.div>

      {/* Glowing 404 Text */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-7xl font-extrabold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 drop-shadow-lg"
      >
        404
      </motion.h1>

      {/* Message */}
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="text-xl text-gray-300 mt-4"
      >
        Oops! The page you're looking for doesn’t exist.
      </motion.p>

      {/* Animated "Back Home" Button */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="mt-8"
      >
        <Link
          to="/"
          className="bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 rounded-full text-lg font-semibold hover:shadow-xl transition-all duration-300"
        >
          Go Back Home
        </Link>
      </motion.div>

      {/* Floating effect */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 3 }}
        className="absolute bottom-16 text-sm text-gray-500"
      >
        Hackathon Platform © {new Date().getFullYear()}
      </motion.div>
    </div>
  );
};

export default Error404;
