import styled from "styled-components";
import { flex, text } from "@/styles/mixins";
export const NotificationsRoot = styled.section`
  flex: 1;
  height: 100%;
  min-height: 0;
  .notifications {
    &__meta {
      ${text("12px", 500)}
    }
    &__unread-count {
      padding-left: 3px;
      color: #dc3545;
    }
  }
  .widget__heading {
    ${flex("center", "flex-start", "row", "10px")}
  }
`;

export const NotificationsBody = styled.header`
  .notifications {
    &__list {
      ${flex("flex-start", "flex-start", "row", "10px")}
      height: 100%;
    }
    &__item {
      ${flex("flex-start", "space-between", "column")}
      flex: 1;
      background-color: #fff;
      border-radius: 4px;
      padding: 15px;
      position: relative;
      border: 1px solid #efefef;
      height: 100%;
      min-height: 0;
      &--unread {
        background-color: #f7f8f9;
        &:after {
          content: "";
          position: absolute;
          bottom: 10px;
          right: 10px;
          width: 6px;
          height: 6px;
          background-color: #ff7a7a;
          border-radius: 50%;
        }
      }
    }
    &__meta {
      ${text("12px", 500)}
    }
    &__unread-count {
      padding-left: 3px;
      color: #dc3545;
    }
    &__text {
      ${text("13px", 400, 1.3)}
    }
    &__time {
      ${text("12px")}
      color: ${({ theme }) => theme.colors.neutral[600]};
    }
  }
`;
