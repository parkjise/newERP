import styled from "styled-components";
import { flex, text } from "@/styles/mixins";
export const CardusageFooter = styled.footer`
  width: 100%;
  .card-usage {
    &__footer {
    }
    &__last-usage {
      color: ${({ theme }) => theme.colors.common[100]};
      ${flex("center", "space-between")}
      &-row {
        ${flex("center", "flex-start", "row", "10px")}
      }
      &-label {
        ${text("12px", 300)}
      }
      &-value {
        ${text("12px", 300)}
      }
    }
    &__merchant {
      ${text("13px", 400)}
    }
    &__amount {
      ${text("13px", 400)}
    }
  }
`;
