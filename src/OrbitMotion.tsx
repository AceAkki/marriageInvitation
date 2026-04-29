import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const OrbitMotion = ({
  items:string[] = [],
  radius = 200,
  speed = 0.5,
  autoRotate = true,
  itemSize = 80,
  depth = 100,
}) => {
  const containerRef = useRef(null);

  // Track scroll progress
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Rotate based on scroll
  const rotation = useTransform(scrollYProgress, [0, 1], [0, 360 * speed]);

  return (
    <div
      ref={containerRef}
      style={{
        height: "200vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        perspective: 1000,
      }}
    >
      <motion.div
        style={{
          position: "relative",
          width: radius * 2,
          height: radius * 2,
          rotate: autoRotate ? rotation : 0,
          transformStyle: "preserve-3d",
        }}
      >
        {items.map((item, index) => {
          const angle = (index / items.length) * 2 * Math.PI;

          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;

          const z = Math.sin(angle) * depth;

          return (
            <motion.div
              key={index}
              style={{
                position: "absolute",
                width: itemSize,
                height: itemSize,
                left: "50%",
                top: "50%",
                marginLeft: -itemSize / 2,
                marginTop: -itemSize / 2,
                x,
                y,
                z,
                borderRadius: 16,
                overflow: "hidden",
                transformStyle: "preserve-3d",
              }}
            >
              {typeof item === "string" ? (
                <img
                  src={item}
                  alt=""
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              ) : (
                item
              )}
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default OrbitMotion;
