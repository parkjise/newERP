import styled from "styled-components";
import { AutoComplete } from "antd";
export const AutoCompleteWrapper = styled.div``;
export const AutoCompleteStyles = styled(AutoComplete)`
  border-radius: 0.2rem;
  border-color: ${({ theme }) => theme.colors.grey[200]};
  &:hover {
    border-color: ${({ theme }) => theme.colors.grey[700]};
  }
  .ant-select-placeholder {
    font-size: 12px;
  }
  &.ac-center {
    .ant-select-placeholder {
      padding-left: 5px;
      position: absolute;
      top: 50% !important;
      transform: translateY(-50%) !important;
      margin-top: 0 !important;
    }
  }
`;
