import styled from "styled-components";
import { Input } from "antd";
export const InputStyles = styled(Input)`
  border-radius: 0.2rem;
  border-color: ${({ theme }) => theme.colors.grey[200]};
  &:hover {
    border-color: ${({ theme }) => theme.colors.grey[700]};
  }
`;
