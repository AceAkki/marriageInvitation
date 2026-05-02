import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import FlowerImg from "./assets/flower.png";
import FlowerImg1 from "./assets/flower1.png";
import FlowerImg2 from "./assets/flower2.png";
import FlowerImg3 from "./assets/flower3.png";
import FlowerImg4 from "./assets/flower4.png";
import FlowerImg5 from "./assets/flower5.png";
import FlowerImg6 from "./assets/flower6.png";
import FlowerImg7 from "./assets/flower7.png";
import FlowerImg8 from "./assets/flower8.png";
import leafImg from "./assets/leaf.png";

// Individual Flower Component for easier positioning
const FlyingFlower = ({ src, delay = 0, xPos = "10%", speed = -500 }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // This creates the "Flying Up" effect by moving the Y position
  // much faster than the actual scroll speed
  const y = useTransform(scrollYProgress, [0, 1], [200, speed]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 45]); // Slight tilt as they rise

  return (
    <motion.img
      ref={ref}
      src={src}
      className="flying-flower"
      style={{
        y,
        opacity,
        rotate,
        position: "absolute",
        left: xPos,
        zIndex: 1,
        pointerEvents: "none", // Ensures they don't block clicks
      }}
    />
  );
};

export default function WeddingInvite() {
  return (
    <div style={{ backgroundColor: "#fdfbf7", overflowX: "hidden" }}>
      {/* Introduction Section */}
      <section
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1 style={{ fontFamily: "serif", fontSize: "3rem" }}>
          Welcome to our Wedding
        </h1>
      </section>

      {/* Animation Section */}
      <section
        style={{
          height: "150vh",
          position: "relative",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {/* --- Far Left Layer --- */}
        <FlyingFlower src={FlowerImg} xPos="1%" speed={-750} />
        <FlyingFlower src={FlowerImg3} xPos="4%" speed={-1150} />
        <FlyingFlower src={FlowerImg2} xPos="7%" speed={-500} />
        <FlyingFlower src={FlowerImg4} xPos="10%" speed={-980} />
        <FlyingFlower src={FlowerImg6} xPos="13%" speed={-1100} />
        <FlyingFlower src={FlowerImg5} xPos="17%" speed={-650} />
        {/* --- Mid Left Layer --- */}
        <FlyingFlower src={leafImg} xPos="20%" speed={-850} />
        <FlyingFlower src={FlowerImg7} xPos="23%" speed={-1300} />
        <FlyingFlower src={FlowerImg2} xPos="27%" speed={-600} />
        <FlyingFlower src={FlowerImg8} xPos="30%" speed={-950} />
        <FlyingFlower src={FlowerImg1} xPos="33%" speed={-400} />
        <FlyingFlower src={FlowerImg5} xPos="36%" speed={-1100} />
        <FlyingFlower src={FlowerImg3} xPos="40%" speed={-900} />
        {/* --- Center Layer --- */}
        <FlyingFlower src={FlowerImg4} xPos="44%" speed={-720} />
        <FlyingFlower src={FlowerImg7} xPos="47%" speed={-1400} />
        <FlyingFlower src={FlowerImg6} xPos="51%" speed={-990} />
        <FlyingFlower src={FlowerImg8} xPos="54%" speed={-1300} />
        <FlyingFlower src={FlowerImg2} xPos="57%" speed={-450} />
        <FlyingFlower src={FlowerImg5} xPos="60%" speed={-1050} />
        {/* --- Mid Right Layer --- */}
        <FlyingFlower src={leafImg} xPos="63%" speed={-1200} />{" "}
        {/* Moved leaf here */}
        <FlyingFlower src={FlowerImg4} xPos="66%" speed={-680} />
        <FlyingFlower src={FlowerImg} xPos="70%" speed={-550} />
        <FlyingFlower src={FlowerImg1} xPos="74%" speed={-880} />
        <FlyingFlower src={FlowerImg7} xPos="77%" speed={-1050} />
        <FlyingFlower src={FlowerImg3} xPos="81%" speed={-1250} />
        {/* --- Far Right Layer --- */}
        <FlyingFlower src={FlowerImg5} xPos="84%" speed={-900} />
        <FlyingFlower src={FlowerImg4} xPos="87%" speed={-750} />
        <FlyingFlower src={FlowerImg1} xPos="90%" speed={-1200} />
        <FlyingFlower src={FlowerImg6} xPos="93%" speed={-990} />
        <FlyingFlower src={FlowerImg3} xPos="96%" speed={-800} />
        <FlyingFlower src={FlowerImg8} xPos="99%" speed={-1150} />
        {/* <div style={{ marginTop: "40vh", textAlign: "center", zIndex: 10 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
          >
            <h2 style={{ fontFamily: "serif", fontSize: "4rem" }}>
              Sarah & James
            </h2>
            <p style={{ letterSpacing: "3px" }}>ARE GETTING MARRIED</p>
          </motion.div>
        </div> */}
      </section>

      {/* Footer Section */}
      <section style={{ height: "100vh" }} />
    </div>
  );
}
