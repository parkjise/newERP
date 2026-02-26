import styled from "styled-components";
import { grid, text } from "@/styles/mixins";
export const NoticeRoot = styled.section`
  flex: 1;
  height: 100%;
  min-height: 0;
  &.dashboard__widget--notice {
    gap: 0px;
  }
`;

export const NoticeHeader = styled.header``;
export const NoticeBody = styled.div`
  .notice {
    &__list {
      ${grid({})}
    }
    &__item {
      position: relative;
      ${grid({
        rowGap: "5px",
      })}
      padding: 8px 0;
      border-bottom: 1px solid ${({ theme }) => theme.colors.grey[200]};
      & + .notice__item {
        border-bottom: none;
      }
      &--new {
        &:after {
          content: "N";
          position: absolute;
          top: 50%;
          right: 0;
          transform: translateY(-50%);
          width: 18px;
          height: 18px;
          ${text("12px", 700)}
          color: ${({ theme }) => theme.colors.common[100]};
          background-color: #ff7a7a;
          text-align: center;
          border-radius: 4px;
        }
      }
    }
    &__text {
      &--link {
        ${text("13px")}
        color: ${({ theme }) => theme.colors.neutral[800]};
        &:hover {
          color: ${({ theme }) => theme.colors.neutral[900]};
        }
      }
    }
    &__date {
      ${text("12px")}
      color: ${({ theme }) => theme.colors.neutral[600]};
    }
  }
`;
