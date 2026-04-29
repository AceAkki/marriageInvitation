import "./App.css";
import Para from "./Para";
import ScrollTriggered from "./Scroll";
import { ImageCircles } from "./ImageCircle";
import Rotate from "./Test";

import OrbitMotion from "./OrbitMotion";

const images = [
  "https://picsum.photos/300?1",
  "https://picsum.photos/300?2",
  "https://picsum.photos/300?3",
  "https://picsum.photos/300?4",
  "https://picsum.photos/300?5",
  "https://picsum.photos/300?6",
];
function App() {
  return (
    <main>
      <section>
        <Rotate />
        <OrbitMotion
          items={images}
          radius={220}
          speed={1}
          autoRotate={true}
          itemSize={100}
          depth={120}
        />
      </section>
      <section>
        <ImageCircles />
      </section>

      <ScrollTriggered />

      <Para />
    </main>
  );
}

export default App;
