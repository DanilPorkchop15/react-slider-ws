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
    const nextSlide: (prevSlide: number) => number = loop
      ? (prevSlide) => (prevSlide + 1) % slides.length
      : (prevSlide) => prevSlide === slides.length - 1 ? prevSlide : prevSlide + 1;
    setCurrentSlide(nextSlide);
  }, [slides.length, loop]);

  useEffect(() => {
    if (auto) {
      autoInterval.current = setInterval(handleInterval, delay * 1000);
      return () => {
        if (autoInterval.current) clearInterval(autoInterval.current);
      };
    }
  }, [handleInterval, delay, auto]);

  const handleMouseEnter = () => {
    if (autoInterval.current) clearInterval(autoInterval.current);
  };

  const handleMouseLeave = () => {
    autoInterval.current = setInterval(handleInterval, delay * 1000);
  };

  return (
    <SliderContainerStyled>
      <SliderStyled
        onMouseEnter={() => auto && stopMouseHover && handleMouseEnter()}
        onMouseLeave={() => auto && stopMouseHover && handleMouseLeave()}
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
