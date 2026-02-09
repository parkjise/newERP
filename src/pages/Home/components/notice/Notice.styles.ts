import styled from "styled-components";

export const NoticeRoot = styled.section`
  flex: 1;
  padding: 20px;
  &:before {
    background: linear-gradient(
      120deg,
      rgba(255, 255, 255, 0.8) 0%,
      rgba(255, 255, 255, 1) 100%
    );
    opacity: 0.9;
  }
`;
