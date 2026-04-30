import * as motion from "motion/react-client";
import { useAnimationFrame } from "motion/react";
import { useRef } from "react";
import "./ImageCircle.css";
/*
https://www.framer.com/marketplace/components/orbit-motion/
*/

export const ImageCircles = () => {
  const ref = useRef<HTMLDivElement>(null);
  useAnimationFrame((t) => {
    if (!ref.current) return;
    console.log(t);
    const rotate = (t / 10000) * 300;
    ref.current.style.transform = `rotate(${rotate}deg)`;
  });
  return (
    <div className="main-wrapper">
      <div className="card-wrapper" ref={ref}>
        {[1, 2, 3, 4, 5].map((el) => {
          return <ImageCircle index={el} />;
        })}
      </div>
    </div>
  );
};

export const ImageCircle = ({ index }: { index: number }) => {
  const refCard = useRef<HTMLDivElement>(null);
  useAnimationFrame((t) => {
    if (!refCard.current) return;

    const rotate = Math.sin(t / 1000) * 5;
    const rotateX = Math.sin(t / 1000) * 5;
    const rotateY = Math.sin(t / 1000) * 5;
    const skewX = Math.sin(t / 1000) * index;
    const skewY = Math.sin(t / 1000) * index;
    const x = (1 + Math.sin(t / 1000)) * -20;
    const y = (1 + Math.sin(t / 1000)) * -50;
    refCard.current.style.transform = `translateX(${x}px) translateY(${y}px) rotate(${rotate}deg) rotateX(${rotateX}deg) rotateY(${rotateY}deg) skewX(${skewX}deg) skewY(${skewY}deg)`;
  });

  return (
    <motion.div
      className="card"
      ref={refCard}
      initial={{ y: 300 }}
      whileInView={{ y: 50 }}
      viewport={{ amount: 0.8 }}
    >
      <div className="flex-div">
        <div className="flex-div">
          <div className="img-wrap">
            <img
              sizes="320px"
              src="https://framerusercontent.com/images/m85UxTFuBLBsnDIsVZFi6NBMeQ.png?scale-down-to=1024&amp;width=960&amp;height=1200"
              width="960"
              height="1200"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};
