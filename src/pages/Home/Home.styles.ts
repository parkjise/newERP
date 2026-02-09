import styled from "styled-components";
import { grid, absoluteCenterXY, flex } from "@/styles/mixins/index";

export const Dashboard = styled.div`
  height: 100%;
`;

export const DashboardLayout = styled.div`
  position: relative;
  height: 100%;
  z-index: 1;
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
      box-shadow: 14.65px 17.58px 29.29px rgba(0, 0, 0, 0.03);
      border: 1px solid transparent;

      &:before {
        content: "";
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
        border-radius: 1.5rem;
        backdrop-filter: blur(20px);
        -webkit-backdrop-filter: blur(20px); /* Safari */
      }
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
