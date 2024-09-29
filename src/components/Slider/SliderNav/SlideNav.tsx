import { FC, MouseEventHandler } from "react";
import { SliderNavButton, SliderNavStyled } from "./SliderNavStyled";

interface SliderNavProps {
  onNavClick: (next: boolean) => void;
  isNext: boolean;
  isPrevious: boolean;
}

const SliderNav: FC<SliderNavProps> = ({
  onNavClick,
  isPrevious,
  isNext,
}: SliderNavProps) => {
  const handlePrevClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    onNavClick(false);
  };

  const handleNextClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    onNavClick(true);
  };

  return (
    <SliderNavStyled>
      <SliderNavButton
        aria-label="Previous"
        disabled={!isPrevious}
        onClick={handlePrevClick}
        role="button"
      >
        &lt;
      </SliderNavButton>
      <SliderNavButton
        aria-label="Next"
        disabled={!isNext}
        onClick={handleNextClick}
        role="button"
      >
        &gt;
      </SliderNavButton>
    </SliderNavStyled>
  );
};

export default SliderNav;

