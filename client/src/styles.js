import { css, createGlobalStyle } from "styled-components";

export const colors = {
  white: "#fff",
  black: "#000",
  primary: "#f36",
  gray: "#444",
  grayLight: "#f9fafb",
  error: "#b21717"
};

export const breakpoints = {
  sm: "576px",
  md: "992px",
  lg: "1200px"
};

export const smallShadow = css`
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.12), 0 4px 4px rgba(0, 0, 0, 0.12);
`;

export const mediumShadow = css`
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.12), 0 4px 4px rgba(0, 0, 0, 0.12),
    0 8px 8px rgba(0, 0, 0, 0.12), 0 16px 16px rgba(0, 0, 0, 0.12);
`;

export const GlobalStyles = createGlobalStyle`
  body { 
    font-family: "Roboto", sans-serif;
    font-size: 14px;
    margin: 0;
    
    &.preventScroll{
      overflow: hidden;
    }

  }
  .modal {
    position: absolute;
    background: ${colors.white};
    top: 50%;
    left: 50%;
    right: auto;
    bottom: auto;
    margin-right: -50%;
    transform: translate(-50%, -50%);
    max-height: 100%;
    overflow: auto;
    min-width: 80%;
    box-sizing: border-box;
    border: 1px solid ${colors.grayLight};
    border-radius: 5px;
    ${smallShadow}
  }
`;
