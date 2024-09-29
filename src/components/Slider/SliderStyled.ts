import styled from "styled-components";

export const SliderContainerStyled = styled.div`
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const SliderStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  justify-content: center;
  transition: transform 0.3s ease-in-out;
  position: relative;
  background-color: #333333;
  border-radius: 5px;
`;

export const SlideContainerStyled = styled.div`
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const SlideStyled = styled.img`
  height: 400px;
  width: 100%;
  object-fit: contain;
`;

export const SliderTitleStyled = styled.span`
  width: 100%;
  color: white;
  filter: drop-shadow(0 3px 3px black);
  text-align: center;
  position: absolute;
  bottom: 10px;
`;

export const SliderPagesStyled = styled.span`
  color: white;
  position: absolute;
  left: 20px;
  top: 10px;
  filter: drop-shadow(0 3px 3px black);
`;
