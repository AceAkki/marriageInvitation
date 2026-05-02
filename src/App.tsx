import "./App.css";
import Para from "./Para";
import ScrollTriggered from "./Scroll";
import { ImageCircles } from "./ImageCircle";
import Rotate from "./Test";

import { ReactLenis } from "lenis/react";
import type { LenisRef } from "lenis/react";
import { cancelFrame, frame } from "framer-motion";
import { useEffect, useRef } from "react";

import Frame from "./assets/frame.png";

import ProCountdown from "./Countdown";

import IntroFlower from "./components/IntroFlower";
import InviteContent from "./components/InviteContent";

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
          <IntroFlower />
        </section>
        <section style={{ paddingTop: "20vh" }}>
          <InviteContent />
        </section>
        <section>
          {/* <ProCountdown
            targetDate={newDate}
            tint="#FFFFFF"
            labelColor="#888888"
            fontSize={60}
            gap={30}
            showSeparators={false}
            fontFamily="Inter"
            fontWeight={700}
          /> */}
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
