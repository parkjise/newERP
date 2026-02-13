import styled, { keyframes } from "styled-components";
import { grid, flex, text } from "@/styles/mixins";

const fillGrow = keyframes`
  from {
    transform: scaleX(0);
  }
  to{
    transform: scaleX(1);
  }
`;
export const PartnersSalesRoot = styled.section`
  .top-partners-sales {
    &__list {
      ${grid({ rows: "repeat(5, 1fr)" })}
      align-items: center;
      height: 100%;
    }
    &__item {
    }
    &__row {
      width: 100%;
      padding-inline: 20px;
      ${flex("center", "flex-start", "row", "10px")}
    }
    &__partner {
      display: block;
      width: 100px;
      max-width: 100px;
      padding-right: 10px;
      ${text("13px", 400)}
    }
    &__metrics {
      width: 100%;
      ${grid({ rowGap: "5px" })}
      padding-left: 20px;
    }
    &__bar {
      width: 100%;
      height: 8px;
      border-radius: 999px;
      overflow: hidden;
      position: relative;
      &-fill {
        display: block;
        height: 100%;
        width: 0%;
        border-radius: inherit;
        background: ${({ theme }) => theme.colors.grey[300]};
        transform-origin: left center;
        animation: ${fillGrow} 0.5s ease-out forwards;
        transition: width 0.4s ease;
        &--top {
          background: linear-gradient(90deg, #6c89ba, #3d5a8b);
        }
      }
    }
    &__amount {
      ${text("12px", 400)}
      color: ${({ theme }) => theme.colors.neutral[600]};
    }
  }
`;
