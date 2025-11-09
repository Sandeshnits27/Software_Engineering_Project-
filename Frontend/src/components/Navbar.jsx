import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SlideMenu from "./SlideMenu";

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="flex items-center justify-between bg-gray-900 text-white px-6 py-3 shadow-lg">
      
      <div className="flex items-center space-x-4">
        <Link to="/">
          <img src="/logo.png" alt="Logo" className="h-10 w-10" />
        </Link>
        <span className="text-2xl font-semibold">Hackathon Platform</span>
      </div>

      <div className="flex space-x-6 text-lg items-center">
        <Link to="/" className="hover:text-blue-400">Home</Link>
        <Link to="/about" className="hover:text-blue-400">About Us</Link>
        <Link to="/contact" className="hover:text-blue-400">Contact Us</Link>
        <input
          type="text"
          placeholder="Search..."
          className="px-3 py-1 rounded-lg text-white bg-gray-700 outline-none"
        />
      </div>

      <div className="relative flex items-center space-x-4">
        {isLoggedIn ? (
          <>
            <FaUserCircle
              size={32}
              className="cursor-pointer hover:text-blue-400"
              onClick={() => setShowMenu(!showMenu)}
            />
            {showMenu && (
              <motion.div
                initial={{ x: 150, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="absolute right-0 top-10"
              >
                <SlideMenu setIsLoggedIn={setIsLoggedIn} />
              </motion.div>
            )}
          </>
        ) : (
          <div className="flex space-x-3">
            <Link
              to="/login"
              className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg font-semibold"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg font-semibold"
            >
              Sign Up
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
