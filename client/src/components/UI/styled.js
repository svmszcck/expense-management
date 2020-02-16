import styled, { css } from "styled-components";
import { smallShadow, mediumShadow, colors } from "../../styles";

export const Label = styled.label`
  font-size: 15px;
  color: ${colors.gray};
  text-align: left;
`;

export const Textarea = styled.textarea`
  background: ${colors.white};
  box-shadow: inset 0 1px 3px 0 rgba(174, 174, 174, 0.5);
  border-radius: 4px;
  border: none;
  padding: 13px 10px 11px 15px;
  font-size: 14px;
  color: ${colors.black};
  box-sizing: border-box;
  width: 100%;
  margin: 8px 0;
  resize: none;

  &::placeholder {
    color: ${colors.gray};
  }
`;

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

export const CloseButton = styled.button`
  position: absolute;
  right: 12px;
  top: 12px;
  width: 24px;
  height: 24px;
  opacity: 0.3;
  border: 0;
  cursor: pointer;
  background: transparent;

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

export const Text = styled.p`
  font-size: ${({ small }) => (small ? "0.8rem" : "1rem")};
  font-family: "Roboto", sans-serif;
  line-height: 1.43;
  color: ${({ inverted }) => (inverted ? colors.white : colors.black)};
  font-weight: ${({ bold }) => (bold ? 600 : 400)};
`;

export const ErrorText = styled(Text)`
  color: ${colors.error};
`;
