import "./App.css";
import Para from "./Para";
import ScrollTriggered from "./Scroll";
import { ImageCircles } from "./ImageCircle";
import Rotate from "./Test";

function App() {
  return (
    <main>
      <section>
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
  );
}

export default App;
