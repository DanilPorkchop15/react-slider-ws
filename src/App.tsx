import "./App.css";
import Slider from "./components/Slider/Slider";
import slidesData from "./images.json";
import { Slide } from "./types/Slider.types";

function App() {
  const slides: Slide[] = slidesData;
  return (
    <div className="App">
      <div className="container">
        <Slider slides={slides} loop navs pages auto stopMouseHover delay={2} />
      </div>
    </div>
  );
}

export default App;
