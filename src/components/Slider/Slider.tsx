import { Slide } from "../../types/Slider.types";
import { FC, useEffect, useState } from "react";
import {
  SliderStyled,
  SliderContainerStyled,
  SlideContainerStyled,
  SlideStyled,
} from "./ SliderStyled";

interface SliderProps {
  slides: Slide[];
  loop?: boolean;
  navs?: boolean;
  pages?: boolean;
  auto?: boolean;
  stopMouseHover?: boolean;
  delay?: number;
}

const Slider: FC<SliderProps> = ({
  slides,
  loop = false,
  navs = false,
  pages = false,
  auto = false,
  stopMouseHover = false,
  delay = 1,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const autoInterval = setInterval(() => {
      setCurrentSlide((currentSlide + 1) % slides.length);
    }, delay * 1000);
    return () => clearInterval(autoInterval);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <SliderContainerStyled>
      <SliderStyled>
        <SlideContainerStyled>
          <SlideStyled
            src={slides[currentSlide].img}
            alt={slides[currentSlide].text}
          />
        </SlideContainerStyled>
      </SliderStyled>
    </SliderContainerStyled>
  );
};

export default Slider;
