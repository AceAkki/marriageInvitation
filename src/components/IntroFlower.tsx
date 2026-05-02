import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import FlowerImg from "../assets/flower.png";
import FlowerImg1 from "../assets/flower1.png";
import FlowerImg2 from "../assets/flower2.png";
import FlowerImg3 from "../assets/flower3.png";
import FlowerImg4 from "../assets/flower4.png";
import FlowerImg5 from "../assets/flower5.png";
import FlowerImg6 from "../assets/flower6.png";
import FlowerImg7 from "../assets/flower7.png";
import FlowerImg8 from "../assets/flower8.png";
import leafImg from "../assets/leaf.png";

// Individual Flower Component for easier positioning
const FlyingFlower = ({ src, delay = 0, xPos = "10%", speed = -500 }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const yRaw = useTransform(scrollYProgress, [0, 1], [200, speed]);
  // This creates the "Flying Up" effect by moving the Y position
  // much faster than the actual scroll speed
  const y = useSpring(yRaw, {
    stiffness: 100, // Higher = faster/snappier
    damping: 30, // Higher = less oscillation/bouncing
    restDelta: 0.001,
  });
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

export default function IntroFlower() {
  return (
    <div>
      {/* Introduction Section */}

      <section
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#fdfbf7",
          overflowX: "hidden",
        }}
      >
        <h1 style={{ fontFamily: "serif", fontSize: "3rem" }}></h1>
      </section>

      {/* Animation Section */}
      <section
        style={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {/* --- Section 1: Far Left (0% - 20%) --- */}
        <FlyingFlower src={FlowerImg} xPos="1%" speed={-750} />
        <FlyingFlower src={FlowerImg5} xPos="1.5%" speed={-1300} />
        <FlyingFlower src={FlowerImg3} xPos="6%" speed={-1150} />
        <FlyingFlower src={FlowerImg7} xPos="8.5%" speed={-850} />
        <FlyingFlower src={FlowerImg2} xPos="11%" speed={-500} />
        <FlyingFlower src={FlowerImg8} xPos="13.5%" speed={-1100} />
        <FlyingFlower src={FlowerImg4} xPos="16%" speed={-980} />
        <FlyingFlower src={FlowerImg1} xPos="18.5%" speed={-600} />

        {/* --- Section 2: Mid Left (21% - 40%) --- */}
        <FlyingFlower src={leafImg} xPos="21%" speed={-850} />
        <FlyingFlower src={FlowerImg6} xPos="23.5%" speed={-1100} />
        <FlyingFlower src={FlowerImg3} xPos="26%" speed={-1250} />
        <FlyingFlower src={FlowerImg5} xPos="28.5%" speed={-650} />
        <FlyingFlower src={FlowerImg4} xPos="31%" speed={-1400} />
        <FlyingFlower src={FlowerImg7} xPos="33.5%" speed={-1300} />
        <FlyingFlower src={FlowerImg6} xPos="36%" speed={-780} />
        <FlyingFlower src={FlowerImg2} xPos="38.5%" speed={-600} />

        {/* --- Section 3: Center (41% - 60%) --- */}
        <FlyingFlower src={FlowerImg8} xPos="41%" speed={-950} />
        <FlyingFlower src={FlowerImg5} xPos="43.5%" speed={-1150} />
        <FlyingFlower src={FlowerImg1} xPos="46%" speed={-400} />
        <FlyingFlower src={FlowerImg3} xPos="48.5%" speed={-1300} />
        <FlyingFlower src={FlowerImg5} xPos="51%" speed={-1100} />
        <FlyingFlower src={FlowerImg2} xPos="53.5%" speed={-820} />
        <FlyingFlower src={FlowerImg3} xPos="56%" speed={-900} />
        <FlyingFlower src={FlowerImg4} xPos="58.5%" speed={-720} />

        {/* --- Section 4: Mid Right (61% - 80%) --- */}
        <FlyingFlower src={leafImg} xPos="61%" speed={-1200} />
        <FlyingFlower src={FlowerImg7} xPos="63.5%" speed={-1400} />
        <FlyingFlower src={FlowerImg1} xPos="66%" speed={-1050} />
        <FlyingFlower src={FlowerImg6} xPos="68.5%" speed={-990} />
        <FlyingFlower src={FlowerImg8} xPos="71%" speed={-1300} />
        <FlyingFlower src={FlowerImg2} xPos="73.5%" speed={-450} />
        <FlyingFlower src={FlowerImg5} xPos="76%" speed={-1050} />
        <FlyingFlower src={FlowerImg4} xPos="78.5%" speed={-680} />

        {/* --- Section 5: Far Right (81% - 100%) --- */}
        <FlyingFlower src={FlowerImg} xPos="81%" speed={-550} />
        <FlyingFlower src={FlowerImg1} xPos="83.5%" speed={-880} />
        <FlyingFlower src={FlowerImg7} xPos="86%" speed={-1050} />
        <FlyingFlower src={FlowerImg3} xPos="88.5%" speed={-1250} />
        <FlyingFlower src={FlowerImg5} xPos="91%" speed={-900} />
        <FlyingFlower src={FlowerImg4} xPos="93.5%" speed={-750} />
        <FlyingFlower src={FlowerImg1} xPos="96%" speed={-1200} />
        <FlyingFlower src={FlowerImg6} xPos="98.5%" speed={-990} />
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
    </div>
  );
}
