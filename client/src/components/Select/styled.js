import styled from "styled-components";
import { colors, smallShadow, mediumShadow } from "../../styles";

export const StyledSelect = styled.select`
  display: block;
  font-size: 16px;
  color: ${colors.black};
  line-height: 1.3;
  padding: 8px;
  box-sizing: border-box;
  border: 1px solid ${colors.grayLight};
  ${smallShadow}
  border-radius: 0.5em;
  appearance: none;
  background-color: ${colors.white};

  &:hover {
    ${mediumShadow}
    background: ${colors.grayLight};
  }
`;
