import styled from "styled-components";
import { flexAlignCenterStyled, flexColumnStyled } from "./assets/styles/utils";

export const AppStyled = styled.div`
  ${flexColumnStyled}
  ${flexAlignCenterStyled}
  gap: 20px;
  height: 100vh;
  background-color: #111;
  padding-top: 20px;
`;

export const AppContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  ${flexColumnStyled}
  ${flexAlignCenterStyled}
  gap: 20px;
`;
