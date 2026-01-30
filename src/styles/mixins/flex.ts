import { css } from "styled-components";

export const flex = (
  align: string = "center",
  justify: string = "center",
  direction: "row" | "column" = "row",
  gap?: string,
) => css`
  display: flex;
  flex-direction: ${direction};
  align-items: ${align};
  justify-content: ${justify};
  ${gap ? `gap:${gap};` : ""}
`;

export const flexCenter = () => flex("center", "center");
export const flexBetween = () => flex("center", "betten");
