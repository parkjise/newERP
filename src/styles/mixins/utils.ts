import { css } from "styled-components";

export const text = (
  fontSize: number | string,
  fontWeight: number = 400,
  lineHeight: number | string = 1.5
) => css`
  font-size: ${fontSize};
  font-weight: ${fontWeight};
  line-height: ${lineHeight};
`;

export const remixiFont = (content: string) => css`
  font-family: "remixicon";
  content: "${content}";
  font-style: normal;
  font-weight: normal;
  line-height: 1;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;
