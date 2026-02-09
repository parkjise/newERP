import styled from "styled-components";

export const PartnersSalesRoot = styled.section`
  padding: 20px;
  &:before {
    content: "";
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      120deg,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 0.8) 100%
    );
    opacity: 0.9;
    border-radius: 1.5rem;
  }
`;
