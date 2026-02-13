import styled from "styled-components";

export const CardusageHeader = styled.header`
  && .card-usage {
    &__title {
      color: ${({ theme }) => theme.colors.white};
    }

    &__actions {
      width: 100px;
    }
    &__filter {
      background-color: #7a95c2;
      border: 1px solid #5b7095;
      .ant-select-content-value {
        color: ${({ theme }) => theme.colors.white};
      }
      .anticon-down {
        color: ${({ theme }) => theme.colors.white};
      }
    }
  }
`;
