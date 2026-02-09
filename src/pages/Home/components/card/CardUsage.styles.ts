import styled from "styled-components";

export const CardusageRoot = styled.section`
  height: 120px;
  border: 1px solid rgba(255, 255, 255, 0.1) !important;
  padding: 10px 20px;
  &:before {
    background: linear-gradient(
      120deg,
      rgba(90, 118, 167, 1) 100%,
      rgba(61, 90, 139, 1) 100%
    );
    opacity: 1;
  }
  &:after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    background: linear-gradient(
      120deg,
      rgba(255, 255, 255, 0.45) 0%,
      rgba(250, 250, 250, 0) 100%
    );
    opacity: 1;
    border-radius: 1.5rem;
  }
`;
