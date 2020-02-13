import styled, { css } from "styled-components";
import { smallShadow, mediumShadow, colors } from "../../styles";

const centerStyle = css`
  margin: 0 auto;
  display: block;
`;

export const Button = styled.button`
  font-size: 16px;
  padding: 12px;
  margin-bottom: 8px;
  color: ${colors.black};
  background: ${colors.white};
  border: 1px solid ${colors.grayLight};
  border-radius: 5px;
  cursor: pointer;
  background: white;
  transition: box-shadow 0.2s ease-in-out;
  ${smallShadow}
  ${({ centered }) => centered && centerStyle}

  &:hover {
    ${mediumShadow}
  }
`;
