import styled from "styled-components";
import { flexAlignCenterStyled, flexColumnStyled, flexStyled } from "../../../assets/styles/utils";

export const SliderPaginationStyled = styled.div`
  ${flexColumnStyled}
  ${flexAlignCenterStyled}
  gap: 10px;
`;

export const SliderPaginationDots = styled.div`
  ${flexStyled}
  gap: 5px;
`;

export const SliderPaginationDot = styled.div<{ $active?: boolean }>`
  background-color: ${({ $active }) => ($active ? "red" : "#333333")};
  width: 10px;
  height: 10px;
  border-radius: 50%;
`;
