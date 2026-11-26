import React, { useState } from "react";
import { motion } from "framer-motion";
import "./About.css";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, type: "spring", stiffness: 50 }
  })
};

const iconVariants = {
  float: {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const galleryImgVariants = {
  hidden: { opacity: 0, scale: 0.8, rotate: -5 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      delay: i * 0.15,
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  }),
  hover: {
    scale: 1.1,
    rotate: 3,
    boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
    transition: { type: "spring", stiffness: 300 }
  }
};

const AboutPage = () => {
  const [selected, setSelected] = useState(null);

  const images = {
    share: [
      "/images/image1.jpg",
      "/images/image2.jpg",
      "/images/image3.jpg"
    ],
    explore: [
      "/images/image4.jpg",
      "/images/image5.jpg",
      "/images/image6.jpg"
    ],
    learn: [
      "/images/image7.avif",
      "/images/image8.jpg",
      "/images/image9.webp"
    ]
  };

  return (
    <div className="about-page">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="about-title"
      >
        About Our Recipe Sharing App
      </motion.h2>

      <p className="about-text">
        Welcome to <strong>GoDelicious </strong> – a place where food lovers
        share their favorite recipes, discover new dishes, and connect with
        other cooking enthusiasts. Whether you are a beginner or a pro, you can
        upload your recipes, browse through thousands of dishes, and get
        inspired to try something new every day.
      </p>

      <motion.div
        className="about-cards"
        initial="hidden"
        animate="visible"
      >
        {["share", "explore", "learn"].map((type, i) => {
          const titles = {
            share: " Share Recipes",
            explore: " Explore Dishes",
            learn: " Learn & Connect"
          };
          const descriptions = {
            share: "Upload your favorite recipes and inspire others!",
            explore: "Discover cuisines from around the world.",
            learn: "Learn cooking and connect with food lovers."
          };
          const icons = {
            share: "https://cdn-icons-png.flaticon.com/512/2921/2921822.png",
            explore: "https://cdn-icons-png.flaticon.com/512/1046/1046784.png",
            learn: "https://cdn-icons-png.flaticon.com/512/706/706164.png"
          };

          return (
            <motion.div
              key={type}
              className="about-card"
              custom={i}
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelected(type)}
            >
              <motion.img
                src={icons[type]}
                alt={type}
                className="card-icon"
                variants={iconVariants}
                animate="float"
              />
              <h3>{titles[type]}</h3>
              <p>{descriptions[type]}</p>
            </motion.div>
          );
        })}
      </motion.div>

      {selected && (
        <motion.div
          className="gallery"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h3>Related Images</h3>
          <div className="gallery-grid">
            {images[selected].map((src, index) => (
              <motion.img
                key={index}
                src={src}
                alt={`Gallery ${index + 1}`}
                className="gallery-img"
                variants={galleryImgVariants}
                custom={index}
                initial="hidden"
                animate="visible"
                whileHover="hover"
              />
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default AboutPage;
