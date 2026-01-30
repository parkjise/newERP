import styled from "styled-components";
import { Input } from "antd";
const { Search } = Input;

export const SearchInputStyles = styled(Search)`
  .ant-input-compact-item {
    border-radius: 0.2rem;
    border-color: ${({ theme }) => theme.colors.grey[200]};
    &:hover {
      border-color: ${({ theme }) => theme.colors.grey[700]};
    }
  }
`;
