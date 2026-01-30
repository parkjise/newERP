import { css } from "styled-components";

type GridOptions = {
  columns?: string;
  rows?: string;
  gap?: string;
  columnGap?: string;
  rowGap?: string;
  alignItems?: string;
  justifyItems?: string;
};

export const grid = (options: GridOptions | string = {}) => {
  const normalized: GridOptions =
    typeof options === "string" ? { columns: options } : options;

  const {
    columns = "1fr",
    rows,
    gap,
    columnGap,
    rowGap,
    alignItems,
    justifyItems,
  } = normalized;

  return css`
    display: grid;
    grid-template-columns: ${columns};
    ${rows ? `grid-template-rows: ${rows};` : ""}
    ${gap ? `gap: ${gap};` : ""}
    ${columnGap ? `column-gap: ${columnGap};` : ""}
    ${rowGap ? `row-gap: ${rowGap};` : ""}
    ${alignItems ? `align-items: ${alignItems};` : ""}
    ${justifyItems ? `justify-items: ${justifyItems};` : ""}
  `;
};
