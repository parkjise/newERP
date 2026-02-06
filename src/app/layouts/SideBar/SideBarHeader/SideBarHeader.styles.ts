import styled from "styled-components";
import {
  remixiFont,
  absoluteInset,
  text,
  flex,
  pillBackground,
} from "@/styles/mixins/index";

export const SideBarHeaderRoot = styled.header`
  width: 100%;
`;

export const Heading = styled.div`
  position: relative;
  cursor: pointer;
  z-index: 0;
  ${flex("center", "flex-start", "row", "10px")}
  &::before {
    ${absoluteInset("auto 0 auto auto")}
    ${remixiFont("\\EA54")}
    font-size: 24px;
    color: ${({ theme }) => theme.icon};
  }
  &:hover {
    color: ${({ theme }) => theme.menuActiveText};
  }
  /* hover pill */
  &:hover::after {
    ${pillBackground}
    background-color: ${({ theme }) => theme.menuActiveBg};
  }

  &:hover::before {
    color: ${({ theme }) => theme.menuActiveIcon};
  }
`;

export const HeadingIcon = styled.span`
  padding-left: 1rem;
  i {
    font-size: 1.8rem;
    font-weight: normal;
    color: ${({ theme }) => theme.icon};
  }
  ${Heading}:hover & i {
    color: ${({ theme }) => theme.accent.primary};
  }
`;

export const HeadingContent = styled.div`
  ${flex("center", "flex-start", "row", "10px")}
`;

export const HeadingBadge = styled.span`
  background-color: #fff;
  display: block;
  font-size: 1.2rem;
  padding: 0.1rem 0.8rem;
  border-radius: 0.2rem;
  color: ${({ theme }) => theme.accent.primary};
  ${Heading}:hover & {
    background-color: ${({ theme }) => theme.accent.menuActiveBg};
  }
`;

export const HeadingText = styled.div`
  ${text("1.4rem")}
`;
