import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "./Auth.css";

const Signup = () => {
  const [popup, setPopup] = useState("");

  const handleSignup = () => {
    // Dummy action – replace with real signup API
    setPopup("🎉 Account Created Successfully!");
    setTimeout(() => setPopup(""), 2500); // auto hide
  };

  return (
    <motion.div
      className="auth-container"
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.h2
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Signup
      </motion.h2>

      <motion.input
        type="text"
        placeholder="Username"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      />

      <motion.input
        type="email"
        placeholder="Email"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      />

      <motion.input
        type="password"
        placeholder="Password"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      />

      <motion.button
        className="auth-btn"
        whileHover={{ scale: 1.05, boxShadow: "0px 4px 12px rgba(0,0,0,0.2)" }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300 }}
        onClick={handleSignup}
      >
        Signup
      </motion.button>

      <motion.p
        className="auth-switch"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        Already have an account? <Link to="/login">Login</Link>
      </motion.p>

      {/* Popup */}
      <AnimatePresence>
        {popup && (
          <motion.div
            className="popup-msg"
            initial={{ opacity: 0, scale: 0.8, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            {popup}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Signup;
