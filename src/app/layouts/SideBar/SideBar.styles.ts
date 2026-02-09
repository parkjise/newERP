import styled from "styled-components";
import { flex } from "@/styles/mixins/index";

export const SideBarRoot = styled.aside`
  background: ${({ theme }) => theme.sidebarBg};
  color: ${({ theme }) => theme.text};
  border-right: 1px solid ${({ theme }) => theme.line};
  transition: background-color 0.3s ease;
  ${flex("flex-start", "space-between", "column")}
  padding-top: 2rem;
  position: relative;
  z-index: 100;
`;

export const SideBarInner = styled.div`
  width: 100%;
  ${flex("flex-start", "flex-start", "column")}
  gap: 8px;
  padding: 2rem 1rem;
`;
