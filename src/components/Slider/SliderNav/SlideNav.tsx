import { FC } from "react";
import { SliderNavButton, SliderNavStyled } from "./SliderNavStyled";

interface SliderNavProps {
  onNavClick: (next: boolean) => void;
  isNext: boolean;
  isPrevious: boolean;
}

const SliderNav: FC<SliderNavProps> = ({ onNavClick, isPrevious, isNext }) => {
  return (
    <SliderNavStyled>
      <SliderNavButton disabled={!isPrevious} onClick={() => onNavClick(false)}>
        &lt;
      </SliderNavButton>
      <SliderNavButton disabled={!isNext} onClick={() => onNavClick(true)}>
        &gt;
      </SliderNavButton>
    </SliderNavStyled>
  );
};

export default SliderNav;
