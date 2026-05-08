import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import UseAnimationFrame from "./AnimeTest";

const images = [
  {
    title: "Prague",
    src: "https://s3.india.com/wp-content/uploads/2025/07/kolkata-DIY.jpg",
  },
  {
    title: "Tokyo",
    src: "https://s7ap1.scene7.com/is/image/incredibleindia/shivneri-fort-pune-maharashtra-hero?qlt=82&ts=1742178330918",
  },
  {
    title: "Japan",
    src: "https://s7ap1.scene7.com/is/image/incredibleindia/vidhana-soudha-bangalore-karnataka-hero?qlt=82&ts=1742199603184",
  },
  {
    title: "Aerial",
    src: "https://s7ap1.scene7.com/is/image/incredibleindia/dutch%20tombs-surat-gujarat?qlt=82&ts=1726734957798",
  },
];

function ParallaxSection({ src, title }) {
  const ref = useRef(null);

  // Track scroll progress for this specific section
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Map scroll progress to the values seen in your HTML snippet:
  // Background moves slightly slower for the parallax depth
  const yBg = useTransform(scrollYProgress, [0, 1], ["-9.5%", "9.5%"]);

  // Content fades in/out and moves vertically
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
  const yContent = useTransform(scrollYProgress, [0, 0.5, 1], [-30, 0, 30]);

  return (
    <section className="parallax-section" ref={ref}>
      <motion.div className="parallax-bg" style={{ y: yBg }}>
        <img src={src} alt={title} />
      </motion.div>

      <div className="parallax-overlay" />
      <UseAnimationFrame rotateValue={200} yValue={-50} />
      <motion.div className="parallax-content" style={{ opacity, y: yContent }}>
        <h2 className="parallax-title">{title}</h2>
        <p className="parallax-subtitle">A Photography Project</p>
      </motion.div>
      <UseAnimationFrame rotateValue={300} yValue={-10} />
    </section>
  );
}

export default function Para() {
  return (
    <main className="parallax-page">
      {images.map((img, i) => (
        <ParallaxSection key={i} {...img} />
      ))}
    </main>
  );
}
