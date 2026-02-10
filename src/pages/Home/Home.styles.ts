import styled from "styled-components";
import { grid, absoluteCenterXY, flex } from "@/styles/mixins/index";

export const Dashboard = styled.div`
  width: 100%;
  height: 100%;
  ${flex("center", "center")}
`;

export const DashboardLayout = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  ${grid({
    columns: "280px 1fr 1fr 280px",
    columnGap: "2rem",
    rowGap: "2rem",
    rows: "359px 359px",
  })}
  padding: 6rem 10rem;
  .dashboard {
    &__col {
      width: 100%;
      height: 100%;
      ${flex("flex-start", "flex-start", "column", "20px")}
    }
    &__widget {
      width: 100%;
      position: relative;
      border-radius: 1.5rem;
      background-color: #fff;
      /* box-shadow: 14.65px 17.58px 29.29px rgba(0, 0, 0, 0.03); */
      /* &:before {
        content: "";
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
        border-radius: 1.5rem;
        backdrop-filter: blur(20px);
        -webkit-backdrop-filter: blur(20px);
      }
      &:after {
        content: "";
        position: absolute;
        inset: 0;
        border-radius: 1.5rem;
        padding: 1px;
        background: linear-gradient(
          180deg,
          rgba(255, 255, 255, 0.5) 0%,
          rgba(255, 255, 255, 0.23) 100%
        );
        -webkit-mask:
          linear-gradient(#fff 0 0) content-box,
          linear-gradient(#fff 0 0);
        -webkit-mask-composite: xor;
        mask:
          linear-gradient(#fff 0 0) content-box,
          linear-gradient(#fff 0 0);
        mask-composite: exclude;
        pointer-events: none;
      } */
    }
  }
  &::before {
    display: block;
    ${absoluteCenterXY()}
    content: "";
    width: 100%;
    height: 100%;
    background-color: rgba(215, 215, 215, 5);
    border-radius: 50%;
    z-index: -1;
    filter: blur(150px);
  }
`;
