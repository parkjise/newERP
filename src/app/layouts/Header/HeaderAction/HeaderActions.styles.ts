import styled from "styled-components";
import Button from "@/components/ui/button";
import { absolute, text, flex } from "@/styles/mixins/index";
export const HeaderUtilsRoot = styled.div`
  ${flex("center", "flex-start", "row", "15px")}
  position: relative;
`;

export const HeaderButton = styled(Button)`
  && {
    background-color: #fff;
    border-color: ${({ theme }) => theme.colors.grey[200]};
    color: ${({ theme }) => theme.colors.grey[700]};
    box-shadow: none;
    i {
      ${text("2rem")}
      color: ${({ theme }) => theme.colors.grey[700]};
    }
    &&:hover {
      background-color: ${({ theme }) => theme.colors.neutral[200]};
      border-color: ${({ theme }) => theme.colors.grey[200]};
    }
    &.header {
      &__button {
        border-radius: 50%;
        width: 3.8rem;
        height: 3.8rem;
        .ant-btn-icon {
          ${text("2rem")}
        }
      }
      &__icon {
        &-wrapper {
          position: relative;
        }
      }
    }
    .header__badge {
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
