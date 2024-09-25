import { FC } from "react";
import { SliderPaginationDot, SliderPaginationDots, SliderPaginationStyled } from "./SliderPaginationStyled";

interface SliderPaginationProps {
  size: number;
  current: number;
  onSelectPage: (i: number) => void;
}

const SliderPagination: FC<SliderPaginationProps> = ({ size, current, onSelectPage }) => {

  return <SliderPaginationStyled>
    <SliderPaginationDots>
      {[...Array(size)].map((_, i) => <SliderPaginationDot $active={i === current} onClick={() => onSelectPage(i)} key={i} />)}
    </SliderPaginationDots>
    <span>{`${current + 1}/${size}`}</span>
  </SliderPaginationStyled>;
};

export default SliderPagination;
