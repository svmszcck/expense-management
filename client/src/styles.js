import { css, createGlobalStyle } from "styled-components";

export const colors = {
  white: "#fff",
  black: "#000",
  primary: "#f36",
  gray: "#444",
  grayLight: "#f9fafb",
  error: "#b21717"
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
  }
`;
