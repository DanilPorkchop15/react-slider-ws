import { AppContainer, AppStyled } from "./AppStyled";
import Slider from "./components/Slider/Slider";
import slidesData from "./images.json";
import { Slide } from "./types/Slider.types";

function App() {
  const slides: Slide[] = slidesData;
  return (
    <AppStyled>
      <AppContainer>
        <Slider
          aria-label="Gallery with images"
          slides={slides}
          auto
          loop
          pages
          navs
          stopMouseHover
          delay={2}
        />
      </AppContainer>
    </AppStyled>
  );
}

export default App;

