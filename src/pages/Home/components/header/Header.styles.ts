import styled from "styled-components";
import { flex, text } from "@/styles/mixins";
export const HeaderRoot = styled.header`
  &.widget__head {
    width: 100%;
    ${flex("center", "space-between")}
  }
  .widget__title {
    ${text("15px", 500)}
    color: ${({ theme }) => theme.colors.neutral[800]};
  }
`;
