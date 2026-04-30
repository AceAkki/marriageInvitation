import "./App.css";
import Para from "./Para";
import ScrollTriggered from "./Scroll";
import { ImageCircles } from "./ImageCircle";
import Rotate from "./Test";

import GaneshaImg from "./assets/ganesha.png";

function App() {
  return (
    <main>
      <section></section>
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
              together with their families ask you to join them for the wedding
              of
            </p>
          </div>

          <div className="couple-wrap">
            <h1 className="name-title gold-text"> Akshay </h1>
            <h3 className="name-sub-title gold-text">And</h3>
            <h1 className="name-title gold-text"> Divyani </h1>
          </div>
        </div>
      </section>
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
