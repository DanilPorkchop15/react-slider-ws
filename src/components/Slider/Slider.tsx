import { FC, useMemo, useState, useEffect, useCallback, useRef } from "react";
import { nanoid } from "nanoid";
import {
  SliderContainerStyled,
  SliderStyled,
  SlideContainerStyled,
  SlideStyled,
  SliderTitleStyled,
  SliderPagesStyled,
} from "./SliderStyled";
import { Slide } from "../../types/Slider.types";
import SliderNav from "./SliderNav/SlideNav";
import SliderPagination from "./SliderPagination/SliderPagination";

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
  delay = 5,
}) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const autoTimeoutId = useRef<number | null>(null);

  const handleInterval = useCallback(() => {
    const nextSlide: (prevSlide: number) => number = loop
      ? (prevSlide) => (prevSlide + 1) % slides.length
      : (prevSlide) =>
          prevSlide === slides.length - 1 ? prevSlide : prevSlide + 1;
    setCurrentSlide(nextSlide);
  }, [slides.length, loop]);

  useEffect(() => {
    if (auto) {
      const timeoutId = window.setTimeout(
        handleInterval,
        delay * 1000
      );
      autoTimeoutId.current = timeoutId;
      return () => window.clearTimeout(timeoutId);
    }
  }, [auto, delay, currentSlide, slides.length, handleInterval]);

  const handleMouseEnter = useCallback(() => {
    if (autoTimeoutId.current) window.clearTimeout(autoTimeoutId.current);
  }, []);

  const handleMouseLeave = useCallback(() => {
    const timeoutId = window.setTimeout(
      () => setCurrentSlide((currentSlide + 1) % slides.length),
      delay * 1000
    );
    autoTimeoutId.current = timeoutId;
  }, [delay, currentSlide, slides.length]);

  const handleNavClick = useCallback(
    (isNext: boolean) => {
      if (isNext) {
        setCurrentSlide((currentSlide + 1) % slides.length);
      } else {
        setCurrentSlide(
          currentSlide - 1 < 0 ? slides.length - 1 : currentSlide - 1
        );
      }
    },
    [currentSlide, setCurrentSlide, slides.length]
  );

  const handleSelectPage = useCallback(
    (page: number) => {
      setCurrentSlide(page);
    },
    [setCurrentSlide]
  );

  const slideElements = useMemo(
    () =>
      slides.map((slide) => (
        <SlideContainerStyled key={nanoid()}>
          <SlideStyled src={slide.img} alt={slide.text} />
        </SlideContainerStyled>
      )),
    [slides]
  );

  return (
    <SliderContainerStyled>
      <SliderStyled
        onMouseEnter={auto && stopMouseHover ? handleMouseEnter : undefined}
        onMouseLeave={auto && stopMouseHover ? handleMouseLeave : undefined}
      >
        {slideElements[currentSlide]}
        {navs && (
          <SliderNav
            isNext={currentSlide !== slides.length - 1 || loop}
            isPrevious={currentSlide !== 0 || loop}
            onNavClick={handleNavClick}
          />
        )}
        <SliderTitleStyled>{slides[currentSlide].text}</SliderTitleStyled>
        <SliderPagesStyled>{`${currentSlide + 1} / ${
          slides.length
        }`}</SliderPagesStyled>
      </SliderStyled>
      {pages && (
        <SliderPagination
          onSelectPage={handleSelectPage}
          size={slides.length}
          current={currentSlide}
        />
      )}
    </SliderContainerStyled>
  );
};

export default Slider;

