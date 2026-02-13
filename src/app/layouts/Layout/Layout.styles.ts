import styled from "styled-components";
import { grid } from "@/styles/mixins";
export const LayoutStyles = styled.div`
  width: 100%;
  height: 100%;
  background-color: #000;
  ${grid({
    columns: "220px 1fr",
    rows: "60px 1fr",
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
