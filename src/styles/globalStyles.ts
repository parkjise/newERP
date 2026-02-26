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
    font-weight: 400;
    /* letter-spacing: -0.5px; */
    font-family:"Pretendard" ;
    font-size: 62.5%;
    color:  ${({ theme }) => theme.colors.grey[700]};
  }

  #root {
    width: 100%;
    height: 100vh;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  a{
    text-decoration: none;
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
    :where(.css-dev-only-do-not-override-xbngoj).ant-btn:not(:disabled):not(
      .ant-btn-disabled
    ):hover {
    background-color: transparent;
  }
  :where(.css-dev-only-do-not-override-xbngoj).ant-btn.ant-btn-variant-solid{
    box-shadow: none;

  }
`;
