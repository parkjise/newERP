import styled from "styled-components";
import { Select } from "antd";

export const SelectWrapper = styled.div`
  display: grid;
  gap: 6px;
`;

export const Label = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;

  .required {
    color: #ff4d4f;
  }
`;

export const HelperText = styled.div<{ $error?: boolean }>`
  font-size: 12px;
  color: ${({ $error }) => ($error ? "#ff4d4f" : "rgba(0,0,0,0.45)")};
`;

export const FormSelect = styled(Select)`
  border-radius: 0.2rem;
  border: 1px solid #e5e8eb;
  padding-right: 5px;
  height: 28px;

  &.ant-select-sm {
    height: 24px;
  }
  &.ant-select-lg {
    height: 32px;
  }

  .anticon-down {
    svg {
      display: none;
    }
    &::before {
      display: inline-block;
      content: "\\ea4e";
      font-family: "remixicon" !important;
      font-weight: normal;
      font-size: 18px;
      line-height: 22px;
    }
  }

  &:focus,
  &:hover {
    border-color: ${({ theme }) => theme.colors.neutral[600]};
  }

  .ant-select-selector {
    align-items: center;

    .ant-select-selection-placeholder {
      color: ${({ theme }) => theme.colors.neutral[500]};
      font-size: 12px;
      font-weight: 300;
    }
  }

  .ant-select-selection-item {
    font-size: 12px;
    color: ${({ theme }) => theme.colors.neutral[600]};
    font-weight: 400;
  }
`;
