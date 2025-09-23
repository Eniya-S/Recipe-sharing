import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "./Auth.css";

const Login = () => {
  const [popup, setPopup] = useState("");

  const handleLogin = () => {
    // Dummy check – you can replace with real API call
    setPopup("✅ Login Successful!");
    setTimeout(() => setPopup(""), 2500); // hide after 2.5s
  };

  return (
    <motion.div
      className="auth-container"
      initial={{ opacity: 0, y: -80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.h2
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Login
      </motion.h2>

      <motion.input
        type="email"
        placeholder="Email"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      />

      <motion.input
        type="password"
        placeholder="Password"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      />

      <motion.button
        className="auth-btn"
        whileHover={{ scale: 1.05, boxShadow: "0px 4px 12px rgba(0,0,0,0.2)" }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300 }}
        onClick={handleLogin}
      >
        Login
      </motion.button>

      <motion.p
        className="auth-switch"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        Don’t have an account? <Link to="/signup">Signup</Link>
      </motion.p>

      {/* Popup Message */}
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

export default Login;
