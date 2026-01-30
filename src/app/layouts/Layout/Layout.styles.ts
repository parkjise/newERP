import styled from "styled-components";
import * as mixins from "@/styles/mixins";
export const LayoutStyles = styled.div`
  width: 100%;
  height: 100%;
  background-color: #000;
  ${mixins.grid({
    columns: "220px 1fr",
    rows: "50px 1fr",
  })}
  grid-template-areas: "header header" "sidebar main";
  .header {
    grid-area: header;
  }
  .sidebar {
    grid-area: sidebar;
  }
  .main {
    grid-area: main;
  }
`;
