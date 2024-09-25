import "./App.css";
import Slider from "./components/Slider/Slider";
import slidesData from "./images.json";
import { Slide } from "./types/Slider.types";

function App() {
  const slides: Slide[] = slidesData;
  return (
    <div className="App">
      <Slider slides={slides} loop navs pages auto stopMouseHover delay={3} />
    </div>
  );
}

export default App;
