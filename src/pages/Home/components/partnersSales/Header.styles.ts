import styled from "styled-components";
import { flex } from "@/styles/mixins";
export const PartnersSalesHeader = styled.header`
  .top-partners-sales {
    &__filter {
      width: 90px;
      &-form {
        ${flex("center", "flex-start", "row", "5px")}
      }
    }
  }
`;
