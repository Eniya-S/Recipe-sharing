// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { motion, AnimatePresence } from "framer-motion";
// import "./Auth.css";

// const Login = () => {
//   const [popup, setPopup] = useState("");

//   const handleLogin = () => {
//     // Dummy check – you can replace with real API call
//     setPopup("✅ Login Successful!");
//     setTimeout(() => setPopup(""), 2500); // hide after 2.5s
//   };

//   return (
//     <motion.div
//       className="auth-container"
//       initial={{ opacity: 0, y: -80 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.8, ease: "easeOut" }}
//     >
//       <motion.h2
//         initial={{ opacity: 0, scale: 0.8 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ delay: 0.2, duration: 0.6 }}
//       >
//         Login
//       </motion.h2>

//       <motion.input
//         type="email"
//         placeholder="Email"
//         initial={{ x: -100, opacity: 0 }}
//         animate={{ x: 0, opacity: 1 }}
//         transition={{ delay: 0.3, duration: 0.6 }}
//       />

//       <motion.input
//         type="password"
//         placeholder="Password"
//         initial={{ x: 100, opacity: 0 }}
//         animate={{ x: 0, opacity: 1 }}
//         transition={{ delay: 0.5, duration: 0.6 }}
//       />

//       <motion.button
//         className="auth-btn"
//         whileHover={{ scale: 1.05, boxShadow: "0px 4px 12px rgba(0,0,0,0.2)" }}
//         whileTap={{ scale: 0.95 }}
//         transition={{ type: "spring", stiffness: 300 }}
//         onClick={handleLogin}
//       >
//         Login
//       </motion.button>

//       <motion.p
//         className="auth-switch"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.8 }}
//       >
//         Don’t have an account? <Link to="/signup">Signup</Link>
//       </motion.p>

//       {/* Popup Message */}
//       <AnimatePresence>
//         {popup && (
//           <motion.div
//             className="popup-msg"
//             initial={{ opacity: 0, scale: 0.8, y: -20 }}
//             animate={{ opacity: 1, scale: 1, y: 0 }}
//             exit={{ opacity: 0, scale: 0.8, y: -20 }}
//             transition={{ duration: 0.4 }}
//           >
//             {popup}
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.div>
//   );
// };

// export default Login;


import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import "./Auth.css";

const Login = () => {
  const navigate = useNavigate(); // to redirect after login
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [popup, setPopup] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/auth/login", formData);
      const token = res.data.token;
      localStorage.setItem("token", token); // store JWT
      setPopup("✅ Login Successful!");
      setTimeout(() => {
        setPopup("");
        navigate("/"); // redirect to home or dashboard
      }, 1500);
    } catch (err) {
      console.error(err.response?.data || err.message);
      setPopup(err.response?.data?.message || "Login failed!");
      setTimeout(() => setPopup(""), 2500);
    }
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

      <form onSubmit={handleSubmit}>
        <motion.input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          required
        />

        <motion.input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          required
        />

        <motion.button
          type="submit"
          className="auth-btn"
          whileHover={{ scale: 1.05, boxShadow: "0px 4px 12px rgba(0,0,0,0.2)" }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Login
        </motion.button>
      </form>

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
