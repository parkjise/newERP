import styled from "styled-components";
import { flex } from "@/styles/mixins/index";
import Button from "@/components/ui/button";

export const SideBarFooterRoot = styled.footer`
  width: 100%;
  ${flex("center", "flex-end")}
  background-color: ${({ theme }) => theme.footerBg};
  border-top: 1px solid ${({ theme }) => theme.line};
`;

export const CollapseButton = styled(Button)`
  color: ${({ theme }) => theme.text} !important;
  border: none;
  background-color: transparent;
  i {
    font-size: 2.4rem;
  }
  &:hover,
  &:focus,
  &:active {
    border: none !important;
    background-color: transparent;
    color: ${({ theme }) => theme.accent.primary};
  }
`;
