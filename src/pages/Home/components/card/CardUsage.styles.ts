import styled from "styled-components";
import { flex, text } from "@/styles/mixins";
export const CardusageRoot = styled.section`
  flex: 1;
  padding: 10px 20px;
  height: 100%;
  min-height: 0;
  justify-content: space-between !important;
  background: linear-gradient(
    120deg,
    rgba(133, 153, 188, 1) 0%,
    rgba(61, 90, 139, 1) 100%
  );
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.25),
      rgba(255, 255, 255, 0)
    );
    border-radius: 15px;
    box-shadow: 0px 25px 45px rgba(61, 90, 139, 0.2);
  }
`;

export const CardusageMain = styled.main`
  width: 100%;
  .card-usage {
    &__content {
    }
    &__summary {
      color: ${({ theme }) => theme.colors.white};
      &-item {
        ${flex("center", "flex-end", "row", "20px")}
      }
      &-label {
        ${text("13px", 400)}
      }
      &-value {
        ${text("24px", 600)}
      }
    }
  }
`;
