import { FC } from "react";
import { SliderNavButton, SliderNavStyled } from "./SliderNavStyled";

interface SliderNavProps {
  onNavClick: (next: boolean) => void;
  isNext: boolean;
  isPrevious: boolean;
  children?: React.ReactNode;
}

const SliderNav: FC<SliderNavProps> = ({ children, onNavClick, isPrevious, isNext }) => {
  return <SliderNavStyled>
    <SliderNavButton disabled={!isPrevious} onClick={() => onNavClick(false)}>
      &lt;
    </SliderNavButton>
    {children}
    <SliderNavButton disabled={!isNext} onClick={() => onNavClick(true)}>
      &gt;
    </SliderNavButton>
  </SliderNavStyled>;
};

export default SliderNav;
