import styled from "styled-components";
import * as mixins from "@/styles/mixins";
export const SalesOverviewRoot = styled.section`
  .sales-overview {
    &__body {
      ${mixins.grid({
        rowGap: "25px",
      })}
    }
    &__list {
      ${mixins.grid({
        columns: "repeat(2,1fr)",
        columnGap: "10px",
        rowGap: "10px",
      })}
    }
    &__item {
      background-color: #f7f8f9;
      border: 1px solid #efefef;
      border-radius: 4px;
      padding: 3px 10px;
    }
    &__metric {
      ${mixins.grid()}
    }
    &__label {
      ${mixins.text("13px")}
      color: ${({ theme }) => theme.colors.neutral[600]};
      text-align: left;
    }
    &__value {
      ${mixins.text("14px", 500)}
      color: ${({ theme }) => theme.colors.neutral[800]};
      text-align: right;
    }
    &__chart {
      text-align: center;
    }
  }
`;
