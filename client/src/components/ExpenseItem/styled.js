import styled from "styled-components";
import { colors, smallShadow, mediumShadow } from "../../styles";

export const StyledItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 8px;
  margin-bottom: 8px;
  transition: box-shadow 0.2s ease-in-out;
  border-radius: 5px;
  ${smallShadow}

  &:hover {
    background: ${colors.grayLight};
    ${mediumShadow}
  }
`;

export const StyledAmount = styled.div`
  text-align: right;
`;
