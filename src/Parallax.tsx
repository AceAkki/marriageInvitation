"use client";
import {
  motion,
  MotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { useRef } from "react";

function Image({ id }: { id: string }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  console.log(scrollYProgress);
  const y = useParallax(scrollYProgress, 300);
  return (
    <section className="parallax-section">
      <div ref={ref} className="parallax-bg">
        <img src={id} loading="lazy" />
      </div>
      <div className="parallax-overlay"></div>
      <div className="parallax-content">
        <motion.h2
          // Hide until scroll progress is measured
          className="impact parallax-title"
          initial={{ visibility: "hidden" }}
          animate={{ visibility: "visible" }}
          style={{ y }}
        >{`#00`}</motion.h2>
        <p className="parallax-subtitle">A Photography Project</p>
      </div>
    </section>
  );
}

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

export default function Parallax() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <div className="parallax-page">
      {[
        "https://s3.india.com/wp-content/uploads/2025/07/kolkata-DIY.jpg",
        "https://s7ap1.scene7.com/is/image/incredibleindia/hawa-mahal-jaipur-rajasthan-city-1-hero?qlt=82&ts=1742200253577",
        "https://s7ap1.scene7.com/is/image/incredibleindia/santa-cruz-basilicafort-kochi-kerala-2-attr-hero?qlt=82&ts=1742151113441",
        "https://s7ap1.scene7.com/is/image/incredibleindia/shivneri-fort-pune-maharashtra-hero?qlt=82&ts=1742178330918",
        "https://s7ap1.scene7.com/is/image/incredibleindia/chhataris-indore-mp-city-hero?qlt=82&ts=1726671229069",
        "https://s7ap1.scene7.com/is/image/incredibleindia/golconda-fort-hyderabad-secunderabad-telangana-3-musthead-hero?qlt=82&ts=1742197014098",
        "https://s7ap1.scene7.com/is/image/incredibleindia/vidhana-soudha-bangalore-karnataka-hero?qlt=82&ts=1742199603184",
        "https://s7ap1.scene7.com/is/image/incredibleindia/dutch%20tombs-surat-gujarat?qlt=82&ts=1726734957798",
        "https://s7ap1.scene7.com/is/image/incredibleindia/laxmi-vilas-palace-vadodara-gujarat-city-hero-1?qlt=82&ts=1750668556121",
      ].map((image) => (
        <Image key={image} id={image} />
      ))}
      <motion.div className="progress" style={{ scaleX, originX: 0 }} />
      <StyleSheet />
    </div>
  );
}
function StyleSheet() {
  return (
    <style>
      {`


        #sandbox {
            align-items: stretch;
        }

        .parallax-page {
            width: 100%;
            scroll-snap-type: y mandatory;
        }

        .parallax-section {
            height: 100vh;
            height: 100dvh;
            overflow: hidden;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .parallax-bg {
            position: absolute;
            left: 0;
            right: 0;
            top: -15%;
            height: 130%;
            will-change: transform;
        }

        .parallax-bg img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .parallax-overlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(
                to bottom,
                rgba(0, 0, 0, 0.3) 0%,
                rgba(0, 0, 0, 0.15) 40%,
                rgba(0, 0, 0, 0.15) 60%,
                rgba(0, 0, 0, 0.5) 100%
            );
        }

        .parallax-content {
            position: relative;
            z-index: 10;
            text-align: center;
            padding: 20px;
            will-change: transform, opacity;
        }

        .parallax-title {
            font-size: clamp(60px, 18vw, 200px);
            color: var(--white);
            text-transform: uppercase;
            text-shadow: 0 4px 40px rgba(0, 0, 0, 0.5);
            margin: 0;
        }

        .parallax-subtitle {
            color: rgba(255, 255, 255, 0.8);
            font-size: clamp(13px, 3vw, 16px);
            margin-top: 6px;
            letter-spacing: 0.15em;
            text-transform: uppercase;
            text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
        }
        `}
    </style>
  );
}
