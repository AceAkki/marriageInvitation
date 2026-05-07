import React from "react";
import { motion } from "framer-motion";

const RoyalWeddingReveal = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0, filter: "blur(10px)" },
    visible: {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        duration: 1.2,
        ease: [0.43, 0.13, 0.23, 0.96], // Custom cubic-bezier for "royal" smoothness
      },
    },
  };

  const lineVariants = {
    hidden: { width: 0 },
    visible: {
      width: "100%",
      transition: { duration: 1.5, ease: "easeInOut", delay: 1.2 },
    },
  };

  return (
    <div style={styles.wrapper}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={styles.container}
      >
        {/* Top Decorative Line */}
        <motion.div variants={lineVariants} style={styles.line} />

        <div style={styles.textGroup}>
          <motion.h1 variants={itemVariants} style={styles.name}>
            Akshay
          </motion.h1>

          <motion.span variants={itemVariants} style={styles.ampersand}>
            Weds
          </motion.span>

          <motion.h1 variants={itemVariants} style={styles.name}>
            Divyani
          </motion.h1>
        </div>

        {/* Bottom Decorative Line */}
        <motion.div variants={lineVariants} style={styles.line} />
      </motion.div>
    </div>
  );
};

const styles = {
  wrapper: {
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "#0f172a", // Deep navy/regal background
    color: "#d4af37", // Classic Gold
    // fontFamily: "'Playfair Display', serif", // Ensure you import a Serif font
  },
  container: {
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "20px",
  },
  textGroup: {
    padding: "0 40px",
  },
  name: {
    fontSize: "7rem",
    margin: "10px 0",
    letterSpacing: "4px",
    textTransform: "uppercase",
    fontWeight: "300",
    position: "relative",
    zIndex: 5,
  },
  ampersand: {
    fontSize: "1.5rem",
    fontStyle: "italic",
    display: "block",
    opacity: 0.8,
    fontFamily: "Georgia, serif",
  },
  line: {
    height: "1px",
    backgroundColor: "#d4af37",
    opacity: 0.5,
  },
  subtext: {
    fontSize: "1rem",
    letterSpacing: "8px",
    marginTop: "10px",
  },
};

export default RoyalWeddingReveal;
