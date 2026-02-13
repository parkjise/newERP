import { createGlobalStyle } from "styled-components";

// import * as mixins from "@/styles/mixins";

export const GlobalStyle = createGlobalStyle`

  html{
    font-size: 62.5%;
  }
  html,
  body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100vh;
    box-sizing: border-box;
    font-weight: 400;
    /* letter-spacing: -0.5px; */
    font-family:"Pretendard" ;
    font-size: 62.5%;
    color:  ${({ theme }) => theme.colors.grey[700]};
  }

  #root {
    width: 100%;
    height: 100vh;
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  ul,ol,li,p,h2,figure{
    margin: 0;
    padding: 0;
    list-style: none;
  }

  dl , dt , dd {
    margin-inline-start: 0px;
    margin-block-start: 0em;
    margin-block-end: 0em;
  }
  
`;
