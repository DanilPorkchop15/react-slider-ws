import { FC, useState, useEffect, useCallback, useRef } from "react";
import { SliderContainerStyled, SliderStyled, SlideContainerStyled, SlideStyled } from "./ SliderStyled";
import { Slide } from "../../types/Slider.types";

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
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const autoInterval = useRef<NodeJS.Timer | null>(null); // Use useRef to store the interval

  const handleInterval = useCallback(() => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    if (loop) {
      autoInterval.current = setInterval(handleInterval, delay * 1000);
      return () => {
        if (autoInterval.current) clearInterval(autoInterval.current);
      };
    }
  }, [handleInterval, delay, loop]);

  const handleMouseEnter = () => {
    if (autoInterval.current) clearInterval(autoInterval.current);
  };

  const handleMouseLeave = () => {
    autoInterval.current = setInterval(handleInterval, delay * 1000);
  };

  return (
    <SliderContainerStyled>
      <SliderStyled
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <SlideContainerStyled>
          <h1>{slides[currentSlide].text}</h1>
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
