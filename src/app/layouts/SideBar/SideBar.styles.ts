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
  width: 220px;
  z-index: 100;
  &.active {
    width: 80px;
    .sidebar__heading-text,
    .sidebar__nav-text,
    .sidebar__nav-link:before,
    .sidebar__heading::before,
    .sidebar__heading-badge {
      display: none;
    }
    .sidebar__heading,
    .sidebar__nav-link {
      justify-content: center;
    }
    .sidebar__nav-icon {
      padding-left: 0;
      i {
        font-size: 2rem;
      }
    }
    .sidebar__footer {
      justify-content: center;
    }
  }
`;

export const SideBarInner = styled.div`
  width: 100%;
  ${flex("flex-start", "flex-start", "column")}
  gap: 8px;
  padding: 2rem 1rem;
`;
