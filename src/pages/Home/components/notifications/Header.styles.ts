import styled from "styled-components";
import * as mixins from "@/styles/mixins";

export const NotificationsHeader = styled.header`
  .notifications {
    &__heading {
      ${mixins.flex("center", "flex-start", "row", "10px")}
    }
    &__meta {
      ${mixins.text("12px", 500)}
    }
    &__unread-count {
      padding-left: 3px;
      color: #dc3545;
    }
  }
`;
