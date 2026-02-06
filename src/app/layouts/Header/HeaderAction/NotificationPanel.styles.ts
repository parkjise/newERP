import styled from "styled-components";
import { text, flex } from "@/styles/mixins/index";
export const NotificationRoot = styled.section`
  display: block;
  position: absolute;
  background-color: #fff;
  width: 30rem;
  top: 4.8rem;
  left: 0px;
  border-radius: 0.4rem;

  &.active {
    display: block;
  }
`;

export const NotificationHeader = styled.header`
  ${flex("center", "space-between")}
  padding:1rem 2rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey[100]};
  .notification {
    &__heading {
      ${text("1.6rem")}
    }
  }
`;

export const NotificationBody = styled.div``;
export const NotificationList = styled.div`
  .notification {
    &__list {
    }
    &__item {
      padding: 1rem 2rem;
      ${flex("center", "space-between")}
      border-bottom: 1px solid ${({ theme }) => theme.colors.grey[100]};
      &-main {
        ${flex("center", "flex-start", "row", "2rem")}
      }
    }
    &__icon {
      width: 4rem;
      height: 4rem;
      background-color: #3aa8ff;
      border-radius: 0.8rem;
      ${flex("center", "center")}
      i {
        font-size: 2.4rem;
        color: ${({ theme }) => theme.colors.white};
      }
    }
    &__content {
      ${flex("flex-start", "flex-start", "column")}
    }
    &__title {
      ${text("1.4rem")}
      color: ${({ theme }) => theme.colors.neutral[800]};
    }
    &__date {
      ${text("1.2rem")}
      color: ${({ theme }) => theme.colors.neutral[600]};
    }
    &__close {
      color: ${({ theme }) => theme.colors.neutral[600]};
    }
  }
`;
export const NotificationFooteer = styled.div``;
