import styled from "styled-components";
import { flexAlignCenterStyled } from "../../../assets/styles/utils";

export const SliderNavStyled = styled.div`
  ${flexAlignCenterStyled}
  width: 95%;
  justify-content: space-between;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
export const SliderNavButton = styled.button`
  outline: none;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-size: 24px;
  background-color: #111;
  cursor: pointer;
  color: white;
  &:disabled {
    background-color: #aaa;
`;
