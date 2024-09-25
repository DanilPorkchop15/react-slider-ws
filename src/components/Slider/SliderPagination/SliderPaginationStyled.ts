import styled from "styled-components";

export const SliderPaginationStyled = styled.div`
`;
export const SliderPaginationDot = styled.div<{ $active?: boolean }>`
  background-color: ${({ $active }) => $active ? "red" : "white"}
  width: 10px;
  height: 10px;
  border-radius: 50%; 
`
