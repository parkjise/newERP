import styled from "styled-components";

export const FavoritesRoot = styled.section`
  flex: 1;
  padding: 20px;
  &:before {
    background: linear-gradient(
      120deg,
      rgba(255, 255, 255, 0.7) 0%,
      rgba(243, 243, 243, 1) 100%
    );
    opacity: 0.7;
  }
`;
