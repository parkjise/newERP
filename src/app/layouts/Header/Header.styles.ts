import styled from "styled-components";
import { absolute, text, flex } from "@/styles/mixins/index";
export const HeaderStyles = styled.header`
  position: relative;
  height: 5.5rem;
  background-color: ${({ theme }) => theme.colors.white};
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey[200]};
  ${flex("center", "space-between")}
  padding-inline: 3rem;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.02);

  & .header {
    &__main {
      ${flex("center", "flex-start", "row")}
    }
    &__logo {
      width: 19rem;
      height: 100%;
      img {
        width: 9rem;
        height: 1.9rem;
      }
    }
    &__search {
      &-group {
        ${flex("center", "flex-start")}
        &:before {
          content: "";
          display: inline-flex;
          width: 0.1rem;
          height: 3rem;
          background-color: ${({ theme }) => theme.colors.grey[100]};
          margin-right: 2rem;
        }
      }
    }
    &__utils {
      ${flex("center", "flex-start", "row", "15px")}
      & .header__button {
        background-color: #fff;
        border-color: ${({ theme }) => theme.colors.grey[200]};
        color: ${({ theme }) => theme.colors.grey[700]};
        i {
          ${text("2rem")}
          color: ${({ theme }) => theme.colors.grey[700]};
        }
        &:hover {
          background-color: ${({ theme }) => theme.colors.neutral[200]};
          border-color: ${({ theme }) => theme.colors.grey[200]};
        }
      }
    }
    &__button {
      border-radius: 50%;
      width: 3.4rem;
      height: 3.4rem;
      .ant-btn-icon {
        ${text("1.8rem")}
      }
    }
    &__icon {
      &-wrapper {
        position: relative;
      }
    }
    &__badge {
      ${absolute({ top: "-10px", right: "-10px" })}
      width: 2rem;
      height: 1.5rem;
      ${text("1.1rem", 600, "15px")}
      color: ${({ theme }) => theme.colors.white};
      background-color: ${({ theme }) => theme.colors.red};
      border-radius: 0.8rem;
    }
  }
`;
