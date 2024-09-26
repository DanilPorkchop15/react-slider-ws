import styled from "styled-components";

export const SliderPaginationStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const SliderPaginationDots = styled.div`
  display: flex;
  gap: 5px;
`;

export const SliderPaginationDot = styled.div<{ $active?: boolean }>`
  background-color: ${({ $active }) => ($active ? "red" : "#333333")};
  width: 10px;
  height: 10px;
  border-radius: 50%;
`;
