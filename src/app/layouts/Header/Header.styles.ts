import styled from "styled-components";
import { flex } from "@/styles/mixins/index";
export const HeaderStyles = styled.header`
  position: relative;
  height: 6rem;
  background-color: ${({ theme }) => theme.colors.common[100]};
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey[200]};
  ${flex("center", "space-between")}
  padding-right: 3rem;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.02);
  z-index: 2;
  & .header {
    &__main {
      ${flex("center", "flex-start", "row")}
    }
    &__logo {
      width: 22rem;
      height: 100%;
      text-align: center;
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
  }
`;
