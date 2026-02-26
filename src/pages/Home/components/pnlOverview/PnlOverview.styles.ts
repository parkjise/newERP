import styled from "styled-components";
import * as mixins from "@/styles/mixins";
export const PnlOverviewRoot = styled.section`
  .pnl-overview {
    &__item {
      background-color: #f7f8f9;
      border: 1px solid #efefef;
      border-radius: 4px;
      padding: 5px 10px;
    }
    &__metric {
      ${mixins.grid()}
    }
    &__label {
      ${mixins.text("13px", 500)}
      color: ${({ theme }) => theme.colors.neutral[800]};
    }
    &__value {
      ${mixins.text("13px")}
      color: ${({ theme }) => theme.colors.neutral[600]};
    }
    &__amount {
      font-weight: 500;
      color: ${({ theme }) => theme.colors.neutral[800]};
    }
  }
`;
