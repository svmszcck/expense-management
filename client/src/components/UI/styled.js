import styled, { css, keyframes } from "styled-components";
import { smallShadow, mediumShadow, colors, breakpoints } from "../../styles";

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
  margin: 0 0 8px 0;
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
  text-align: ${({ align = "left" }) => align};
`;

export const ErrorText = styled(Text)`
  color: ${colors.error};
`;

const ripple = keyframes`
  0% {
    top: 20px;
    left: 20px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: 0px;
    left: 0px;
    width: 40px;
    height: 40px;
    opacity: 0;
  }
`;

export const Loader = styled.div`
  display: inline-block;
  position: relative;
  width: 40px;
  height: 40px;

  &:after,
  &:before {
    content: "";
    position: absolute;
    border: 2px solid ${colors.primary};
    opacity: 1;
    border-radius: 50%;
    animation: ${ripple} 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  }
  &:before {
    animation-delay: -0.5s;
  }
`;

export const LoaderWrapper = styled.div`
  align-items: center;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px;
`;

export const StyledContainer = styled.div`
  width: 100%;
  padding-right: 16px;
  padding-left: 16px;
  margin-right: auto;
  margin-left: auto;
  box-sizing: border-box;
  @media only screen and (min-width: ${breakpoints.sm}) {
    width: 540px;
  }

  @media only screen and (min-width: ${breakpoints.md}) {
    width: 960px;
  }

  @media only screen and (min-width: ${breakpoints.lg}) {
    width: 1140px;
  }
`;
