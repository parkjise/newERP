import styled from "styled-components";
import { flex, grid } from "@/styles/mixins";
export const ErpApprovalRoot = styled.section`
  .erp-approval {
    &__body {
      ${grid({
        columns: "repeat(3 ,1fr)",
        rows: "repeat(2 ,1fr)",
        rowGap: "15px",
        columnGap: "15px",
      })}
    }
    &__list {
      background-color: #f7f8f9;
      border: 1px solid #efefef;
      border-radius: 4px;
      padding: 25px 15px;
    }
    &__item {
      ${flex("flex-start", "space-between", "column")}
      height: 100%;
    }
    &__desc {
      width: 100%;
      ${flex("center", "space-between")}
    }
  }
`;
