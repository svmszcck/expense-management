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

export const StyledCloseButton = styled.button`
  position: absolute;
  right: 12px;
  top: 12px;
  width: 24px;
  height: 24px;
  opacity: 0.3;
  border: 0;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
  &:before,
  &:after {
    top: 0px;
    position: absolute;
    left: 15px;
    content: " ";
    height: 26px;
    width: 2px;
    background-color: ${colors.gray};
  }
  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }
`;
