import styled from "styled-components";
import { flex, grid, text, absoluteCenterXY } from "@/styles/mixins";

export const Dashboard = styled.div`
  width: 100%;
  height: 100%;
  ${flex("center", "center")}
  background-color: #F2F4F6;
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
    &__widget {
      ${flex("flex-start", "flex-start", "column", "15px")}
      width: 100%;
      position: relative;
      border-radius: 1.5rem;
      background-color: #fff;
      padding: 20px;
      transition: box-shadow 0.3s ease;
      &:hover {
        box-shadow: 5px 25px 35px rgba(0, 0, 0, 0.08);
      }

      .widget__body {
        width: 100%;
        height: 100%;
      }
      .widget__refresh {
        width: 24px;
        height: 24px;
        border-color: transparent;
        background-color: transparent;
        ${text("18px")};
        color: ${({ theme }) => theme.colors.neutral[600]};
        &:hover,
        &:active,
        &:focus {
          border-color: transparent;
          color: ${({ theme }) => theme.colors.neutral[800]};
        }
      }
      .approval-icon {
        ${flex("center", "center")}
        border-radius: 10px;
        width: 34px;
        height: 34px;
        i {
          ${text("20px")}
        }
        &--total {
          background-color: #eeeeee;
          color: #717171;
        }
        &--progress {
          background-color: #dff2fa;
          color: #02b4fa;
        }
        &--hold {
          background-color: #fdeddc;
          color: #f88914;
        }
        &--rejected {
          background-color: #ffedf1;
          color: #e03f61;
        }
        &--completed {
          background-color: #e2f2ee;
          color: #38cab3;
        }
        &--pending-approval {
          background-color: #edf0ff;
          color: #6480f5;
        }
      }
      .approval-count {
        ${text("24px", 600)}
        color: ${({ theme }) => theme.colors.neutral[800]};
      }
      .approval-text {
        ${text("13px", 300)}
        color: ${({ theme }) => theme.colors.neutral[800]};
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

export const Col = styled.div`
  &.dashboard {
    &__col {
      width: 100%;
      height: 100%;
      ${grid({
        rows: "1fr 1fr",
        rowGap: "20px",
      })}
    }
  }
`;
