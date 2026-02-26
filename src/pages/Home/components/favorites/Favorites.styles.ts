import styled from "styled-components";
import { flex, text } from "@/styles/mixins";
export const FavoritesRoot = styled.section`
  flex: 1;
  height: 100%;
  min-height: 0;
  &:before {
    background: linear-gradient(
      120deg,
      rgba(255, 255, 255, 0.9) 0%,
      rgba(255, 255, 255, 0.6) 100%
    );
    opacity: 0.9;
  }
  .favorites {
    &__nav {
      height: 100%;
    }
    &__list {
      height: 100%;
      ${flex("stretch", "flex-start", "row", "10px")}
    }
    &__item {
      flex: 1;
      background-color: #f7f8f9;
      border-radius: 4px;
      padding: 10px 15px 0 15px;
      position: relative;
      border: 1px solid #efefef;
      &-meta {
        ${flex("flex-start", "space-between", "column", "0px")}
      }
      &-icon {
        i {
          ${text("22px")}
          color: ${({ theme }) => theme.colors.grey[400]};
        }
      }
      &-label {
        color: ${({ theme }) => theme.colors.neutral[800]};
        ${text("13px", 400, 1)}
      }
    }
    &__action {
      position: absolute;
      top: 7px;
      right: 7px;
      width: 20px;
      height: 20px;
      border-color: transparent;
      background-color: transparent;
      ${text("16px")};
      &:hover,
      &:active,
      &:focus {
        background-color: transparent !important;
        border-color: transparent !important;
      }
      i {
        color: #fdc700;
        &.active {
          color: ${({ theme }) => theme.colors.neutral[400]};
        }
      }
    }
    &__link {
      color: ${({ theme }) => theme.colors.neutral[800]};
    }
  }
`;
