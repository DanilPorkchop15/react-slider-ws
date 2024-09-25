import styled from "styled-components";

export const SliderContainerStyled = styled.div`
  width: 100%;
  height: 200px;
  background-color: #f1f1f1;
  overflow: hidden;
`;

export const SliderStyled = styled.div`
  display: flex;
  transition: transform 0.3s ease-in-out;
`;

export const SlideContainerStyled = styled.div`
  flex: 0 0 100%;
  height: 100%;
  background-color: #ccc;
`;

export const SlideStyled = styled.img`
  object-fit: cover;
  width: 100%;
`;
