import styled from "styled-components";

export const SalesOverviewRoot = styled.section`
  padding: 20px;
  &:before {
    content: "";
    background: linear-gradient(
      120deg,
      rgba(255, 255, 255, 0.9) 0%,
      rgba(243, 243, 243, 1) 100%
    );
  }
`;
