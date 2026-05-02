import "./App.css";
import Para from "./Para";
import ScrollTriggered from "./Scroll";
import { ImageCircles } from "./ImageCircle";
import Rotate from "./Test";

import { ReactLenis } from "lenis/react";
import type { LenisRef } from "lenis/react";
import { cancelFrame, frame } from "framer-motion";
import { useEffect, useRef } from "react";

import GaneshaImg from "./assets/ganesha.png";
import ArchBG from "./assets/rose-arc.png";
import Frame from "./assets/frame.png";
import FrameSquare from "./assets/frameSquare.png";
import WeddingInvite from "./FloralGrowth";

import ProCountdown from "./Countdown";

function App() {
  const lenisRef = useRef<LenisRef>(null);

  useEffect(() => {
    function update(data: { timestamp: number }) {
      const time = data.timestamp;
      lenisRef.current?.lenis?.raf(time);
    }

    frame.update(update, true);

    return () => cancelFrame(update);
  }, []);

  let newDate = new Date("2026-06-27");
  return (
    <ReactLenis root options={{ autoRaf: false }} ref={lenisRef}>
      <main>
        <section>
          <WeddingInvite />
        </section>
        <section>
          <div className="card-layout">
            <div className="ganesha-wrap">
              <p className="gold-text">ॐ श्री गणेशाय नम</p>
              <img src={GaneshaImg} className="ganesha-img" />
            </div>
            <div className="parents-wrap">
              <h5 className="parent-name">Smt. Sonali & Shri Ramdas Patil </h5>
              <p>along with</p>
              <h5 className="parent-name">Smt. Rekha Sudhakar Bhadrige</h5>
              <p>
                together with their families ask you to join them for the
                wedding of
              </p>
            </div>

            <div className="couple-wrap">
              <h1 className="name-title gold-text"> Akshay </h1>
              <h3 className="name-sub-title gold-text">And</h3>
              <h1 className="name-title gold-text"> Divyani </h1>
              <img src={ArchBG} className="frame" alt="" />
            </div>

            <hr className="gold-divide" />

            <div className="date-wrap">
              <div className="frame-content">
                <p>Saturday, 27th June, 2026</p>
                <p>12:30PM : 04:30PM</p>

                <br />
                <strong>Central Railway Officers Hall</strong>
                <p>
                  D/14, Dada Saheb Phalke Marg, Gautam Nagar, Dadar, Mumbai,
                  Maharashtra 400014
                </p>
              </div>
              <img src={FrameSquare} className="frame" alt="" />
            </div>
          </div>
        </section>
        <section>
          <ProCountdown
            targetDate={newDate}
            tint="#FFFFFF"
            labelColor="#888888"
            fontSize={60}
            gap={30}
            showSeparators={false}
            fontFamily="Inter"
            fontWeight={700}
          />
          <Rotate />
        </section>
        <section>
          <ImageCircles />
        </section>
        <section>
          <ScrollTriggered />
        </section>
        <section>
          <Para />
        </section>
      </main>
    </ReactLenis>
  );
}

export default App;
