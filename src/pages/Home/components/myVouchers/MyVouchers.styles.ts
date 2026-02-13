import styled from "styled-components";
import { flex, grid } from "@/styles/mixins";
export const MyVouchersRoot = styled.section``;

export const MyVouchersStats = styled.dl`
  ${grid({
    rowGap: "15px",
  })}
`;
export const MyVouchersStat = styled.div`
  ${flex("center", "space-between", "row")}
  border: 1px solid #efefef;
  border-radius: 4px;
  padding: 10px 20px;
  position: relative;
  .my-vouchers {
    &__label {
      ${flex("center", "flex-start", "row", "15px")}
    }
  }
  &:after {
    content: "";
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: -4px;
    width: 98%;
    height: 2px;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
  }
  &.my-vouchers__total:after {
    background-color: #717171;
  }
  &.my-vouchers__progress:after {
    background-color: #02b4fa;
  }
  &.my-vouchers__hold:after {
    background-color: #f88914;
  }
  &.my-vouchers__rejected:after {
    background-color: #e03f61;
  }
  &.my-vouchers__completed:after {
    background-color: #38cab3;
  }
  &.my-vouchers__pending-approval:after {
    background-color: #6480f5;
  }
`;
