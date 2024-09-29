import { FC, useState, useEffect, useCallback, useRef } from "react";
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
import { AnimatePresence, motion } from "framer-motion";

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
  const autoInterval = useRef<NodeJS.Timer | null>(null);
  const [direction, setDirection] = useState<"next" | "prev">("next");

  const handleInterval = useCallback(() => {
    const nextSlide: (prevSlide: number) => number = loop
      ? (prevSlide) => (prevSlide + 1) % slides.length
      : (prevSlide) =>
          prevSlide === slides.length - 1 ? prevSlide : prevSlide + 1;
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

  const handleNavClick = useCallback(
    (isNext: boolean) => {
      setDirection(isNext ? "next" : "prev");

      if (isNext) {
        setCurrentSlide((currentSlide + 1) % slides.length);
      } else {
        setCurrentSlide(
          currentSlide - 1 < 0 ? slides.length - 1 : currentSlide - 1,
        );
      }
    },
    [currentSlide, slides.length],
  );

  const handleSelectPage = (page: number) => {
    setCurrentSlide(page);
  };

  return (
    <SliderContainerStyled>
      <SliderStyled
        onMouseEnter={() => auto && stopMouseHover && handleMouseEnter()}
        onMouseLeave={() => auto && stopMouseHover && handleMouseLeave()}
      >
        <SlideContainerStyled>
          <AnimatePresence mode="wait">
            <SlideStyled
              as={motion.img}
              key={currentSlide}
              src={slides[currentSlide].img}
              alt={slides[currentSlide].text}
              initial={{ opacity: 0, x: direction === "next" ? 100 : -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction === "next" ? -100 : 100 }}
              transition={{ duration: 0.5 }}
            />
          </AnimatePresence>
          {navs && (
            <SliderNav
              isNext={currentSlide !== slides.length - 1 || loop}
              isPrevious={currentSlide !== 0 || loop}
              onNavClick={handleNavClick}
            />
          )}
        </SlideContainerStyled>
        <SliderTitleStyled>{slides[currentSlide].text}</SliderTitleStyled>
        <SliderPagesStyled>{`${currentSlide + 1} / ${slides.length}`}</SliderPagesStyled>
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
