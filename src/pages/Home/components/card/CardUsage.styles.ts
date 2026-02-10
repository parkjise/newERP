import styled from "styled-components";

export const CardusageRoot = styled.section`
  flex: 1;
  padding: 10px 20px;
  background: linear-gradient(
    120deg,
    rgba(133, 153, 188, 1) 30%,
    rgba(61, 90, 139, 1) 100%
  );
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.25),
      rgba(255, 255, 255, 0)
    );
    border-radius: 15px;
  }
`;
