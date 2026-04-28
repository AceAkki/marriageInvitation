"use client";

import { useAnimationFrame } from "motion/react";
import { useRef } from "react";

export default function UseAnimationFrame({
  rotateValue,
  yValue,
}: {
  rotateValue: number;
  yValue: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useAnimationFrame((t) => {
    if (!ref.current) return;

    const rotate = Math.sin(t / 10000) * rotateValue;
    const y = (1 + Math.sin(t / 1000)) * yValue;
    ref.current.style.transform = `translateY(${y}px) rotateX(${rotate}deg) rotateY(${rotate}deg)`;
  });

  return (
    <div className="container">
      <div className="cube" ref={ref}>
        <div className="side front" />
        <div className="side left" />
        <div className="side right" />
        <div className="side top" />
        <div className="side bottom" />
        <div className="side back" />
      </div>
      <StyleSheet />
    </div>
  );
}

/**
 * ==============   Styles   ================
 */
function StyleSheet() {
  return (
    <style>{`

        .container {
            perspective: 800px;
            width: 200px;
            height: 200px;
        }

        .cube {
            width: 200px;
            height: 200px;
            position: relative;
            transform-style: preserve-3d;
        }

        .side {
            position: absolute;
            width: 100%;
            height: 100%;
            opacity: 0.9;
        }

        .front {
            transform: rotateY(0deg) translateZ(100px);
            background: url(https://img.freepik.com/free-photo/positive-dark-haired-female-gardener-stands-near-her-dark-skinned-companion-points-with-index-finger-upwards-advertises-something-isolated-white-wall_273609-29168.jpg) center / cover no-repeat;
        }
        .right {
            transform: rotateY(90deg) translateZ(100px);
            background: url(https://img.freepik.com/free-photo/indoor-shot-cheerful-glad-satisfied-mixed-race-woman-man-have-broad-smiles_273609-18014.jpg) center / cover no-repeat;
        }
        .back {
            transform: rotateY(180deg) translateZ(100px);
            background: url(https://img.freepik.com/free-photo/indoor-shot-cheerful-glad-satisfied-mixed-race-woman-man-have-broad-smiles_273609-18014.jpgp) center / cover no-repeat;
        }
        .left {
            transform: rotateY(-90deg) translateZ(100px);
            background: url(https://img.freepik.com/free-photo/indoor-shot-cheerful-glad-satisfied-mixed-race-woman-man-have-broad-smiles_273609-18014.jpg) center / cover no-repeat;
        }
        .top {
            transform: rotateX(90deg) translateZ(100px);
            background: url(https://img.freepik.com/free-photo/indoor-shot-cheerful-glad-satisfied-mixed-race-woman-man-have-broad-smiles_273609-18014.jpg) center / cover no-repeat;
        }
        .bottom {
            transform: rotateX(-90deg) translateZ(100px);
            background: url(https://img.freepik.com/free-photo/indoor-shot-cheerful-glad-satisfied-mixed-race-woman-man-have-broad-smiles_273609-18014.jpg) center / cover no-repeat;
        }

    `}</style>
  );
}
