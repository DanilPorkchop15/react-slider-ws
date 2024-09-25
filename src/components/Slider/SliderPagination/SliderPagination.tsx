import { FC } from "react";
import { SliderNavStyled } from "../SliderNav/SliderNavStyled";
import { SliderPaginationDot } from "./SliderPaginationStyled";

interface SliderPaginationProps {
  size: number;
  current: number;
  onSelectPage: (i: number) => void;
}

const SliderPagination: FC<SliderPaginationProps> = ({ size, current, onSelectPage }) => {

  return <SliderNavStyled>
    {[...Array(size)].map((_, i) => <SliderPaginationDot $active={i === current} onClick={() => onSelectPage(i)} key={i} />)}
  </SliderNavStyled>;
};

export default SliderPagination;
