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
  const flowerImg = "https://www.svgrepo.com/show/475141/flower.svg"; // Placeholder SVG

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
        <FlyingFlower src={FlowerImg} xPos="2%" speed={-750} />
        <FlyingFlower src={FlowerImg3} xPos="8%" speed={-500} />
        <FlyingFlower src={FlowerImg4} xPos="15%" speed={-980} />
        <FlyingFlower src={FlowerImg6} xPos="22%" speed={-1100} /> {/* Added */}
        {/* --- Mid Left Layer --- */}
        <FlyingFlower src={FlowerImg2} xPos="28%" speed={-600} />
        <FlyingFlower src={FlowerImg1} xPos="34%" speed={-400} />
        <FlyingFlower src={FlowerImg5} xPos="39%" speed={-850} /> {/* Added */}
        <FlyingFlower src={FlowerImg3} xPos="43%" speed={-900} />
        {/* --- Center Layer (The "Focus" area) --- */}
        <FlyingFlower src={leafImg} xPos="50%" speed={-990} />
        <FlyingFlower src={FlowerImg8} xPos="54%" speed={-1300} />{" "}
        {/* Added - Fast "foreground" flower */}
        <FlyingFlower src={FlowerImg2} xPos="58%" speed={-450} />
        {/* --- Mid Right Layer --- */}
        <FlyingFlower src={FlowerImg4} xPos="64%" speed={-680} />
        <FlyingFlower src={FlowerImg} xPos="70%" speed={-550} />
        <FlyingFlower src={FlowerImg7} xPos="76%" speed={-1050} /> {/* Added */}
        <FlyingFlower src={FlowerImg5} xPos="82%" speed={-900} />
        {/* --- Far Right Layer --- */}
        <FlyingFlower src={FlowerImg1} xPos="88%" speed={-1200} />
        <FlyingFlower src={FlowerImg6} xPos="92%" speed={-990} />
        <FlyingFlower src={FlowerImg3} xPos="96%" speed={-800} /> {/* Added */}
        <FlyingFlower src={FlowerImg8} xPos="98%" speed={-1150} />
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
