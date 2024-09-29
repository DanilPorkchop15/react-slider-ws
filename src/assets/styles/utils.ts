import { css } from "styled-components";

export const flexStyled = css`
  display: flex;
`;

export const flexColumnStyled = css`
  ${flexStyled}
  flex-direction: column;
`

export const flexCenterStyled = css`
  ${flexStyled}
  justify-content: center;
  align-items: center;
` 

export const flexJustifyCenterStyled = css`
  ${flexStyled}
  justify-content: center;
`

export const flexAlignCenterStyled = css`
  ${flexStyled}
  align-items: center;
`