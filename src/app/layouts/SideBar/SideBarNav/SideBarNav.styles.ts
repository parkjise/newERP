import styled, { css } from "styled-components";
import {
  absoluteInset,
  remixiFont,
  flex,
  pillBackground,
} from "@/styles/mixins/index";
import type { theme } from "antd";
export const SideBarNavRoot = styled.nav`
  width: 100%;
`;

export const NavList = styled.ul`
  width: 100%;
`;

export const NavItem = styled.li`
  list-style: none;
`;

export const NavLink = styled.a<{ $active?: boolean }>`
  padding-block: 1.5rem;
  text-decoration: none;
  font-size: 1.4rem;
  ${flex("center", "flex-start", "row", "10px")}
  position: relative;
  z-index: 0;
  &::before {
    ${absoluteInset("auto 0 auto auto")}
    ${remixiFont("\\EA54")}
    font-size: 2.4rem;
    color: ${({ theme }) => theme.icon};
  }

  &:hover::after {
    ${pillBackground}
    background-color: ${({ theme }) => theme.menuActiveBg};
  }
  &:hover::before {
    color: ${({ theme }) => theme.menuActiveIcon};
  }

  /* &:hover::after {
    ${pillBackground}
    background-color: ${({ theme }) => theme.menuOverBg};
  }

  &:hover::before {
    color: ${({ $active, theme }) =>
    $active ? theme.menuOverBg : theme.menuIcon};
  } */

  /* ${({ $active, theme }) =>
    $active &&
    css`
      &::after {
        ${pillBackground}
        background-color: ${theme.menuActiveBg};
      }

      &::before {
        color: ${theme.menuOverBg};
      }

      &:hover::after {
        background-color: ${theme.accent.secondary};
      }
    `} */
`;

export const NavIcon = styled.span`
  padding-left: 1rem;
  i {
    font-size: 1.8rem;
    font-weight: normal;
    color: ${({ theme }) => theme.icon};
  }

  ${NavLink}:hover & i {
    color: ${({ theme }) => theme.menuActiveIcon};
  }
`;

export const NavText = styled.span`
  color: ${({ theme }) => theme.text};
  ${NavLink}:hover & {
    color: ${({ theme }) => theme.menuActiveText};
  }
`;
